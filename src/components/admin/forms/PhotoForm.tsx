import {
  Grid,
  Select,
  TextInput,
  Group,
  Button,
  Modal,
  Title,
  Flex,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import { z } from "zod";
import { fetcher, post } from "../../../lib/api";
import { addPhotoSchema } from "../../../lib/schemas";
import { categoryProps } from "../../../types/category";
import { useDisclosure } from "@mantine/hooks";
import CategoryForm from "./CategoryForm";
import { ActionIcon } from "@mantine/core";
import UploadFile, { UploadFileRef } from "../UploadFile";
import { albumProps } from "../../../types/album";
import AlbumForm from "./AlbumForm";
import { useRef, useState, useEffect } from "react";
import { API_URL } from "../../../lib/apiConfig";

interface Props {
  title: string;
  url: string;
  categoryUrl: string;
  albumUrl: string;
}

const PhotoForm = ({ title, url, categoryUrl, albumUrl }: Props) => {
  const {
    data: categories,
    error: categoryError,
    isLoading: categoryIsLoading,
  } = useSWR<categoryProps[]>(`${API_URL}/api/${categoryUrl}`, fetcher);

  const {
    data: albums,
    error: albumError,
    isLoading: albumIsLoading,
  } = useSWR<albumProps[]>(`/api/${albumUrl}`, fetcher);

  const uploadFileRef = useRef<UploadFileRef>(null);
  const { trigger: doAddPhoto } = useSWRMutation(`/api/${url}`, post);
  const [openedCategories, { open: openCategories, close: closeCategories }] =
    useDisclosure(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    if (uploadFileRef.current) {
      setIsUploading(uploadFileRef.current.isLoading);
    }
  }, [uploadFileRef.current?.isLoading]);

  const [openedAlbums, { open: openAlbums, close: closeAlbums }] =
    useDisclosure(false);

  const schema = z.object({
    title: z.string(),
    description: z.string(),
    categoryId: z.string(),
    albumId: z.string(),
    fileName: z.string().min(2, { message: "Must be longer." }),
  });

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      title: "",
      description: "",
      categoryId: 0,
      albumId: 0,
      fileName: "",
    },
    validate: zodResolver(schema),
  });

  const handleSubmit = async (values: z.infer<typeof addPhotoSchema>) => {
    try {
      setIsSubmitting(true);
      await doAddPhoto({
        title: values.title,
        description: values.description,
        albumId: values.albumId,
        fileName: values.fileName,
      });

      if (uploadFileRef.current) {
        await uploadFileRef.current.handleUpload();
      }

      form.reset();
    } catch (error) {
      console.log("error submitting form", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Grid p={20}>
      <Grid.Col span={6}>
        <Title mb={20} size={25}>
          Add new {title}
        </Title>
        <form
          onSubmit={form.onSubmit(handleSubmit)}
          data-cy="photo-create-form"
        >
          <TextInput
            label="Title"
            placeholder="Title"
            key={form.key("title")}
            {...form.getInputProps("title")}
            data-cy="photo-form-title"
          />
          <TextInput
            label="Description"
            placeholder="Description"
            key={form.key("description")}
            {...form.getInputProps("description")}
            data-cy="photo-form-description"
          />

          <Group align="flex-end">
            <Select
              label="Category"
              placeholder="Select a category"
              data={
                categories?.map((category) => ({
                  value: String(category.id),
                  label: category.name,
                })) || []
              }
              key={form.key("categoryId")}
              {...form.getInputProps("categoryId", {
                parse: (value: string) => Number(value),
              })}
              data-cy="photo-form-category"
              disabled={categoryIsLoading || !!categoryError}
              style={{ flex: 1 }}
            />
            <ActionIcon
              variant="filled"
              color="blue"
              onClick={openCategories}
              data-cy="add-category-button"
            >
              +
            </ActionIcon>

            <>
              <Select
                label="Album"
                placeholder="Select an album"
                data={
                  albums?.map((album) => ({
                    value: String(album.id),
                    label: album.name,
                  })) || []
                }
                key={form.key("albumId")}
                {...form.getInputProps("albumId", {
                  parse: (value: string) => Number(value),
                })}
                data-cy="photo-form-album"
                disabled={albumIsLoading || !!albumError}
                style={{ flex: 1 }}
              />
              <ActionIcon
                variant="filled"
                color="blue"
                onClick={openAlbums}
                data-cy="add-album-button"
              >
                +
              </ActionIcon>
            </>
          </Group>

          <TextInput
            label="fileName - with .extension"
            placeholder="fileName.webp"
            key={form.key("fileName")}
            {...form.getInputProps("fileName")}
            data-cy="photo-form-filename"
          />

          <Group justify="flex-end" mt="md">
            <Button
              type="submit"
              data-cy="photo-form-submit"
              loading={isSubmitting || isUploading}
              disabled={isSubmitting || isUploading}
            >
              Toevoegen
            </Button>
          </Group>
        </form>
      </Grid.Col>
      <Modal
        opened={openedCategories}
        onClose={closeCategories}
        title="Add new category"
        centered
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 2,
        }}
      >
        {
          <CategoryForm
            url={`${categoryUrl}`}
            photoTrue={true}
            onClose={closeCategories}
          />
        }
      </Modal>

      <Modal
        size={"55rem"}
        opened={openedAlbums}
        onClose={closeAlbums}
        title="Add new album"
        centered
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 2,
        }}
      >
        {
          <AlbumForm
            albumUrl={albumUrl}
            categories={categories ?? []}
            onClose={closeAlbums}
          />
        }
      </Modal>

      <Grid.Col span={6}>
        <Flex justify="center" align="center" style={{ height: "100%" }}>
          <UploadFile
            path={url}
            type={title}
            photoTrue={true}
            ref={uploadFileRef}
          />
        </Flex>
      </Grid.Col>
    </Grid>
  );
};

export default PhotoForm;
