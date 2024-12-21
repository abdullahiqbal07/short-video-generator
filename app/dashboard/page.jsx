"use client";
import { Clapperboard, WandSparkles } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import VideoCreateOption from "../editor/_components/VideoCreateOption";

function Dashboard() {
  const [videoList, setVideoList] = useState([]);

  return (
    <div className="p-10">
      <h1 className="font-bold text-2xl">Dashboard</h1>
      {videoList.length == 0 && (
        <VideoCreateOption />
      )}
    </div>
  );
}

export default Dashboard;
