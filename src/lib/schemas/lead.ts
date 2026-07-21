import { z } from "zod";

export const leadSchema = z.object({
  email: z.string().email("Podaj poprawny adres email"),
  message: z.string().min(3, "Napisz kilka słów").max(1000),
});

export type LeadFormValues = z.infer<typeof leadSchema>;
