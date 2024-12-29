import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function DropDown({ label, defaultValue, options, handleInputChange }) {
  return (
    <div className="mt-3 flex flex-col gap-2">
      <label>{label}</label>
      <Select value={defaultValue} onValueChange={(value)=>handleInputChange(value)}>
        <SelectTrigger className="w-full bg-white">
          <SelectValue placeholder={defaultValue || "Select an option"} />
        </SelectTrigger>
        <SelectContent>
          {options?.map((option, index) => (
            <SelectItem key={index} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default DropDown;
