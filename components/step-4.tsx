import { useFormContext } from "react-hook-form";
import { Separator } from "./ui/separator";
import { Fragment } from "react";
import { Addon, Cycle, Plan } from "@/app/types/definations";

export function StepFour() {
  const { watch } = useFormContext();
  const selectedPlan: Plan = watch("selectedPlan");
  const cycle: Cycle = watch("cycle");
  const selectedAddons: Addon[] = watch("addons");

  const total =
    selectedPlan[cycle.name] +
    selectedAddons.reduce((total, addon) => {
      return total + addon[cycle.name];
    }, 0);
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl">Finishing up</h1>
        <p className="text-muted-foreground text-sm">
          Double-check everything looks OK before confirming.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-2 p-4 bg-secondary rounded-lg">
        <div className="font-semibold capitalize">
          {selectedPlan.name} ({cycle.label})
        </div>
        <div className="font-semibold ml-auto">
          ${selectedPlan[cycle.name]}/{cycle.shorthand}
        </div>
        <Separator className="col-span-2" />
        {selectedAddons.length > 0 &&
          selectedAddons.map((addon: Addon, index: number) => {
            const amount = addon[cycle.name];
            return (
              <Fragment key={index}>
                <div className="font-semibold">{addon.label}</div>
                <div className="font-semibold ml-auto">
                  +${amount}/{cycle.shorthand}
                </div>
              </Fragment>
            );
          })}
      </div>
      <div className="grid grid-cols-2 p-4">
        <div>Total (per {cycle.name})</div>
        <div className="font-semibold ml-auto">${total}</div>
      </div>
    </div>
  );
}
