import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import ColorPicker from "react-best-gradient-color-picker";

export const ColorPickerList = ({ defaultColor, handleInputChange }) => {
  return (
    <div className="flex gap-4 items-center mt-3">
      <label>Text Color</label>
      <Popover>
        <PopoverTrigger asChild>
          <div
            style={{
              background: defaultColor,
            }}
            className="w-10 h-10 rounded-lg cursor-pointer"
          ></div>
        </PopoverTrigger>
        <PopoverContent>
          <ColorPicker
            width={250}
            height={230}
            hideColorGuide
            hideControls
            hideEyeDrop
            value={defaultColor}
            onChange={handleInputChange}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};
