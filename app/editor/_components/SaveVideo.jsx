// 'use client'
import { videoFromContext } from "@/app/_context/VidoFrameContext";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import { useContext } from "react";
import { toast } from "sonner";

function SaveVideo() {
  const { vidoeId } = useParams();
  // console.log(vidoeId)
  const { videoFrames, setVideoFrames } = useContext(videoFromContext);
  // console.log(videoFrames);
  const saveData = async () => {
    const result = await axios.put("/api/video", {
      videoId: vidoeId,
      videoData: videoFrames,
    });

    // console.log(result);
    toast("video saved successfully");
  };

  // console.log(videoFrames)

  const getVideo = async () => {
    try {
      const response = await axios.get("/api/video?videoId=" + vidoeId);
      const videoData = response?.data?.videoData;
      console.log("Fetched video data:", videoData);

      // Update the state
      if (videoData) {
        setVideoFrames(videoData); // Update context with fetched data
      }

      // Use the updated data here or rely on it in subsequent renders
    } catch (error) {
      console.error("Error fetching video data:", error);
    }
  };

  useEffect(() => {
    vidoeId && getVideo();
  }, [vidoeId]);

  return (
    <div>
      <Button onClick={saveData} outline="variant">
        Save
      </Button>
    </div>
  );
}

export default SaveVideo;
