import { createContext, PropsWithChildren, useContext } from "react";
import { useNavigate } from "react-router";
import useSWR from "swr";
import { Flex } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { User } from "../../types/auth";
import { UnauthorizedError } from "../error";
import { API_URL } from "../apiConfig";

declare type AuthContext = {
  user?: User;
  logout: () => void;
};

const authContext = createContext<AuthContext | undefined>(undefined);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();
  const { data, isLoading, mutate } = useSWR<User>(
    `${API_URL}/api/auth/me`,
    null,
    {
      onError(err, key) {
        if (err instanceof UnauthorizedError) {
          navigate("/home");
          return;
        }
        console.error(`Failed to fetch: ${key}`, err);
      },
    }
  );

  const logout = async () => {
    const resp = await fetch(`${API_URL}/api/auth/logout`, {
      method: "POST",
      credentials: "include",
    });
    if (!resp.ok) {
      console.error("Failed to log out");
    }
    notifications.show({
      variant: "success",
      message: "Logged Out!",
    });
    await mutate(undefined);
    navigate("/home");
  };

  return (
    <authContext.Provider
      value={{
        user: data,
        logout,
      }}
    >
      {isLoading ? (
        <Flex w="100vw" h="100vh" align="center" justify="center">
          <p>Validating user session</p>
        </Flex>
      ) : (
        children
      )}
    </authContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) {
    throw Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
