import { UserButton } from '@clerk/nextjs'
import React from 'react'

function Header() {
  return (
    <div className='flex shadow-md p-4 justify-end '>
      <UserButton />
    </div>
  )
}

export default Header