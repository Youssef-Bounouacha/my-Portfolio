import React from 'react'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
import BackgroundCercles from './BackgroundCercles'
import { ThemeProvider, useTheme } from 'next-themes'

type Props = {}

export default function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: ["Youssef Bounouacha", "Software Engineer", "Front-End Developer"],
        loop: true,
        delaySpeed: 2000,
    })
    return (

        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCercles />
            <h1 className='p-5 text-2xl font-bold text-6xl'>
                <span className='text-gray'>Hi there!🤗</span>
            </h1>
            <h1 className='p-5 text-2xl font-bold text-6xl'>
                <span className=' text-red-900'>{text}</span>
                <Cursor cursorColor='red-900' />
            </h1>
        </div>

    )
}
