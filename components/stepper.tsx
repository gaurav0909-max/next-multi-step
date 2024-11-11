"use client";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { useFormContext } from "react-hook-form";

const steps = [
  {
    label: "Step 1",
    description: "Your Info",
  },
  {
    label: "Step 2",
    description: "Select Plan",
  },
  {
    label: "Step 3",
    description: "Add-ons",
  },
  {
    label: "Step 4",
    description: "Summary",
  },
] as const;

export default function Stepper() {
  const { watch } = useFormContext();
  const step = watch("currentStep");
  return (
    <div className="bg-secondary p-4 rounded-md md:min-w-48">
      <ol className="flex flex-row md:flex-col items-center md:items-start overflow-hidden md:space-y-8 w-full">
        {steps.map((item, index) => (
          <li
            key={index}
            className={cn(
              "relative flex flex-1 items-center",
              index + 1 < steps.length &&
                "after:content-[''] after:h-0.5 md:after:w-0.5 after:w-full md:after:h-full after:bg-neutral-200 after:inline-block after:absolute after:top-5 md:after:top-10 after:left-5",
              step > index + 1 && "after:bg-primary"
            )}
          >
            <span
              className={cn(
                "w-10 h-10 border-2 bg-neutral-50 border-neutral-200 rounded-full flex justify-center items-center mr-3 text-sm z-10",
                step > index + 1 && "bg-primary border-primary text-white",
                step === index + 1 && "bg-neutral-200 border-primary"
              )}
            >
              {step > index + 1 ? <Check /> : index + 1}
            </span>
            <div className="hidden md:flex flex-col space-y-1">
              <h4 className="text-lg leading-none">{item.label}</h4>
              <span className="text-sm leading-none">{item.description}</span>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
