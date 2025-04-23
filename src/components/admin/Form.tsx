import {
  Grid,
  Select,
  TextInput,
  Group,
  Button,
  Modal,
  Title,
  Flex
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import { z } from "zod";
import { fetcher, post } from "../../lib/api";
import { addPhotoSchema } from "../../lib/schemas";
import { categoryProps } from "../../types/category";
import { useDisclosure } from "@mantine/hooks";
import CategoryForm from "./CategoryForm";
import { ActionIcon } from "@mantine/core";
import UploadFile from "./UploadFile";

interface Props {
  title: string;
  url: string;
  categoryUrl: string;
  photoTrue: boolean
}

const Form = ({ title, url, categoryUrl, photoTrue }: Props) => {
  const {
    data: categories,
    error,
    isLoading,
  } = useSWR<categoryProps[]>(`/api/${categoryUrl}`, fetcher);
  const { trigger: doAddPhoto } = useSWRMutation(`/api/${url}`, post);
  const [opened, { open, close }] = useDisclosure(false);

  const schema = z.object({
    title: z.string().min(2, { message: "Must be longer." }),
    description: z.string().min(2, { message: "Must be longer." }),
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

  const addPhoto = async (values: z.infer<typeof addPhotoSchema>) => {
    await doAddPhoto({
      title: values.title,
      description: values.description,
      categoryId: values.categoryId,
      fileName: values.fileName,
    });

    form.reset();
  };

  return (
    <Grid p={20}>
      <Grid.Col span={6}>
        <Title mb={20} size={25}>
          Add new {title}
        </Title>
        <form onSubmit={form.onSubmit(addPhoto)} data-cy="photo-create-form">
          <TextInput
            label="Title"
            placeholder="Title"
            key={form.key("title")}
            {...form.getInputProps("title")}
            data-cy="photo-title"
          />
          <TextInput
            label="Description"
            placeholder="Description"
            key={form.key("description")}
            {...form.getInputProps("description")}
            data-cy="photo-description"
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
              data-cy="photo-category"
              disabled={isLoading || !!error}
              style={{ flex: 1 }}
            />
            <ActionIcon
              variant="filled"
              color="blue"
              onClick={open}
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
            data-cy="photo-fileName"
          />

          <Group justify="flex-end" mt="md">
            <Button type="submit" data-cy="photo-form-submit">
              Toevoegen
            </Button>
          </Group>
        </form>
      </Grid.Col>
      <Modal
        opened={opened}
        onClose={close}
        title="Add new category"
        centered
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 2,
        }}
      >
        {<CategoryForm url={`${categoryUrl}`} onClose={close} />}
      </Modal>

      <Grid.Col span={6}>
    <Flex justify="center" align="center" style={{ height: "100%" }}>
      <UploadFile path={url} type={title} photoTrue={photoTrue} />
    </Flex>
  </Grid.Col>
    </Grid>
  );
};

export default Form;
