import Image from 'next/image'
import React from 'react'

const CoachingServices = () => {
  return (
    <div className="justify-betwween">
        <div className="bg-gray-500">
                <h1 className="text-3xl text-center font-bold text-white">Services</h1>
        </div>
        <div className="space-y-5 flex flex-col bg-cover bg-bdo-custom bg-blur">
            <div className="">
                <h3 className="text-xl font-bold text-center">PVE Gear Coaching</h3>
                <p className="pl-48 text-md text-center filter-none">Guidance for players wanting to focus in improving their PVE gear <br/>
                                                        to grind at end-game spots.</p>
            </div>
            <div className="">
                <h3 className="text-xl font-bold  text-center">Lifesgkill Gear Coaching</h3>
                <p className="pl-48 text-md text-center">Guidance for choosing the optimal way to acquire lifeskill gear for <br/>
                                                        players that enjoy the lifeskilling aspect of the game.</p>
            </div>
            <div className="">
               <h3 className="text-xl font-bold  text-center">PVP Coaching</h3>
               <p className="pl-12 text-md text-center">PVP is dead, so no need for coaching.</p>
            </div>
        </div>
    </div>
  )
}

export default CoachingServices