import Image from 'next/image'
import React from 'react'

const IntroDesc = () => {
  return (

    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-15rem)] lg:flex-row bg-cover bg-sangoon-custom">
        <div className="flex-1 flex items-center justify-center flex-col gap-4 text-white uppercase font-bold backdrop-blur-sm">
            <h1 className="text-2xl text-center p-4 md:text-2xl xl:text-3xl font-sans">
                A Web Application for Scheduling Coaching Appointments <br/> Related To Black Desert Online.
            </h1>
            <button className="p-3 bg-white text-black outline outline-blue-600 outline outline-offset-2 rounded-lg
            hover:bg-gray-200 active:bg-gray-300">Schedule Appointment</button>
        </div>
    </div>
  )
}

export default IntroDesc