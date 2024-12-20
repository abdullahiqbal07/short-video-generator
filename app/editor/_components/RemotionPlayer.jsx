import React, { useContext, useState } from "react";
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
    const[screen, setScreen] = useState({
        width: 500,
        height: 300
    })

    const{videoFrames, setVideoFrames} = useContext(videoFromContext)

  return (
    <div>
      <div className="flex justify-center items-center">
        {videoFrames?.totalDuration && <Player
          component={RemotionComposition}
          durationInFrames={Number(videoFrames.totalDuration * 30)}
          compositionWidth={screen.width}
          compositionHeight={screen.height}
          fps={30}
          style={{
            borderRadius: "5px",
          }}
          controls
        />}
      </div>

      <div className="flex gap-5 mt-5 items-center justify-center">
        <Fullscreen/>
        <Select onValueChange={(v)=>setScreen(JSON.parse(v))}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="16:9" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={JSON.stringify({width: 400, height: 400})}>1:1</SelectItem>
            <SelectItem value={JSON.stringify({width: 500, height: 300})}>16:9</SelectItem>
            <SelectItem value={JSON.stringify({width: 300, height: 500})}>9:16</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export default RemotionPlayer;
