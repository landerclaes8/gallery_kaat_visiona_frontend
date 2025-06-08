import { z } from 'zod';

export const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export const addPhotoSchema = z.object({
  title: z.string(),
  description: z.string(),
  categoryId: z.number().int(),
  fileName: z.string(),
});

export const addCategorySchema = z.object({
  name: z.string(),
});
