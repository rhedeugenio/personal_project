import Image from 'next/image'
import React from 'react'

const IntroDesc = () => {
  return (

    <div className="p-10 flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-15rem)] lg:flex-row bg-cover bg-sangoon-custom">
        <div className="flex-1 flex items-center justify-center flex-col gap-4 text-white uppercase font-bold">
            <h1 className="text-2xl text-center p-4 md:text-2xl xl:text-3xl">
                This is a website for setting a coaching appointment <br/> related for Black Desert Online.
            </h1>
        </div>
    </div>
  )
}

export default IntroDesc