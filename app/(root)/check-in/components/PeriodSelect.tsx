"use client";

import * as React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const PeriodSelect = () => {
  const [period, setPeriod] = React.useState("7days");

  return (
    <Select value={period} onValueChange={setPeriod}>
      <SelectTrigger className="w-[180px] text-sm border border-slate-200 rounded-lg py-2 px-3 bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500">
        <SelectValue placeholder="Select period" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="7days">Last 7 days</SelectItem>
        <SelectItem value="30days">Last 30 days</SelectItem>
        <SelectItem value="90days">Last 3 months</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default PeriodSelect;
