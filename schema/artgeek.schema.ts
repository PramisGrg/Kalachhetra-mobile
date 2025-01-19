import { z } from "zod";
import { LabelValueSchema } from "./general.schema";

const MAX_ZIP_CODE = 50000;

const CreateArtgeekSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  gender: z.enum(["male", "female", "other"]),
  dob: z.string(),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  phoneNumber: z.string(),

  address: z.object({
    country: z.string().min(1, "Country is required"),
    street: z.string().min(1, "Street is required"),
    city: z.string().min(1, "City is required"),
    state: z.string().min(1, "State is required"),
    zip: z.coerce.number().min(1).max(MAX_ZIP_CODE),
  }),

  userName: z.string().min(1, "Username is required"),
  userBio: z.string().optional(),
  artCategory: z.array(LabelValueSchema).optional(),
  socialHandles: z.array(
    z.object({
      socialSiteName: z.string().min(1, "Social site name is required"),
      socialSiteLink: z.string().url().min(1, "Social site link is required"),
    })
  ),
});

export const updateArtgeekSchema = CreateArtgeekSchema.partial();

export type TCreateArtGeeekSchema = z.infer<typeof CreateArtgeekSchema>;

export type TUpdateArtgeekSchema = z.infer<typeof updateArtgeekSchema>;

export default CreateArtgeekSchema;
