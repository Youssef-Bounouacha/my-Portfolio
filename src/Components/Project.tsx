import React from 'react'
//Components-------------------------------------------------------
import Carousels from './SubComponents/Carousels'

type Props = {}

export default function Project({ }: Props) {
    return (
        <div className=' md:px-10 min-h-screen  flex flex-col relative h-screen md:space-x-10 text-center md:text-left md:flex-row max-w-4xl mx-auto px-10 justify-evenly items-center'>
            <h3 className='absolute top-24 tracking-[12px] uppercase text-xl md:text-2xl z=10'>
                Projects
            </h3>
            <div className='w-full px-10'>
                <Carousels />
            </div>
        </div>
    )
}

