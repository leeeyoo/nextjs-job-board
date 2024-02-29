import { z } from "zod";

export const JobFilerSchema = z.object({
  q: z.string().optional(),
  type: z.string().optional(),
  location: z.string().optional(),
  remote: z.coerce.boolean().optional(),
});

export type JobFilerValues = z.infer<typeof JobFilerSchema>;
