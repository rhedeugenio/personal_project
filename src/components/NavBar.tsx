import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div className="h-20 text-white p-0 flex items-center border-b-4 border-b-black bg-gray-600 uppercase lg:px-10 xl:px-20 gap-4">

        <div className="flex-1 flex justify-self-center gap-3">
            <Link href="/" className="border-2 rounded-2xl p-2 hover:bg-gray-400">Schedule</Link>
            <Link href="/" className="border-2 rounded-2xl p-2 hover:bg-gray-400">Contact</Link>
            <Link href="/" className="border-2 rounded-2xl p-2 hover:bg-gray-400">Login</Link>
        </div>
        
        {/*Website Title and Home Link*/}
        <div className="text-2xl flex-1 flex justify-center">
            <Link href="/">Coaching Appointment</Link>
        </div>
        <div className="flex-1 flex justify-end gap-3"></div>
    </div>
    
  )
}

export default NavBar