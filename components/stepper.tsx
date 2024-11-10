"use client";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { useFormContext } from "react-hook-form";

export default function Stepper() {
  const { watch } = useFormContext();
  const step = watch("currentStep");
  const isMobile = useIsMobile();
  return (
    <div className="bg-secondary p-4 rounded-md md:min-w-48">
      {isMobile ? (
        <ol className="flex items-center w-full text-xs text-gray-900 font-medium sm:text-base">
          <li className="flex w-full relative text-indigo-600  after:content-['']  after:w-full after:h-0.5  after:bg-indigo-600 after:inline-block after:absolute lg:after:top-5 after:top-3 after:left-4">
            <div className="block whitespace-nowrap z-10">
              <span className="w-6 h-6 bg-indigo-600 border-2 border-transparent rounded-full flex justify-center items-center mx-auto mb-3 text-sm text-white lg:w-10 lg:h-10">
                1
              </span>{" "}
              Step 1
            </div>
          </li>
          <li className="flex w-full relative text-gray-900  after:content-['']  after:w-full after:h-0.5  after:bg-gray-200 after:inline-block after:absolute lg:after:top-5 after:top-3 after:left-4">
            <div className="block whitespace-nowrap z-10">
              <span className="w-6 h-6 bg-indigo-50 border-2 border-indigo-600 rounded-full flex justify-center items-center mx-auto mb-3 text-sm text-indigo-600 lg:w-10 lg:h-10">
                2
              </span>{" "}
              Step 2
            </div>
          </li>
          <li className="flex w-full relative text-gray-900  after:content-['']  after:w-full after:h-0.5  after:bg-gray-200 after:inline-block after:absolute lg:after:top-5  after:top-3 after:left-4">
            <div className="block whitespace-nowrap z-10">
              <span className="w-6 h-6 bg-gray-50 border-2 border-gray-200 rounded-full flex justify-center items-center mx-auto mb-3 text-sm  lg:w-10 lg:h-10">
                3
              </span>{" "}
              Step 3
            </div>
          </li>
          <li className="flex w-full relative text-gray-900  after:content-['']  after:w-full after:h-0.5  after:bg-gray-200 after:inline-block after:absolute lg:after:top-5 after:top-3 after:left-4">
            <div className="block whitespace-nowrap z-10">
              <span className="w-6 h-6 bg-gray-50 border-2 border-gray-200 rounded-full flex justify-center items-center mx-auto mb-3 text-sm  lg:w-10 lg:h-10">
                4
              </span>{" "}
              Step 4
            </div>
          </li>
          <li className="flex w-full relative text-gray-900  ">
            <div className="block whitespace-nowrap z-10">
              <span className="w-6 h-6 bg-gray-50 border-2 border-gray-200 rounded-full flex justify-center items-center mx-auto mb-3 text-sm  lg:w-10 lg:h-10">
                5
              </span>{" "}
              Step 5
            </div>
          </li>
        </ol>
      ) : (
        <ol className="overflow-hidden space-y-8">
          <li
            className={cn(
              "relative flex-1 after:content-[''] after:w-0.5 after:h-full after:bg-neutral-200 after:inline-block after:absolute after:-bottom-12 after:left-4 lg:after:left-5",
              step > 1 && "after:bg-primary"
            )}
          >
            <a className="flex items-center font-medium w-full">
              <span
                className={cn(
                  "w-8 h-8 border-2 bg-neutral-50 border-neutral-200 rounded-full flex justify-center items-center mr-3 text-sm lg:w-10 lg:h-10",
                  step > 1 && "bg-primary border-transparent text-white",
                  step === 1 && "bg-neutral-200 border-primary text-primary"
                )}
              >
                {step > 1 ? <Check /> : 1}
              </span>
              <div className="block">
                <h4 className="text-lg">Step 1</h4>
                <span className="text-sm">Your Info</span>
              </div>
            </a>
          </li>
          <li
            className={cn(
              "relative flex-1 after:content-[''] after:w-0.5 after:h-full after:bg-neutral-200 after:inline-block after:absolute after:-bottom-12 after:left-4 lg:after:left-5",
              step > 2 && "after:bg-primary"
            )}
          >
            <a className="flex items-center font-medium w-full">
              <span
                className={cn(
                  "w-8 h-8 border-2 bg-neutral-50 border-neutral-200 rounded-full flex justify-center items-center mr-3 text-sm lg:w-10 lg:h-10",
                  step > 2 && "bg-primary border-transparent text-white",
                  step === 2 && "bg-neutral-200 border-primary text-primary"
                )}
              >
                {step > 2 ? <Check /> : 2}
              </span>
              <div className="block">
                <h4 className="text-lg">Step 2</h4>
                <span className="text-sm">Select Plan</span>
              </div>
            </a>
          </li>
          <li
            className={cn(
              "relative flex-1 after:content-[''] after:w-0.5 after:h-full after:bg-neutral-200 after:inline-block after:absolute after:-bottom-12 after:left-4 lg:after:left-5",
              step > 3 && "after:bg-primary"
            )}
          >
            <a className="flex items-center font-medium w-full">
              <span
                className={cn(
                  "w-8 h-8 border-2 bg-neutral-50 border-neutral-200 rounded-full flex justify-center items-center mr-3 text-sm lg:w-10 lg:h-10",
                  step > 3 && "bg-primary border-transparent text-white",
                  step === 3 && "bg-neutral-200 border-primary text-primary"
                )}
              >
                {step > 3 ? <Check /> : 3}
              </span>
              <div className="block">
                <h4 className="text-lg">Step 3</h4>
                <span className="text-sm">Add-ons</span>
              </div>
            </a>
          </li>
          <li className="relative flex-1 ">
            <a className="flex items-center font-medium w-full">
              <span
                className={cn(
                  "w-8 h-8 border-2 bg-neutral-50 border-neutral-200 rounded-full flex justify-center items-center mr-3 text-sm lg:w-10 lg:h-10",
                  step > 4 && "bg-primary border-transparent text-white",
                  step === 4 && "bg-neutral-200 border-primary text-primary"
                )}
              >
                {step > 4 ? <Check /> : 4}
              </span>
              <div className="block">
                <h4 className="text-lg text-neutral-900">Step 4</h4>
                <span className="text-sm">Summary</span>
              </div>
            </a>
          </li>
        </ol>
      )}
    </div>
  );
}
