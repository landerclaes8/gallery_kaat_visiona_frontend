import useSWRMutation from "swr/mutation";
import { post } from "../../../lib/api";
import { z } from "zod";
import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import { addCategorySchema } from "../../../lib/schemas";
import { TextInput, Group, Button, Grid } from "@mantine/core";
import UploadFile, { UploadFileRef } from "../UploadFile";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

interface Props {
  url: string;
  photoTrue: boolean;
  onClose: () => void;
}

const CategoryForm = ({ url, photoTrue, onClose }: Props) => {
  const { trigger: doAddCategory } = useSWRMutation(`/api/${url}`, post);
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
    fileName: z
      .string()
      .min(2, { message: " Please fill in a filename with extension" }),
  });

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      fileName: "",
    },
    validate: zodResolver(schema),
  });

  const handleSubmit = async (values: z.infer<typeof addCategorySchema>) => {
    try {
      setIsSubmitting(true);
      await doAddCategory({
        name: values.name,
        fileName: values.fileName,
      });

      if (uploadFileRef.current) {
        await uploadFileRef.current.handleUpload();
      }

      form.reset();
      onClose();
    } catch (error) {
      console.error("error submitting form", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Grid>
      <Grid.Col span={4}>
        <form
          onSubmit={form.onSubmit(handleSubmit)}
          data-cy="category-create-form"
        >
          <TextInput
            label="Category"
            placeholder="category"
            key={form.key("name")}
            {...form.getInputProps("name")}
            data-cy="category-form"
          />

          <TextInput
            label="fileName cover - with .extension"
            placeholder="fileName.webp"
            key={form.key("fileName")}
            {...form.getInputProps("fileName")}
            data-cy="photoCategory-cover"
          />
          <Group justify="flex-end" mt="md">
            <Button
              type="submit"
              data-cy="category-form-submit"
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
          path={url}
          type= {photoTrue ? "photoCategory" : "videoCategory"}
          photoTrue={true}
          ref={uploadFileRef}
        />
      </Grid.Col>
    </Grid>
  );
};

export default CategoryForm;
