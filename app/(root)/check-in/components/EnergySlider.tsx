"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";

export const EnergySlider = () => {
  const [energyValue, setEnergyValue] = useState(5);

  return (
    <div>
      <label className="block text-sm font-semibold text-slate-700 mb-3">
        Energy Level
      </label>
      <div className="flex items-center gap-4">
        <Slider
          defaultValue={[5]}
          max={10}
          min={1}
          step={1}
          className="flex-1"
          onValueChange={(value: number[]) => setEnergyValue(value[0])}
        />
        <Badge
          variant="secondary"
          className="min-w-[40px] justify-center bg-emerald-50 text-emerald-700"
        >
          {energyValue}
        </Badge>
      </div>
      <div className="flex justify-between text-xs text-slate-500 mt-2">
        <span>Low Energy</span>
        <span>Moderate</span>
        <span>High Energy</span>
      </div>
    </div>
  );
};

export default EnergySlider;
