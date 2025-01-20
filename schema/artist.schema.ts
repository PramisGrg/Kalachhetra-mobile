import { z } from "zod";
import * as T from "@/types/index";
import { dateSchema, emailSchema, selectFieldSchema } from "./common.schema";

const MIN_DESCRIPTION_LENGTH: number = 100;
export const artistAccountSchema = z.object({
  fullName: z.string().optional(),
  firstName: z.string().min(1, "First name is required."),
  lastName: z.string().min(1, "Last name is required."),
  gender: z.nativeEnum(T.Gender, {
    errorMap: () => ({ message: "Please provide a valid gender." }),
  }),
  dob: dateSchema,
  email: emailSchema,
  phoneNumber: z.string().min(3, "Enter a valid phone number"),

  address: z.object({
    country: z.string().min(1, "Country is required."),
    street: z.string().min(1, "Street is required."),
    city: z.string().min(1, "City is required."),
    state: z.string().min(1, "State is required."),
    zip: z.coerce.number().min(1).max(50000),
  }),

  // EXPERIENCES
  experiences: z.array(
    z.object({
      experienceTitle: z.string().min(1, "Job Title is required."),
      experienceDescription: z.string().min(1, "Job description is required."),
      experienceCompany: z.string().min(1, "Job Company is required."),
      experienceStartDate: z.date({
        required_error: "Job Start date is required.",
      }),
      experienceEndDate: z.date({
        required_error: "Job End date is required.",
      }),
    })
  ),

  // ACHIEVEMENTS
  //   achievements: z.array(
  //     z.object({
  //       achievementTitle: z.string().min(1, "Achievement Title is required."),
  //       achievementDescription: z
  //         .string()
  //         .min(1, "Achievement Description is required."),
  //     })
  //   ),

  // TRAININGS
  //   trainings: z.array(
  //     z.object({
  //       trainingTitle: z.string().min(1, "Training Title is required."),
  //       trainingDescription: z
  //         .string()
  //         .min(1, "Training description is required."),
  //       trainingCompany: z.string().min(1, "Training Company is required."),
  //       trainingStartDate: z.date({
  //         required_error: "Training Start date is required.",
  //       }),
  //       trainingEndDate: z.date({
  //         required_error: "Training End date is required.",
  //       }),
  //     })
  //   ),

  //   userName: z.string().min(1, "Username is required."),
  //   userBio: z
  //     .string()
  //     .min(1, "User bio is required.")
  //     .min(
  //       MIN_DESCRIPTION_LENGTH,
  //       `Bio must be at least ${MIN_DESCRIPTION_LENGTH} characters.`
  //     ),
  //   artCategory: z
  //     .array(selectFieldSchema)
  //     .min(1, "At least 1 art category is required."),
  //   socialHandles: z.array(
  //     z.object({
  //       socialSiteName: z.string().min(1, "Social site name is required."),
  //       socialSiteLink: z.string().url().min(1, "Social site link is required."),
  //     })
  //   ),
});

export type TArtistAccountFormSchema = z.infer<typeof artistAccountSchema>;
