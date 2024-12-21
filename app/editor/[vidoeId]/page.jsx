'use client'
import React from "react";
import { Button } from "@/components/ui/button";
import Header from "@/app/dashboard/_components/Header";
import TrackList from "../_components/TrackList";
import RemotionPlayer from "../_components/RemotionPlayer";
import SaveVideo from "../_components/SaveVideo";


function Editor() {
  return (
    <div>
      <Header />
      <div className="p-10 m:px-24 lg:px-32">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-2xl">Edit Video</h1>
          <div className="flex gap-5">
            <SaveVideo />
            <Button>Export</Button>
          </div>
        </div>
        <div className="grid grid-cols-6 gap-7 mt-7">
          <div>
            <TrackList />
          </div>
          <div className="col-span-3">
            <RemotionPlayer />
          </div>
          <div className="col-span-2">Control Section</div>
        </div>
      </div>
    </div>
  );
}

export default Editor;
