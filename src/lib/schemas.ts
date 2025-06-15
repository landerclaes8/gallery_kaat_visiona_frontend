import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export const addPhotoSchema = z.object({
  title: z.string(),
  description: z.string(),
  albumId: z.number().int(),
  fileName: z.string(),
});

export const addVideoSchema = z.object({
  title: z.string(),
  description: z.string(),
  categoryId: z.number().int(),
  fileName: z.string(),
});

export const addCategorySchema = z.object({
  name: z.string(),
  fileName: z.string(),
});

export const addAlbumSchema = z.object({
  name: z.string(),
  thumbnail: z.string(),
  categoryPhotoId: z.number().int(),
});
