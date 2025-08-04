import { post } from "../../lib/api";
import { loginFormSchema } from "../../lib/schemas";
import { Button, Card, Flex, Text, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import useSWRMutation from "swr/mutation";
import { z } from "zod";
import { zodResolver } from "mantine-form-zod-resolver";
import { useNavigate } from "react-router";
import { roleToUrlPrefix } from "../../lib/auth";
import { Link } from "react-router";
import { API_URL } from "../../lib/apiConfig";

const LoginPage = () => {
  const {
    isMutating: loginLoading,
    error: loginError,
    trigger: doLogin,
  } = useSWRMutation(`${API_URL}/api/auth/login`, post);
  const navigate = useNavigate();

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      password: "",
    },
    validate: zodResolver(loginFormSchema),
  });

  const loginUser = async (values: z.infer<typeof loginFormSchema>) => {
    const resp = await doLogin({
      email: values.email,
      password: values.password,
    });
    if (!resp?.role) {
      navigate("/notfound");
    }
    const prefix = roleToUrlPrefix[resp.role?.toLowerCase()];
    navigate(`/${prefix}`);
  };

  return (
    <Flex w={"100vw"} h={"100vh"} align={"center"} justify={"center"}>
      <Card w={"20rem"} shadow="sm" padding="lg" radius="md" withBorder>
        <Text ta={"center"} fw={600} fz={"h3"}>
          Aanmelden
        </Text>
        <form onSubmit={form.onSubmit(loginUser)}>
          <TextInput
            label="Email"
            placeholder="e.g. user@example.com"
            key={form.key("email")}
            {...form.getInputProps("email")}
            data-cy="email-input"
          />
          <TextInput
            type="password"
            label="Password"
            mt={"sm"}
            key={form.key("password")}
            {...form.getInputProps("password")}
            data-cy="password-input"
          />
          {loginError && (
            <Text c="red" fz={"xs"}>
              {loginError.toString()}
            </Text>
          )}
          <Button
            data-cy="login-submit"
            disabled={loginLoading}
            w="100%"
            type="submit"
            mt="sm"
          >
            Login
          </Button>
        </form>
        <Button mt={5} component={Link} to="/home">
          Terug naar home
        </Button>
      </Card>
    </Flex>
  );
};

export default LoginPage;
