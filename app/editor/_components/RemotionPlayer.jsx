import React, { useContext, useEffect, useRef, useState } from "react";
import RemotionComposition from "./RemotionComposition";
import { Player } from "@remotion/player";
import { Fullscreen } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { videoFromContext } from "@/app/_context/VidoFrameContext";

function RemotionPlayer() {
  const [screen, setScreen] = useState({
    width: 500,
    height: 300,
  });

  const { videoFrames, setVideoFrames } = useContext(videoFromContext);

  const videoRef = useRef();

  useEffect(() => {
    let skipDuratin = 0;
    if (videoFrames?.selectFrame) {
      for (let index = 0; index < videoFrames?.selectFrame; index++) {
        skipDuratin += videoFrames.listFrames[index].duration;
      }
    }
    videoRef?.current?.seekTo(skipDuratin * 30);
  }, [videoFrames.selectFrame]);

  return (
    <div>
      <div className="flex justify-center items-center">
        {videoFrames?.totalDuration && (
          <Player
            ref={videoRef}
            component={RemotionComposition}
            durationInFrames={Number(videoFrames.totalDuration * 30)}
            compositionWidth={screen.width}
            compositionHeight={screen.height}
            fps={30}
            style={{
              borderRadius: "5px",
              width: "100%",
              height: 300,
            }}
            controls
            inputProps={{
              listFrames: videoFrames?.listFrames,
            }}
          />
        )}
      </div>

      <div className="flex gap-5 mt-5 items-center justify-center">
        <Fullscreen />
        <Select onValueChange={(v) => setScreen(JSON.parse(v))}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="16:9" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={JSON.stringify({ width: 400, height: 400 })}>
              1:1
            </SelectItem>
            <SelectItem value={JSON.stringify({ width: 500, height: 300 })}>
              16:9
            </SelectItem>
            <SelectItem value={JSON.stringify({ width: 300, height: 500 })}>
              9:16
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export default RemotionPlayer;
