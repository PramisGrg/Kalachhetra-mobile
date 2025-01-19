import { z } from "zod";

export const MAX_UPLOAD_SIZE = 2 * 1024 * 1024;
const ACCEPTED_FILE_TYPES = ["image/png", "image/jpg", "image/jpeg"];

export const emailSchema = z
  .string()
  .min(1, {
    message: "Email is required.",
  })
  .email({ message: "Please provide valid email." });

export const dateSchema = z.coerce.date({
  errorMap: (issue, { defaultError }) => ({
    message:
      issue.code === "invalid_date"
        ? "Please provide valid date."
        : defaultError,
  }),
});

// export const phoneNumberSchema = z.string().refine(isValidPhoneNumber, {
//   message: 'Invalid phone number.',
// })

export const selectFieldSchema = z.object({
  _id: z.string().optional(),
  label: z.string(),
  value: z.string(),
});

export const imageSchema = z
  .instanceof(File, {
    message: "Image is required.",
  })
  .refine((file) => {
    return file.size <= MAX_UPLOAD_SIZE;
  }, `File size must be less than ${MAX_UPLOAD_SIZE}`)
  .refine((file) => {
    return ACCEPTED_FILE_TYPES.includes(file.type);
  }, "Please provide valid image type.");
