import { db } from "@/config/db";
import { video_table } from "@/config/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { videoId, emailId } = await request.json();

  const result = await db.insert(video_table).values({
    videoId: videoId,
    createdBy: emailId,
  });

  return NextResponse.json({ result });
}

export async function PUT(request) {
  const { videoId, videoData } = await request.json();
  // console.log(videoId, videoData);
  const result = await db.update(video_table).set({
    videoData: videoData,
  }).where(eq(video_table.videoId, videoId));

  return NextResponse.json({ result });
}

export async function GET(request) {
  const {searchParams} = new URL(request.url)
  // console.log(searchParams)
  const videoId = searchParams.get('videoId')
  const result = await db.select().from(video_table).where(eq(video_table.videoId, videoId))
  return NextResponse.json(result[0]);
}