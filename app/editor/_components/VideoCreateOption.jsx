import { useUser } from '@clerk/nextjs';
import axios from 'axios';
import { Clapperboard, WandSparkles } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'
import { v4 as uuidv4 } from 'uuid';

function VideoCreateOption() {

  const {user} = useUser()

  const emailId = user?.primaryEmailAddress?.emailAddress;
  const router = useRouter();
  const addVideo = async() => {
    const videoId = uuidv4();

    const response = await axios.post('/api/video', {
      emailId: emailId,
      videoId: videoId
    })

    console.log(response)

    router.push('/editor/' + videoId)

  }  

  return (
    <div>
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

            <div onClick={addVideo}>
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
            </div>
          </div>
        </div>
    </div>
  )
}

export default VideoCreateOption