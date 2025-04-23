export const roleToUrlPrefix: Record<string, string> = {
  admin: "admin",
};

export const getUrlPrefix = (role?: string): string => {
  return (role && roleToUrlPrefix[role.toLowerCase()]) ?? "admin";
};
