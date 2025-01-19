import { z } from "zod";

export const usernameValidationSchema = z.object({
  username: z.string(),
});

export const LabelValueSchema = z.object({
  label: z.string(),
  value: z.string(),
});

export const createCategorySchema = z.object({
  label: z.string(),
  value: z.string(),
});

export type TValidateUsername = z.infer<typeof usernameValidationSchema>;
export type TCreateCategory = z.infer<typeof createCategorySchema>;
export type TLabelValue = z.infer<typeof LabelValueSchema>;
