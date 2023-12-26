import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div className="h-20 text-white items-center flex justify-between bg-gray-300 uppercase lg:px-10 xl:px-20 font-sans font-bold">
      <div className="flex-1 flex justify-start">
        {/* 
        
        <Link href="/" className="flex pr-4">
            <Image src='/bdo_logo.jpg' alt='' width={60} height={20} className=""/>
          </Link>
          <Link href="/" className="p-4 text-black border-l-2 border-r-2 hover:text-blue-600 active:text-blue-400">Schedule</Link>
          <Link href="/" className="p-4 text-black border-r-2 hover:text-blue-600 active:text-blue-400">Contact</Link>
        */}
          <Link href="/" className="pr-4">
            <Image src='/bdo_logo.jpg' alt='' width={60} height={20} className=""/>
          </Link>
          <Link href="/" className="p-4 text-black border-l-2 border-r-2 hover:text-blue-600 active:text-blue-400">Schedule</Link>
          <Link href="/" className="p-4 text-black border-r-2 hover:text-blue-600 active:text-blue-400">Contact</Link>
          <Link href="/" className="p-4 text-black  border-r-2 hover:text-blue-600 active:text-blue-400">Location</Link>

      </div>
        
      {/*Website Title and Home Link*/}
      <div className="text-2xl text-black flex flex-1 justify-center">
          <Link href="/">Appointment</Link>
      </div>
      <div className="flex flex-1 justify-end">
        <Link href="/" className="p-4 text-black border-l-2 border-r-2 hover:text-blue-600 active:text-blue-400">Documentation</Link>
        <Link href="/" className="p-4 text-black border-r-2 hover:text-blue-600 active:text-blue-400">Login</Link>
      </div>
    </div>
    
  )
}

export default NavBar