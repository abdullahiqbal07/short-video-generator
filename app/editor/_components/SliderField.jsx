import { Slider } from "@/components/ui/slider";
import React from "react";

function SliderField({ defaultValue, label, handleInputChange }) {
  return (
    <div className="mt-4 flex flex-col gap-2">
      <label className="text-sm">{label}</label>
      <Slider
        value={[defaultValue]}
        min={5}
        max={100}
        step={1}
        onValueChange={(value) => handleInputChange(value[0])}
      />
    </div>
  );
}

export default SliderField;
