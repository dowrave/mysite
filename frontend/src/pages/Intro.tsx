import React from 'react'
import { PiBookOpenTextBold, PiGameControllerFill } from 'react-icons/pi'
import { Link } from 'react-router-dom'

const Intro = () => {
  return (
    <div className="flex w-screen h-screen">
        <div className="flex-1 p-4 bg-sky-900 flex items-center justify-center hover:text-white hover-effect">
          <Link to='/work'>
            <h1 className="text-3xl font-bold ">Work</h1>
          </Link>
        </div>
        <div className="flex-1 p-4 bg-red-900 flex items-center justify-center hover:text-white hover-effect">
            <Link to='/hobby'>
              <h1 className="text-3xl font-bold ">Hobby</h1>
            </Link>
        </div>
    </div>
  )
}

export default Intro