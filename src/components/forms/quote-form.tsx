"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle2, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  bookingFormSchema,
  type BookingFormValues,
  timeOptions,
} from "@/lib/validations/forms";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

export function QuoteForm({ className }: { className?: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      propertyAddress: "",
      serviceType: "",
      preferredDate: "",
      preferredTime: "",
      additionalDetails: "",
    },
  });

  async function onSubmit(data: BookingFormValues) {
    setStatus("loading");
    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className={cn(
          "flex flex-col items-center rounded-2xl border border-forest-200 bg-forest-50 p-10 text-center dark:border-forest-800 dark:bg-forest-950/50",
          className,
        )}
        role="status"
      >
        <CheckCircle2 className="mb-4 h-14 w-14 text-forest-600 dark:text-horizon-400" />
        <h3 className="font-heading text-2xl font-semibold">Service Request Received</h3>
        <p className="mt-2 max-w-md text-muted-foreground">
          Thank you. Our team will contact you shortly to confirm your booking request.
        </p>
        <Button
          className="mt-6 bg-forest-600 hover:bg-forest-700"
          onClick={() => setStatus("idle")}
        >
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className={cn("space-y-6", className)}
      noValidate
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name *</Label>
          <Input id="fullName" {...form.register("fullName")} aria-invalid={!!form.formState.errors.fullName} />
          {form.formState.errors.fullName && (
            <p className="text-sm text-destructive" role="alert">{form.formState.errors.fullName.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input id="email" type="email" {...form.register("email")} aria-invalid={!!form.formState.errors.email} />
          {form.formState.errors.email && (
            <p className="text-sm text-destructive" role="alert">{form.formState.errors.email.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number *</Label>
          <Input id="phone" type="tel" {...form.register("phone")} aria-invalid={!!form.formState.errors.phone} />
          {form.formState.errors.phone && (
            <p className="text-sm text-destructive" role="alert">{form.formState.errors.phone.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="propertyAddress">Property Address *</Label>
          <Input id="propertyAddress" {...form.register("propertyAddress")} aria-invalid={!!form.formState.errors.propertyAddress} />
          {form.formState.errors.propertyAddress && (
            <p className="text-sm text-destructive" role="alert">{form.formState.errors.propertyAddress.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label>Type of Service Needed *</Label>
          <Select
            value={form.watch("serviceType")}
            onValueChange={(v) => v && form.setValue("serviceType", v, { shouldValidate: true })}
          >
            <SelectTrigger className="w-full" aria-invalid={!!form.formState.errors.serviceType}>
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              {services.map((service) => (
                <SelectItem key={service.slug} value={service.slug}>
                  {service.shortTitle}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {form.formState.errors.serviceType && (
            <p className="text-sm text-destructive" role="alert">{form.formState.errors.serviceType.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="preferredDate">Preferred Date *</Label>
          <Input id="preferredDate" type="date" {...form.register("preferredDate")} aria-invalid={!!form.formState.errors.preferredDate} />
          {form.formState.errors.preferredDate && (
            <p className="text-sm text-destructive" role="alert">{form.formState.errors.preferredDate.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label>Preferred Time *</Label>
          <Select
            value={form.watch("preferredTime")}
            onValueChange={(v) => v && form.setValue("preferredTime", v, { shouldValidate: true })}
          >
            <SelectTrigger className="w-full" aria-invalid={!!form.formState.errors.preferredTime}>
              <SelectValue placeholder="Select a time" />
            </SelectTrigger>
            <SelectContent>
              {timeOptions.map((opt) => (
                <SelectItem key={opt} value={opt}>{opt}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          {form.formState.errors.preferredTime && (
            <p className="text-sm text-destructive" role="alert">{form.formState.errors.preferredTime.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="additionalDetails">Additional Details</Label>
          <Textarea
            id="additionalDetails"
            rows={4}
            placeholder="Share any details about your property or service needs..."
            {...form.register("additionalDetails")}
          />
        </div>
      </div>

      {status === "error" && (
        <p className="text-sm text-destructive" role="alert">
          Something went wrong. Please try again or call us directly.
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={status === "loading"}
        className="h-12 w-full bg-forest-600 px-8 shadow-sm shadow-forest-600/20 transition-[background-color,box-shadow] hover:bg-forest-700 hover:shadow-md hover:shadow-forest-600/25 sm:w-auto"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden />
            Submitting...
          </>
        ) : (
          <>
            Book Service
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
          </>
        )}
      </Button>
    </form>
  );
}
