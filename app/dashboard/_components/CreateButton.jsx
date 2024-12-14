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
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CreateButton;
