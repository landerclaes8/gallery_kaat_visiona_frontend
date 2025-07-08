import { Textarea, TextInput, Button } from "@mantine/core";
import { useForm } from "@mantine/form";
import { zodResolver } from "@mantine/form";
import useSWRMutation from "swr/mutation";
import { z } from "zod";
import { post } from "../../lib/api";
import { useState } from "react";

const ContactForm = () => {
  const { trigger: doSendMessage } = useSWRMutation(`/api/contact`, post);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const schema = z.object({
    name: z.string().min(2, { message: "fill in at least two characters." }),
    email: z
      .string()
      .min(5, { message: "make sure email is correct: example@visiona.com" }),
    message: z
      .string()
      .min(10, { message: "message should be at least 10 characters" })
      .max(500),
  });

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validate: zodResolver(schema),
  });

  const handleSubmit = async (values: {
    name: string;
    email: string;
    message: string;
  }) => {
    try {
      setIsSubmitting(true);
      await doSendMessage({
        name: values.name,
        email: values.email,
        message: values.message,
      });
      
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          label="name"
          placeholder="name or company"
          key={form.key("name")}
          {...form.getInputProps("name")}
        ></TextInput>
        <TextInput
          label="email"
          placeholder="example@visiona.com"
          key={form.key("email")}
          {...form.getInputProps("email")}
        ></TextInput>
        <Textarea
          label="message"
          placeholder="message"
          key={form.key("message")}
          {...form.getInputProps("message")}
        ></Textarea>
      </form>

      <Button
        mt={20}
        type="submit"
        data-cy="contact-form-submit"
        className="button"
        disabled={isSubmitting}
      >
        Send
      </Button>
    </>
  );
};

export default ContactForm;
