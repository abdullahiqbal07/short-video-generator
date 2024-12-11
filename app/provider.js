'use client'
import { db } from '@/config/db';
import { useUser } from '@clerk/nextjs';
import React, { useEffect } from 'react'
import { users } from '@/config/schema'
import { eq } from 'drizzle-orm';
function Provider({ children }) {

  const { user } = useUser()

  useEffect(()=> {
    user && newUser()
  }, [user])
  const newUser = async () => {
    const finduser = await db.select().from(users).where(eq(users.email, user?.primaryEmailAddress.emailAddress))
    console.log(finduser)
    if(!finduser[0]){
      const newUser = await db.insert(users).values({
        name: user?.fullName,
        email: user?.primaryEmailAddress.emailAddress,
        imageUrl: user?.imageUrl
      })
    }
  };
  return (
    <div>
        { children }
    </div>
  )
}

export default Provider