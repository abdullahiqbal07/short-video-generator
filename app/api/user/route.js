import { NextResponse } from "next/server";

import { db } from "@/config/db";
import { users } from "@/config/schema";
import { eq } from "drizzle-orm";

export async function POST(request) {
  const { user } = await request.json();
//   console.log(user);
  // Check if user data is provided
  if (!user) {
    return NextResponse.json({ error: "User data missing" }, { status: 400 });
  }

  // Extract the primary email address
  const primaryEmail = user.primaryEmailAddress?.emailAddress;

  // Validate the extracted email
  if (!primaryEmail) {
    return NextResponse.json({ error: "Primary email address missing" }, { status: 400 });
  }

  try {
    // Find the user in the database
    const finduser = await db
      .select()
      .from(users)
      .where(eq(users.email, primaryEmail));

    // If user does not exist, insert a new user
    if (!finduser[0]) {
      const newUser = await db.insert(users).values({
        name: user.fullName, // Combine first and last name
        email: primaryEmail,
        imageUrl: user.imageUrl,
      });

      return NextResponse.json(newUser);
    }

    // Return the existing user
    return NextResponse.json(finduser);
  } catch (error) {
    console.error("Error handling request:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
