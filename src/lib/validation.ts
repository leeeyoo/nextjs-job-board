import { z } from "zod";
import { jobTypes } from "./job-types";

const requiredString = z.string().min(1, "Required");

const companyLogoSchema = z
  .custom<File | undefined>()
  .refine((file) => {
    !file || (file instanceof File && file.type.startsWith("image/"));
  }, "Must be  an image file")
  .refine((file) => {
    return !file || file.size < 1024 * 1024 * 2;
  }, "File must be less than 2MB");

export const createJobSchema = z.object({
  title: requiredString.max(100),
  type: requiredString.refine(
    (value) => jobTypes.includes(value),
    "Invalid job type",
  ),
  companyName: requiredString.max(100),
  companyLogo: companyLogoSchema,
});

export const JobFilerSchema = z.object({
  q: z.string().optional(),
  type: z.string().optional(),
  location: z.string().optional(),
  remote: z.coerce.boolean().optional(),
});

export type JobFilerValues = z.infer<typeof JobFilerSchema>;
