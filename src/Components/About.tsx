import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function About({ }: Props) {
    return (
        <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[15px] font-semibold text-3xl'>About</h3>
            <motion.img
                initial={{
                    x: -300,
                    opacity: 0,
                }}
                transition={{
                    duration: 1.2,
                }}
                whileInView={{
                    x: 0,
                    opacity: 1,
                }}
                src='https://avatars.githubusercontent.com/u/51406125?v=4'
                className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md-w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
            />
            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'> hellooooooo <span className='text-red-900'>thereee</span></h4>
                <p className='text-base font-semibold tracking-[2px]'>
                    Hi, my name is Youssef Bounouacha and I am a 24-year-old software engineer from Tangier, Morocco.
                    I am passionate about the world of technology and take great pride in my work as a software engineer.
                    My love for video games has also driven my interest in the field and fueled my motivation to continuously
                    improve and stay up-to-date with the latest advancements.<br />
                    I am a highly motivated and driven individual with a strong work ethic.
                    My problem-solving skills and ability to think critically and creatively have been honed through
                    my experience in the field and have enabled me to deliver outstanding results for my clients and employers.<br />
                    I am always eager to take on new challenges and continuously improve my skills, and I am confident that
                    I can bring a positive and impactful contribution to any organization I work with.
                    Thank you for considering my profile.
                </p>
                <button className='group w-fit px-6 py-3 my-2 mx-auto font-semibold hover:ring-2 ring-red-900 flex items-center uppercase rounded-md bg-gradient-to-r from-red-400 to-red-900'>
                    <a href='pdf/YOUSSEF_BOUNOUACHA_CV.pdf' download>my resume</a>
                </button>
            </div>
        </div>
    )
}

