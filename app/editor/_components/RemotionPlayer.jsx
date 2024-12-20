import React from "react";
import RemotionComposition from "./RemotionComposition";
import {Player} from '@remotion/player';

function RemotionPlayer() {
  return (
    <div>
      <Player
        component={RemotionComposition}
        durationInFrames={120}
        compositionWidth={500}
        compositionHeight={300}
        fps={30}
        style={{
            borderRadius: '5px',
        }}
        controls
      />
    </div>
  );
}

export default RemotionPlayer;
