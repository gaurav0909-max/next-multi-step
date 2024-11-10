import { IconNode } from "lucide-react";

export type Plan = {
  name: string;
  label: string;
  icon: IconNode;
  month: number;
  year: number;
};

export type Cycle = {
  label: "Monthly" | "Yearly";
  name: "month" | "year";
  shorthand: "mo" | "yr";
};

export type Addon = {
  id: string;
  label: string;
  description: string;
  month: number;
  year: number;
};
