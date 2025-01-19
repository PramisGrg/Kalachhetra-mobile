import { z } from "zod";
import * as T from "@/types/index";
import { dateSchema, imageSchema, selectFieldSchema } from "./common.schema";

export const artSchema = z.object({
  title: z.string().min(1, "Art title is required."),
  description: z
    .string()
    .min(1, "Art description is required.")
    .min(20, "Art description must be at least of 20 words."),

  images: z.object({
    featured: z.array(imageSchema),
    samples: z.array(imageSchema),
  }),

  timeFrame: z.object({
    startDate: dateSchema,
    endDate: dateSchema,
  }),

  category: z
    .array(selectFieldSchema)
    .min(1, "At least 1 art category is required"),
  subCategory: z
    .array(selectFieldSchema)
    .min(1, "At least 1 art sub-category is required"),
  style: z.array(selectFieldSchema).min(1, "At least 1 art style is required"),
  theme: z.string(),

  size: z.string(),
  customSize: z.object({
    length: z.coerce.number(),
    breadth: z.coerce.number(),
    unit: z.coerce.string(),
  }),

  // material: z.array(z.string()),
  material: z.array(
    z.object({
      // materialTopic: z.object({
      //   label: z.string(),
      //   value: z.string(),
      // }),
      materialTopic: z.string(),
      materialValue: z.string(),
    })
  ),

  priceCurrency: z.nativeEnum(T.PriceCurrency, {
    errorMap: () => ({
      message: "Please provide a valid currency type.",
    }),
  }),
  price: z.coerce.number(),
  priceType: z.nativeEnum(T.PriceType, {
    errorMap: () => ({
      message: "Please provide a valid price type.",
    }),
  }),
  location: z.string(),

  // keywords: z.array(z.string()),
  keywords: z
    .array(selectFieldSchema)
    .min(1, "At least 1 keyword is required."),

  isHighlighted: z.coerce.boolean().optional(),
  exhibitionsAndAwards: z
    .array(
      z.object({
        eventName: z.string().min(1, "Event name is required."),
        description: z.string().min(1, "Event description is required."),
        date: dateSchema,
      })
    )
    .optional(),

  isFramed: z.coerce.boolean(),
  // collections: z.array(z.string()),
  collections: z.string(),

  shippingInfo: z.object({
    shippingType: z.nativeEnum(T.ShippingType, {
      errorMap: () => ({
        message: "Please provide a valid shipping type.",
      }),
    }),

    /**
     * TODO: @ebraj
     * Update this schema later...
     */
    shippingDetails: z.object({}),
  }),
});

const postArtSchema = artSchema
  .omit({
    images: true,
    customSize: true,
    category: true,
    subCategory: true,
    style: true,
    theme: true,
    shippingInfo: true,
    material: true,
    collections: true,
    timeFrame: true,
    keywords: true,
    exhibitionsAndAwards: true,
  })
  .extend({
    featuredImage: imageSchema,
    sampleImages: artSchema.shape.images.shape.samples,

    timeFrame: z.string(),
    category: z.string(),
    subCategory: z.string(),
    style: z.string(),
    theme: z.string(),

    shippingInfo: z.string(),
    material: z.string(),
    collections: z.string(),
    keywords: z.string(),
    exhibitionsAndAwards: z.string(),
  });

export type TArtSchema = z.infer<typeof artSchema>;
export type TPostArtSchema = z.infer<typeof postArtSchema>;
