import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Cycle } from "@/app/types/definations";

const addons = [
  {
    id: "online_service",
    label: "Online Services",
    description: "Access to multiplayer games",
    month: 1,
    year: 10,
  },
  {
    id: "larger_storage",
    label: "Larger storage",
    description: "Extra 1TB of cloud save",
    month: 2,
    year: 20,
  },
  {
    id: "custom_profile",
    label: "Customizable profile",
    description: "Custom theme on your profile",
    month: 2,
    year: 20,
  },
] as const;

type Addon = (typeof addons)[number];

export function StepThree() {
  const { control, watch } = useFormContext();
  const cycle: Cycle = watch("cycle");
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl">Pick add-ons</h1>
        <p className="text-muted-foreground text-sm">
          Add-ons help enhance your gaming experience.
        </p>
      </div>
      <FormField
        control={control}
        name="addons"
        render={() => (
          <FormItem>
            {addons.map((addon: Addon) => {
              const amount = addon[cycle.name];
              return (
                <FormField
                  key={addon.id}
                  control={control}
                  name="addons"
                  render={({ field }) => {
                    return (
                      <FormItem key={addon.id}>
                        <FormLabel className="flex flex-row items-center space-x-3 space-y-0 rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                          <FormControl>
                            <Checkbox
                              checked={field.value?.some(
                                (item: Addon) => item.id === addon.id
                              )}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  return field.onChange([
                                    ...field.value,
                                    addon,
                                  ]);
                                } else {
                                  return field.onChange(
                                    field.value.filter(
                                      (value: Addon) => value.id !== addon.id
                                    )
                                  );
                                }
                              }}
                            />
                          </FormControl>
                          <div className="flex flex-row items-center justify-between w-full">
                            <div className="flex flex-col space-y-1 font-normal">
                              <p>{addon.label}</p>
                              <FormDescription className="leading-none">
                                {addon.description}
                              </FormDescription>
                            </div>
                            <p>
                              ${amount}/{cycle.shorthand}
                            </p>
                          </div>
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              );
            })}
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
