import { z } from "zod";

export const jobFilerSchema = z.object({
  q: z.string().optional(),
  type: z.string().optional(),
  location: z.string().optional(),
  remote: z.coerce.boolean().optional(),
});

export type jobFilerValues = z.infer<typeof jobFilerSchema>;
