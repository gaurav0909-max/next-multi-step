import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Gamepad, Gamepad2, Joystick } from "lucide-react";
import { Cycle } from "@/app/types/definations";
import { Switch } from "./ui/switch";
import { useEffect } from "react";

const plans = [
  {
    name: "arcade",
    label: "Arcade",
    icon: Joystick,
    month: 9,
    year: 90,
  },
  {
    name: "advanced",
    label: "Advanced",
    icon: Gamepad,
    month: 12,
    year: 120,
  },
  {
    name: "pro",
    label: "Pro",
    icon: Gamepad2,
    month: 15,
    year: 150,
  },
] as const;

type Plan = (typeof plans)[number];

export function StepTwo() {
  const { control, watch, setValue } = useFormContext();
  const cycle: Cycle = watch("cycle");
  const selectedCycle = watch("isYear");

  useEffect(() => {
    if (selectedCycle) {
      setValue("cycle", { label: "yearly", name: "year", shorthand: "yr" });
    } else {
      setValue("cycle", { label: "monthly", name: "month", shorthand: "mo" });
    }
  }, [selectedCycle, setValue]);

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl">Select your plan</h1>
        <p className="text-muted-foreground text-sm">
          You have the option of monthly or yearly billing.
        </p>
      </div>
      <FormField
        control={control}
        name="plan"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormControl>
              <RadioGroup
                onValueChange={(value) => {
                  const [selected]: Plan[] = plans.filter(
                    (plan) => plan.name === value
                  );
                  setValue("selectedPlan", selected);
                  field.onChange(value);
                }}
                defaultValue={field.value}
                className="grid grid-cols-3 gap-4"
              >
                {plans.map((plan: Plan, index: number) => {
                  const amount = plan[cycle.name];
                  return (
                    <FormItem key={index}>
                      <FormControl>
                        <RadioGroupItem
                          value={plan.name}
                          className="peer sr-only"
                        />
                      </FormControl>
                      <FormLabel className="text-base flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary space-y-2">
                        <plan.icon className="h-10 w-10" strokeWidth={1.5} />
                        <div className="mt-2 text-center">
                          <p>{plan.label}</p>
                          <p className="text-muted-foreground text-sm">
                            ${amount}/{cycle.shorthand}
                          </p>
                        </div>
                      </FormLabel>
                    </FormItem>
                  );
                })}
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="isYear"
        render={({ field }) => (
          <FormItem className="flex flex-row items-center justify-center rounded-lg border p-4 space-y-0 space-x-2">
            <FormLabel className="text-base">Monthly</FormLabel>
            <FormControl>
              <Switch checked={field.value} onCheckedChange={field.onChange} />
            </FormControl>
            <FormLabel className="text-base">Yearly</FormLabel>
          </FormItem>
        )}
      />
    </div>
  );
}
