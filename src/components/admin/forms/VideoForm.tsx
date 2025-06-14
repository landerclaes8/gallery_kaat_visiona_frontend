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
import { addVideoSchema } from "../../../lib/schemas";
import { categoryProps } from "../../../types/category";
import { useDisclosure } from "@mantine/hooks";
import CategoryForm from "./CategoryForm";
import { ActionIcon } from "@mantine/core";
import UploadFile, { UploadFileRef } from "../UploadFile";
import { useRef, useState, useEffect } from "react";
import { useSWRConfig } from "swr";

interface Props {
  title: string;
  url: string;
  categoryUrl: string;
}

const VideoForm = ({ title, url, categoryUrl }: Props) => {
  const {
    data: categories,
    error: categoryError,
    isLoading: categoryIsLoading,
  } = useSWR<categoryProps[]>(`/api/${categoryUrl}`, fetcher);

  const uploadFileRef = useRef<UploadFileRef>(null);
  const { trigger: doAddVideo } = useSWRMutation(`/api/${url}`, post);
  const [openedCategories, { open: openCategories, close: closeCategories }] =
    useDisclosure(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const { mutate } = useSWRConfig();

  useEffect(() => {
    if (uploadFileRef.current) {
      setIsUploading(uploadFileRef.current.isLoading);
    }
  }, [uploadFileRef.current?.isLoading]);

  const schema = z.object({
    title: z.string(),
    description: z.string(),
    categoryId: z.string(),
    fileName: z.string().min(2, { message: "Must be longer." }),
  });

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      title: "",
      description: "",
      categoryId: 0,
      fileName: "",
    },
    validate: zodResolver(schema),
  });

  const handleSubmit = async (values: z.infer<typeof addVideoSchema>) => {
    try {
      setIsSubmitting(true);
      await doAddVideo({
        title: values.title,
        description: values.description,
        categoryId: values.categoryId,
        fileName: values.fileName,
      });
      if (uploadFileRef.current) {
        await uploadFileRef.current.handleUpload();
      }

      // Refresh the video list
      await mutate(`/api/${url}`);

      form.reset();
    } catch (error) {
      console.error("Error submitting form", error);
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
          data-cy="video-create-form"
        >
          <TextInput
            label="Title"
            placeholder="Title"
            key={form.key("title")}
            {...form.getInputProps("title")}
            data-cy="video-form-title"
          />
          <TextInput
            label="Description"
            placeholder="Description"
            key={form.key("description")}
            {...form.getInputProps("description")}
            data-cy="video-form-description"
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
              data-cy="video-form-category"
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
          </Group>

          <TextInput
            label="fileName - with .extension"
            placeholder="fileName.webp"
            key={form.key("fileName")}
            {...form.getInputProps("fileName")}
            data-cy="video-form-filename"
          />

          <Group justify="flex-end" mt="md">
            <Button 
              type="submit" 
              data-cy="video-form-submit"
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
        {<CategoryForm url={`${categoryUrl}`} onClose={closeCategories} />}
      </Modal>
      <Grid.Col span={6}>
        <Flex justify="center" align="center" style={{ height: "100%" }}>
          <UploadFile
            path={url}
            type={title}
            photoTrue={false}
            ref={uploadFileRef}
          />
        </Flex>
      </Grid.Col>
    </Grid>
  );
};

export default VideoForm;
