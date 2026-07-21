import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().min(2, "Imię musi mieć min. 2 znaki"),
  email: z.string().email("Podaj poprawny adres email"),
  company: z.string().min(1, "Podaj nazwę firmy"),
  message: z.string().max(1000).optional(),
});

export type LeadFormValues = z.infer<typeof leadSchema>;
