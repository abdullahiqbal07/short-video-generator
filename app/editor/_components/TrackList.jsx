"use client";

import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const defaultFrame = {
  image: "/frame.png",
  text: "Hello world",
  textColor: "black",
  fontSize: 20,
  duration: 30,
};

function TrackList() {
  const [listFrames, setListFrames] = useState([defaultFrame]);
  const [selectFrame, setSelectFrame] = useState(0);

  const addNewFrame = ()=>{
    setListFrames((prev)=>[...prev, defaultFrame]);
  }

  const removeFrame = (indexToRemove) => {
    const updateFrame = listFrames?.filter((_, index)=>index !== indexToRemove)

    setListFrames(updateFrame);
  }

  return (
    <div className="p-5 bg-gray-100 rounded-lg">
        <div className="h-[80vh] overflow-x-scroll">
      {listFrames.map((frame, index) => (
        <div key={index} className={`flex flex-col items-center border-b rounded-lg cursor-pointer p-3 ${selectFrame == index && 'bg-white'}`} onClick={()=>setSelectFrame(index)}>
          <Image
            src={frame.image}
            width={40}
            height={40}
            alt={index.toString()}
            className="w-full h-[40px] object-contain rounded-md"
          />
          <h2 className="text-xs line-clamp-2 mt-1">{frame.text}</h2>
          {selectFrame == index && <Trash2 className="w-3 h-3 mt-1 text-red-600" onClick={()=>removeFrame(index)}/>}
        </div>
      ))}
      <Button size='sm' className='w-full mt-5' onClick={addNewFrame}>+ Add Frames</Button>
      </div>
    </div>
  );
}

export default TrackList;
