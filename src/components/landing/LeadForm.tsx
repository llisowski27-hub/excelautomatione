"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { submitLeadAction } from "@/app/actions/lead";
import { leadSchema, type LeadFormValues } from "@/lib/schemas/lead";

const fieldClass =
  "w-full border-b border-line bg-transparent py-3 text-lg text-fg placeholder:text-fg-faint outline-none transition-colors focus:border-fg";

export function LeadForm() {
  const [serverError, setServerError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema),
  });

  async function onSubmit(data: LeadFormValues) {
    setServerError(null);
    const result = await submitLeadAction(data);
    if (result.success) {
      setSubmitted(true);
    } else {
      setServerError(result.error);
    }
  }

  if (submitted) {
    return (
      <p className="text-lg text-fg">
        Dzięki. Odezwiemy się w ciągu 24 godzin.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-lg space-y-6" noValidate>
      <div>
        <textarea
          rows={2}
          placeholder="Codziennie kopiuję dane między..."
          className={`${fieldClass} resize-none`}
          {...register("message")}
        />
        {errors.message && (
          <p className="mt-1.5 text-xs text-accent">{errors.message.message}</p>
        )}
      </div>

      <div>
        <input
          type="email"
          placeholder="Twój email"
          className={fieldClass}
          {...register("email")}
        />
        {errors.email && (
          <p className="mt-1.5 text-xs text-accent">{errors.email.message}</p>
        )}
      </div>

      {serverError && <p className="text-sm text-accent">{serverError}</p>}

      <Button type="submit" size="lg" variant="primary" disabled={isSubmitting} className="w-full">
        {isSubmitting ? (
          <Loader2 size={16} className="animate-spin" />
        ) : (
          <>
            Umów rozmowę
            <ArrowRight size={15} />
          </>
        )}
      </Button>
    </form>
  );
}
