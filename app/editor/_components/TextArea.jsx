import { Textarea } from "@/components/ui/textarea";
import React from "react";

function TextArea({ frame, handleInputChange }) {
  return (
    <div className="flex flex-col gap-2">
      <label>Content</label>
      <Textarea
        className="bg-white"
        value={frame?.text || ""}
        onChange={(e) => handleInputChange(e.target.value)}
      />
    </div>
  );
}

export default TextArea;
