import React from 'react'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'

type Props = {}

export default function ComingSoon({ }: Props) {
    const [text, count] = useTypewriter({
        words: ["Coming Soon...",],
        loop: true,
        delaySpeed: 2000,
    })
    return (
        <div className=' md:px-10 min-h-screen  flex flex-col relative h-screen md:space-x-10 text-center md:text-left md:flex-row max-w-4xl mx-auto px-10 justify-evenly items-center'>
            <h3 className='absolute top-24 tracking-[12px] uppercase text-xl md:text-2xl z=10'>
                {text}
                <Cursor />
            </h3>
            <div className='w-full px-10'>
                <img src='images/building-website.png' alt='' />
            </div>
        </div>
    )
}
