import { Download, Edit, Trash2 } from "lucide-react";
import Link from "next/link";
import React from "react";

export const VideoList = ({ videoList }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {videoList.map((video, index) => {
        const firstFrame = video?.videoData?.listFrames[0];

        return (
          <div
            key={video.id}
            className="rounded-xl overflow-hidden shadow-md bg-white flex flex-col justify-between"
          >
            {/* Frame Preview */}
            <div
              className="h-40 flex items-center justify-center p-4"
              style={{
                background: firstFrame?.bgColor || "#ffff",
                fontFamily: firstFrame?.fontFamily,
              }}
            >
              <h2
                className="text-center break-words"
                style={{
                  color: firstFrame?.textColor || "#ffffff",
                  //   fontSize: `${firstFrame?.fontSize}px`,
                }}
              >
                {firstFrame?.text}
              </h2>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center p-4 border-t gap-2">
              <Link
                href={"/editor/" + video?.videoId}
                className="flex items-center gap-1 text-sm text-blue-600 font-medium hover:underline"
              >
                <Edit className="w-4 h-4" />
              </Link>

              <button className="flex items-center gap-1 text-sm text-green-600 font-medium hover:underline">
                <Download className="w-4 h-4" />
              </button>

              <button className="flex items-center gap-1 text-sm text-red-500 font-medium hover:underline">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
