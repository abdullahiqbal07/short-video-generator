// "use client";
// import { Clapperboard, WandSparkles } from "lucide-react";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import VideoCreateOption from "../editor/_components/VideoCreateOption";
// import { useUser } from "@clerk/nextjs";
// import axios from "axios";
// import { VideoList } from "./_components/VideoList";

// function Dashboard() {
//   const [videoList, setVideoList] = useState([]);

//   const { user } = useUser();

//   useEffect(() => {
//     if (!user) return; // Wait until user is loaded

//     const fetchVideos = async () => {
//       try {
//         const response = await axios.get(
//           "/api/video?emailId=" + user.primaryEmailAddress.emailAddress
//         );
//         // console.log(response.data);
//         setVideoList(response.data); // set your videos into state
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchVideos();
//   }, [user]); // 👈 Important to depend on user

//   return (
//     <div className="p-10">
//       <h1 className="font-bold text-2xl">Dashboard</h1>
//       {videoList.length == 0 ? <VideoCreateOption /> : <VideoList videoList={videoList} />}
//     </div>
//   );
// }

// export default Dashboard;


"use client";
import { Clapperboard, WandSparkles, RotateCw } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState, useCallback } from "react";
import VideoCreateOption from "../editor/_components/VideoCreateOption";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { VideoList } from "./_components/VideoList";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

function Dashboard() {
  const [videoList, setVideoList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { isLoaded, user } = useUser();

  const fetchVideos = useCallback(async () => {
    if (!isLoaded || !user?.primaryEmailAddress?.emailAddress) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      
      const response = await axios.get(
        `/api/video?emailId=${user.primaryEmailAddress.emailAddress}`,
        {
          timeout: 10000 // 10 second timeout
        }
      );

      setVideoList(prev => {
        const newData = response.data;
        // Only update if data actually changed
        return JSON.stringify(prev) === JSON.stringify(newData) ? prev : newData;
      });
    } catch (err) {
      console.error("Failed to fetch videos:", err);
      setError(err.message || "Failed to load videos");
      toast.error("Failed to load videos. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [isLoaded, user?.primaryEmailAddress?.emailAddress]);

  useEffect(() => {
    const timer = setTimeout(fetchVideos, 300); // Small debounce
    return () => clearTimeout(timer);
  }, [fetchVideos]);

  const handleRefresh = () => {
    fetchVideos();
  };

  if (!isLoaded) {
    return (
      <div className="p-10 flex flex-col items-center justify-center min-h-[300px]">
        <div className="flex items-center gap-2">
          <RotateCw className="h-4 w-4 animate-spin" />
          <span>Loading user data...</span>
        </div>
      </div>
    );
  }

  if (loading && videoList.length === 0) {
    return (
      <div className="p-10 flex flex-col items-center justify-center min-h-[300px]">
        <div className="flex items-center gap-2">
          <RotateCw className="h-4 w-4 animate-spin" />
          <span>Loading your videos...</span>
        </div>
      </div>
    );
  }

  if (error && videoList.length === 0) {
    return (
      <div className="p-10 flex flex-col items-center justify-center min-h-[300px]">
        <div className="text-red-500 mb-4">Error: {error}</div>
        <Button onClick={handleRefresh} variant="outline">
          <RotateCw className="mr-2 h-4 w-4" />
          Try Again
        </Button>
      </div>
    );
  }

  return (
    <div className="p-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="font-bold text-2xl">Dashboard</h1>
        {videoList.length > 0 && (
          <Button 
            onClick={handleRefresh} 
            variant="ghost"
            size="sm"
            disabled={loading}
          >
            {loading ? (
              <RotateCw className="h-4 w-4 animate-spin" />
            ) : (
              <RotateCw className="h-4 w-4" />
            )}
            <span className="ml-2">Refresh</span>
          </Button>
        )}
      </div>

      {loading && videoList.length > 0 && (
        <div className="flex items-center gap-2 mb-4">
          <RotateCw className="h-4 w-4 animate-spin" />
          <span>Updating videos...</span>
        </div>
      )}

      {error && videoList.length > 0 && (
        <div className="text-red-500 mb-4">
          Error: {error} 
          <button 
            onClick={handleRefresh} 
            className="text-blue-500 ml-2 flex items-center gap-1"
          >
            <RotateCw className="h-4 w-4" /> Retry
          </button>
        </div>
      )}

      {videoList.length === 0 ? (
        <VideoCreateOption />
      ) : (
        <VideoList videoList={videoList} />
      )}
    </div>
  );
}

export default Dashboard;