"use client";
import { Clapperboard, WandSparkles } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import VideoCreateOption from "../editor/_components/VideoCreateOption";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { VideoList } from "./_components/VideoList";

function Dashboard() {
  const [videoList, setVideoList] = useState([]);

  const { user } = useUser();

  useEffect(() => {
    if (!user) return; // Wait until user is loaded

    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          "/api/video?emailId=" + user.primaryEmailAddress.emailAddress
        );
        // console.log(response.data);
        setVideoList(response.data); // set your videos into state
      } catch (error) {
        console.error(error);
      }
    };

    fetchVideos();
  }, [user]); // 👈 Important to depend on user

  return (
    <div className="p-10">
      <h1 className="font-bold text-2xl">Dashboard</h1>
      {videoList.length == 0 ? <VideoCreateOption /> : <VideoList videoList={videoList} />}
    </div>
  );
}

export default Dashboard;
