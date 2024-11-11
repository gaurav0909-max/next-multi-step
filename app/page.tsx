"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { StepOne } from "@/components/step-1";
import { StepTwo } from "@/components/step-2";
import Stepper from "@/components/stepper";
import { StepThree } from "@/components/step-3";
import { StepFour } from "@/components/step-4";
import { ArrowLeft, ArrowRight, Gamepad } from "lucide-react";
import ThankYou from "@/components/thank-you";

const FormSchema = z.object({
  totalSteps: z.number(),
  currentStep: z.number(),
  name: z.string().min(3, {
    message: "Name must be at least 3 characters.",
  }),
  email: z.string().min(1, {
    message: "Email is required.",
  }).email("This is not a valid email."),
  phone: z.string().regex(/^\+\d{1,4} \d{3} \d{3} \d{3}$/, "Invalid phone number format."),
  plan: z.enum(["arcade", "advanced", "pro"], {
    required_error: "You need to select a plan.",
  }),
  selectedPlan: z.object({
    name: z.string(),
    label: z.string(),
    icon: z.any(),
    month: z.number(),
    year: z.number(),
  }).default({
    name: "advanced",
    label: "Advanced",
    icon: Gamepad,
    month: 12,
    year: 120,
  }),
  cycle: z.object(
    {
      label: z.string(),
      name: z.string(),
      shorthand: z.string(),
    },
    { message: "You need to select a billing cycle." }
  ),
  isYear: z.boolean().default(false),
  addons: z.array(
    z.object({
      id: z.string(),
      label: z.string(),
      description: z.string(),
      month: z.number(),
      year: z.number(),
    })
  ).optional(),
  total: z.number().default(0),
});

export default function Home() {
  const methods = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      totalSteps: 5,
      currentStep: 1,
      name: "",
      email: "",
      phone: "",
      plan: "advanced",
      selectedPlan: {
        name: "advanced",
        label: "Advanced",
        icon: Gamepad,
        month: 12,
        year: 120,
      },
      cycle: { label: "monthly", name: "month", shorthand: "mo" },
      isYear: false,
      addons: [],
    },
  });

  const step = methods.watch("currentStep");

  const nextStep = methods.handleSubmit((data) => {
    if (step < data.totalSteps) {
      methods.setValue("currentStep", step + 1);
    }
  });

  const prevStep = () => {
    if (step > 1) {
      methods.setValue("currentStep", step - 1);
    }
  };

  function onSubmit(data) {
    methods.setValue("currentStep", 5);
    toast({
      title: "Submission Successful!",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-0 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center w-full">
        <Form {...methods}>
          <Card className="w-full max-w-2xl">
            <CardContent className="flex flex-col md:flex-row p-6 space-y-4 md:space-y-0 md:space-x-4">
              <Stepper />
              <div className="space-y-6 grow">
                {step === 1 && <StepOne />}
                {step === 2 && <StepTwo />}
                {step === 3 && <StepThree />}
                {step === 4 && <StepFour />}
                {step === 5 && <ThankYou />}
              </div>
            </CardContent>
            {step !== 5 && (
              <CardFooter className="flex flex-row justify-between">
                <Button variant="outline" onClick={prevStep} disabled={step === 1}>
                  <ArrowLeft className="h-4 w-4" />
                  Go Back
                </Button>
                <Button type={step === methods.getValues("totalSteps") - 1 ? "submit" : "button"} onClick={step < 5 ? nextStep : undefined}>
                  {step === methods.getValues("totalSteps") - 1 ? "Confirm" : "Next Step"} <ArrowRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            )}
          </Card>
        </Form>
      </main>
    </div>
  );
}
