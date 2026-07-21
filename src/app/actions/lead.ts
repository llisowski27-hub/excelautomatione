"use server";

import { leadSchema, type LeadFormValues } from "@/lib/schemas/lead";

export type LeadActionResult =
  | { success: true }
  | { success: false; error: string };

export async function submitLeadAction(
  data: LeadFormValues
): Promise<LeadActionResult> {
  const parsed = leadSchema.safeParse(data);
  if (!parsed.success) {
    return {
      success: false,
      error: parsed.error.issues[0]?.message ?? "Nieprawidłowe dane",
    };
  }

  console.log("[Lead]", new Date().toISOString(), parsed.data);
  return { success: true };
}
