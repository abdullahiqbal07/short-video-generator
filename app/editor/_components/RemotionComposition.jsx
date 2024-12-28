import React from "react";
import { AbsoluteFill, Sequence } from "remotion";

function RemotionComposition({ listFrames }) {
  let trackFrame = 0;
  return (
    <AbsoluteFill
      style={{
        color: "white",
        backgroundColor: "black",
        border: "1px",
      }}
    >
      {listFrames.map((frame, index) => {
        const frameDuration = index == 0 ? 0 : trackFrame;
        console.log(frameDuration);
        trackFrame = trackFrame + frame.duration * 30;
        const duration = frame.duration * 30;
        return (
          <Sequence
            key={index}
            from={frameDuration}
            durationInFrames={duration}
          >
            <AbsoluteFill className="flex items-center justify-center">
              <h2
                style={{
                  fontSize: frame?.fontSize,
                }}
              >
                {frame.text}
              </h2>
            </AbsoluteFill>
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
}

export default RemotionComposition;
