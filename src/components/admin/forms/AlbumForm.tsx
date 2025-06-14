import useSWRMutation from "swr/mutation";
import { post } from "../../../lib/api";
import { z } from "zod";
import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import { Grid } from "@mantine/core";
import { TextInput, Group, Button, Select } from "@mantine/core";
import UploadFile, { UploadFileRef } from "../UploadFile";
import { useRef, useState, useEffect } from "react";

interface categoryProps {
  id: number;
  name: string;
}

interface Props {
  albumUrl: string;
  categories: categoryProps[];
  onClose: () => void;
}

const AlbumForm = ({ albumUrl, categories, onClose }: Props) => {
  const { trigger: doAddAlbum } = useSWRMutation(`/api/${albumUrl}`, post);
  const uploadFileRef = useRef<UploadFileRef>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    if (uploadFileRef.current) {
      setIsUploading(uploadFileRef.current.isLoading);
    }
  }, [uploadFileRef.current?.isLoading]);

  const schema = z.object({
    name: z.string().min(2, { message: "Must be longer." }),
    thumbnail: z.string().min(2, { message: "Must be longer." }),
    categoryPhotoId: z.string(),
  });

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      thumbnail: "",
      categoryPhotoId: "",
    },
    validate: zodResolver(schema),
  });

  const handleSubmit = async (values: {
    name: string;
    thumbnail: string;
    categoryPhotoId: string;
  }) => {
    try {
      setIsSubmitting(true);
      await doAddAlbum({
        name: values.name,
        thumbnail: values.thumbnail,
        categoryPhotoId: Number(values.categoryPhotoId),
      });

      if (uploadFileRef.current) {
        await uploadFileRef.current.handleUpload();
      }

      form.reset();
      onClose();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Grid>
      <Grid.Col span={4}>
        <form onSubmit={form.onSubmit(handleSubmit)} data-cy="album-create-form">
          <TextInput
            label="Album"
            placeholder="album"
            key={form.key("name")}
            {...form.getInputProps("name")}
            data-cy="album-form"
          />

          <TextInput
            label="fileName thumbnail - with .extension"
            placeholder="fileName.webp"
            key={form.key("thumbnail")}
            {...form.getInputProps("thumbnail")}
            data-cy="photoAlbum-thumbnail"
          />

          <Select
            label="Category"
            placeholder="Select a category"
            data={
              categories?.map((category) => ({
                value: String(category.id),
                label: category.name,
              })) || []
            }
            key={form.key("categoryPhotoId")}
            {...form.getInputProps("categoryPhotoId")}
            data-cy="photo-category"
            style={{ flex: 1 }}
          />

          <Group justify="flex-end" mt="md">
            <Button 
              type="submit" 
              data-cy="album-form-submit"
              loading={isSubmitting || isUploading}
              disabled={isSubmitting || isUploading}
            >
              Toevoegen
            </Button>
          </Group>
        </form>
      </Grid.Col>
      <Grid.Col span={8}>
        <UploadFile 
          path={albumUrl} 
          type="photoAlbum" 
          photoTrue={true} 
          ref={uploadFileRef}
        />
      </Grid.Col>
    </Grid>
  );
};

export default AlbumForm;
