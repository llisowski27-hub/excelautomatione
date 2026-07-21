"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle2, ArrowRight, AlertCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitLeadAction } from "@/app/actions/lead";
import { leadSchema, type LeadFormValues } from "@/lib/schemas/lead";

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
      <div className="flex flex-col items-center gap-4 py-10 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sage-soft text-sage">
          <CheckCircle2 size={28} />
        </div>
        <div>
          <h3 className="text-lg font-bold text-ink">Zgłoszenie wysłane.</h3>
          <p className="mt-1.5 max-w-xs text-sm leading-relaxed text-ink-muted">
            Odezwiemy się w ciągu 24 godzin, żeby umówić krótką rozmowę.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="name">Imię *</Label>
          <Input id="name" placeholder="Jan Kowalski" aria-invalid={!!errors.name} {...register("name")} />
          {errors.name && (
            <p className="flex items-center gap-1 text-xs text-accent">
              <AlertCircle size={11} />
              {errors.name.message}
            </p>
          )}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            placeholder="jan@firma.pl"
            aria-invalid={!!errors.email}
            {...register("email")}
          />
          {errors.email && (
            <p className="flex items-center gap-1 text-xs text-accent">
              <AlertCircle size={11} />
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="company">Nazwa firmy *</Label>
        <Input
          id="company"
          placeholder="np. Hurtownia Kowalski"
          aria-invalid={!!errors.company}
          {...register("company")}
        />
        {errors.company && (
          <p className="flex items-center gap-1 text-xs text-accent">
            <AlertCircle size={11} />
            {errors.company.message}
          </p>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="message">
          Co Was najbardziej męczy? <span className="text-ink-faint">(opcjonalnie)</span>
        </Label>
        <Textarea
          id="message"
          rows={3}
          placeholder="np. Co miesiąc ręcznie łączymy dane z 5 Exceli w jeden raport dla zarządu."
          {...register("message")}
        />
      </div>

      {serverError && (
        <div className="flex items-center gap-2 rounded-sm bg-accent-soft px-4 py-3 text-sm text-accent-hover">
          <AlertCircle size={15} className="shrink-0" />
          {serverError}
        </div>
      )}

      <Button type="submit" size="lg" variant="primary" disabled={isSubmitting} className="w-full">
        {isSubmitting ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Wysyłanie...
          </>
        ) : (
          <>
            Sprawdź ile czasu możesz odzyskać
            <ArrowRight size={15} />
          </>
        )}
      </Button>

      <p className="text-center text-xs text-ink-faint">
        Odpowiadamy w ciągu 24 godzin. Twoich danych nigdy nie sprzedajemy.
      </p>
    </form>
  );
}
