import z from "zod";

export const testSchema = z.object({
  username: z.string().min(3, "Please enter a valid username"),
});
