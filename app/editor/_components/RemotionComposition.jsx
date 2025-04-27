import React, { useContext } from "react";
import { AbsoluteFill, Audio, Sequence, staticFile } from "remotion";
import * as Bungee from "@remotion/google-fonts/Bungee";
import * as Caveat from "@remotion/google-fonts/Caveat";
import * as Anton from "@remotion/google-fonts/Anton";
import * as PlayfairDisplay from "@remotion/google-fonts/PlayfairDisplay";
import { videoFromContext } from "@/app/_context/VidoFrameContext";
function RemotionComposition({ listFrames }) {
  let trackFrame = 0;

  Bungee.loadFont();
  Caveat.loadFont();
  Anton.loadFont();
  PlayfairDisplay.loadFont();

  const { videoFrames, setVideoFrames } = useContext(videoFromContext);

  return (
    <AbsoluteFill
      style={{
        // color: "white",
        // backgroundColor: "black",
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
            <AbsoluteFill
              style={{
                fontFamily: frame?.fontFamily,
                background: frame?.bgColor,
              }}
              className="flex items-center justify-center"
            >
              <h2
                style={{
                  fontSize: frame?.fontSize,
                  color: frame?.textColor,
                }}
              >
                {frame.text}
              </h2>
            </AbsoluteFill>
          </Sequence>
        );
      })}
      <Audio volume={0.5} src={staticFile(`/${videoFrames?.music}`)} />
    </AbsoluteFill>
  );
}

export default RemotionComposition;
