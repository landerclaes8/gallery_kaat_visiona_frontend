import { notifications } from "@mantine/notifications";
import { UnauthorizedError } from "./error";

export const fetcher = async (resource: string, init?: RequestInit) => {
  const resp = await fetch(resource, init);
  if (!resp.ok) {
    const errorMsg = `${resp.status} - ${resp.statusText}`;
    if (resp.status === 401 || resp.status === 403) {
      throw new UnauthorizedError(errorMsg);
    }
    throw new Error(errorMsg);
  }
  return resp.json();
};

const request = async (url: string, body: unknown, method: string) => {
  const resp = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    method,
    credentials: "include",
  });
  if (!resp.ok) {
    notifications.show({
      color: "red",
      message: `Failed to change date: ${resp.status} - ${
        resp.statusText
      } - ${await resp.text()}`,
    });
    throw new Error(
      `${resp.status} - ${resp.statusText} - ${await resp.text()}`
    );
  }
  if (!resp.body) {
    notifications.show({
      color: "red",
      message: `Failed to change date: ${resp.status} - ${
        resp.statusText
      } - ${await resp.text()}`,
    });
    return null;
  }
  return resp.json();
};

export const post = async (url: string, { arg: body }: { arg: unknown }) => {
  return request(url, body, "POST");
};

export const put = async (url: string, { arg: body }: { arg: unknown }) => {
  return request(url, body, "PUT");
};

export const deleteReq = async (
  url: string,
  { arg: body }: { arg: unknown }
) => {
  return request(url, body, "DELETE");
};
