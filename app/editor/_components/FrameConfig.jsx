import React, { useContext, useEffect, useState, useCallback } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Baseline, SwatchBook } from "lucide-react";
import TextArea from "./TextArea";
import { videoFromContext } from "@/app/_context/VidoFrameContext";
import { debounce } from "lodash";
import SliderField from "./SliderField";
import DropDown from "./DropDown";
import { fontList } from "@/app/_data/FontList";
import { ColorPickerList } from "./ColorPickerList";

import { BackgroundColorList } from "./BackgroundColorList";

function FrameConfig() {
  const { videoFrames, setVideoFrames } = useContext(videoFromContext);
  const [frame, setFrame] = useState({});

  // Debounced handler for frame changes
  const debouncedUpdateFrames = useCallback(
    debounce((updatedFrame) => {
      if (
        videoFrames.listFrames?.length > 0 &&
        videoFrames?.selectFrame != null &&
        frame
      ) {
        const updatedFrames = [...videoFrames.listFrames];
        updatedFrames[videoFrames.selectFrame] = updatedFrame;

        setVideoFrames((prev) => ({
          ...prev,
          listFrames: updatedFrames,
        }));
      }
    }, 300),
    [videoFrames, setVideoFrames]
  );

  // Update `frame` state when a field changes
  const handleChange = (field, value) => {
    const updatedFrame = { ...frame, [field]: value };
    setFrame(updatedFrame);
    debouncedUpdateFrames(updatedFrame); // Update video frames with debounce
  };

  // Sync `frame` state with the selected frame from `videoFrames`
  useEffect(() => {
    if (
      videoFrames?.listFrames &&
      videoFrames.selectFrame != null &&
      videoFrames.listFrames[videoFrames.selectFrame]
    ) {
      setFrame(videoFrames.listFrames[videoFrames.selectFrame]);
    }
  }, [videoFrames]);

  return (
    <div className="bg-gray-100 p-3 rounded-lg">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <span className="flex gap-2 text-lg items-center">
              <Baseline />
              Text
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <TextArea
              frame={frame}
              handleInputChange={(value) => handleChange("text", value)}
            />
            <DropDown
              defaultValue={frame?.duration}
              label={"Duration (s)"}
              options={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
              handleInputChange={(value) => handleChange("duration", value)}
            />
            <SliderField
              label={"Font Size"}
              defaultValue={frame?.fontSize}
              handleInputChange={(value) => handleChange("fontSize", value)}
            />
            <DropDown
              defaultValue={frame?.fontFamily}
              label={"Font Family"}
              options={fontList}
              handleInputChange={(value) => handleChange("fontFamily", value)}
            />
            <ColorPickerList
              defaultColor={frame?.textColor}
              handleInputChange={(value) => handleChange("textColor", value)}
            />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            <span className="flex gap-2 text-lg items-center">
              <SwatchBook />
              Background Color
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <BackgroundColorList
              defaultValue={frame?.bgColor}
              handleInputChange={(value) => handleChange("bgColor", value)}
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default FrameConfig;

// useEffect(() => {
//     if (
//       videoFrames.listFrames?.length > 0 &&
//       frame &&
//       videoFrames?.selectFrame != null
//     ) {
//       const listFrames = videoFrames?.listFrames;
//       listFrames[videoFrames?.selectFrame] = frame;
//       frame.text != listFrames[videoFrames.selectFrame].text && setVideoFrames((prev) => ({
//         ...prev,
//         listFrames: listFrames,
//       }));
//     }
//   }, [frame]);
