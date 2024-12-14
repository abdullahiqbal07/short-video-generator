"use client";
import { Clapperboard, WandSparkles } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

function Dashboard() {
  const [videoList, setVideoList] = useState([]);

  return (
    <div className="p-10">
      <h1 className="font-bold text-2xl">Dashboard</h1>
      {videoList.length == 0 && (
        <div className="border rounded-lg border-slate-400 p-5 mt-8 bg-slate-50">
          <h2 className="text-center font-bold text-2xl">
            Create your first video
          </h2>
          <div className="flex flex-wrap gap-5 items-center justify-center">
            <Link href={"/create-ai-video"}>
              <div className="flex flex-col items-center justify-center mt-5 border rounded-lg border-slate-500 p-4 w-40 h-40 cursor-pointer hover:bg-gray-200 transition">
                <WandSparkles
                  className="text-yellow-600 mb-2"
                  width={40}
                  height={40}
                />
                <h2 className="text-lg font-medium text-center">
                  Generate with AI
                </h2>
              </div>
            </Link>

            <Link href={"/editor"}>
              <div className="flex flex-col items-center justify-center  mt-5 border rounded-lg border-slate-500 p-4 w-40 h-40 cursor-pointer hover:bg-gray-200 transition">
                <Clapperboard
                  className="text-yellow-600 mb-2"
                  width={40}
                  height={40}
                />
                <h2 className="text-lg font-medium text-center">
                  Create from Scratch
                </h2>
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
