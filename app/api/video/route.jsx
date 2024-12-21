import { db } from "@/config/db";
import { video_table } from "@/config/schema";
import { NextResponse } from "next/server";


export async function POST(request) {
    const { videoId, emailId } = await request.json();

    const result = await db.insert(video_table).values({
        videoId: videoId,
        createdBy: emailId,
      });

    return NextResponse.json({result});
}