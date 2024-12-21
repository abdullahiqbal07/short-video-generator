import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Clapperboard, WandSparkles } from "lucide-react";
import Link from "next/link";
import VideoCreateOption from "@/app/editor/_components/VideoCreateOption";

function CreateButton() {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-full bg-blue-600 text-white hover:bg-blue-800">
            + Create Video
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-md mx-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl text-center font-semibold">
              Let's create a new video
            </DialogTitle>
            <DialogDescription asChild>
              <VideoCreateOption />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CreateButton;
