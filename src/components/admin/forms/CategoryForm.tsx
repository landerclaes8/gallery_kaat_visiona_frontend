import useSWRMutation from "swr/mutation";
import { post } from "../../../lib/api";
import { z } from "zod";
import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import { addCategorySchema } from "../../../lib/schemas";
import { TextInput, Group, Button } from "@mantine/core";

interface Props {
  url: string;
  onClose: () => void;
}

const CategoryForm = ({ url, onClose }: Props) => {
  const { trigger: doAddCategory } = useSWRMutation(`/api/${url}`, post);

  const schema = z.object({
    name: z.string().min(2, { message: "Must be longer." }),
  });

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
    },
    validate: zodResolver(schema),
  });

  const addCategory = async (values: z.infer<typeof addCategorySchema>) => {
    await doAddCategory({
      name: values.name,
    });

    form.reset();
    onClose();
  };

  return (
    <form onSubmit={form.onSubmit(addCategory)} data-cy="category-create-form">
      <TextInput
        label="Category"
        placeholder="category"
        key={form.key("name")}
        {...form.getInputProps("name")}
        data-cy="category-form"
      />
      <Group justify="flex-end" mt="md">
        <Button type="submit" data-cy="category-form-submit">
          Toevoegen
        </Button>
      </Group>
    </form>
  );
};

export default CategoryForm;
