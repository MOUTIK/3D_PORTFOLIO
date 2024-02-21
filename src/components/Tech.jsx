import React from 'react'
import { technologies } from "../constants"
import { BallCanvas } from './canvas'
import { Canvas } from '@react-three/fiber'
const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {
        technologies.map((technology, index) => (
          <div className='w-28 h-28' key={index}>
            <BallCanvas
              icon={technology.icon}
            />
          </div>
        ))
      }
    </div>
  )
}

export default Tech