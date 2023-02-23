import React from 'react'
import { motion } from 'framer-motion'
import download from '../public/images/download.svg'
type Props = {}

export default function About({ }: Props) {
    return (
        <div className='flex flex-col relative h-screen md:space-x-10 text-center md:text-left md:flex-row max-w-4xl mx-auto px-10 justify-evenly items-center'>
            <h3 className='absolute top-20 md:top-24 uppercase tracking-[12px] text-gray text-xl md:text-2xl'>About</h3>
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
                className='mt-24 md:mt-0 md:mb-18 flex-shrink-0 w-64 h-64 rounded-full object-top object-cover md:rounded-t-xl md:rounded-b-xl md:h-[320px] md:w-64 '
            />
            <div className='flex flex-col px-0 md:mb-0 -mt-3 md:mt-16 md:px-5 '>
                <h4 className='uppercase text-xl md:text-2xl font-semibold md:mb-2'>Let me introduce <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-900'>myself</span></h4>
                <p className='md:text-base text-xs font-semibold leading-relaxed tracking-wide text-justify'>
                    Hi, my name is Youssef Bounouacha and I am a 24-year-old software engineer from Tangier, Morocco.
                    I am passionate about the world of technology and take great pride in my work as a software engineer.
                    My love for video games has also driven my interest in the field and fueled my motivation to continuously
                    improve and stay up-to-date with the latest advancements.<br />
                    I am a highly motivated and driven individual with a strong work ethic.
                    I possess excellent problem-solving skills and I am able to think critically and creatively.<br />
                    I am always eager to take on new challenges and continuously improve my skills, and I am confident that
                    I can bring a positive and impactful contribution to any organization I work with.
                    Thank you for considering my profile.
                </p>
                <button className='group w-fit px-6 py-3 my-0 mx-auto font-semibold hover:ring-2 ring-red-900 flex items-center uppercase rounded-md bg-gradient-to-r from-red-400 to-red-900'>
                    <a href='pdf/Youssef_BounouachaCV (eng).pdf' download>my resume</a>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="download"
                        className="w-3 ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor"
                            d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z">
                        </path>
                    </svg>
                </button>
            </div>
        </div>
    )
}

