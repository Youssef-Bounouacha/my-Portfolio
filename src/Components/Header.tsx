"use client";
import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import { SocialIcon } from 'react-social-icons'
import {
    BrandGithub,
    BrandLinkedin,
    SunHigh,
    MoonStars,
    MailForward,
} from 'tabler-icons-react';
import { useTheme } from 'next-themes';
import useSound from 'use-sound';
import { motion } from 'framer-motion';
type Props = {}

export default function Header({ }: Props) {

    const [navbar, setNavbar] = useState(false);
    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [play] = useSound('/audio/lightswitch.mp3', {
        volume: 0.4,
        sprite: {
            on: [0, 300],
            off: [300, 500],
        }
    })

    useEffect(() => {
        setMounted(true);
    }, [])


    const bgColor = theme === 'light' ? 'bg-white' : 'bg-black';

    const renderThemeChanger = () => {
        if (!mounted) return null;
        const currentTheme = theme === 'system' ? systemTheme : theme;
        if (currentTheme === 'dark') {
            return (
                <SunHigh
                    role='button'
                    onClick={() => { setTheme('light'); play({ id: 'on' }) }}
                    className='bg-gray rounded-lg p-1 dark:black flex items-center justify-center hover:ring-2 ring-red-900 transition-all duration-300 focus:outline-none'
                />

            )
        } else {
            return (
                <MoonStars
                    role='button'
                    onClick={() => { setTheme('dark'); play({ id: 'off' }) }}
                    className='bg-gray rounded-lg p-1 dark:black flex items-center justify-center hover:ring-2  ring-red-900 transition-all duration-300 focus:outline-none'
                />
            )
        }
    }

    return (
        <header className='sticky top-0 flex items-start fixed z-20'>
            <nav className={`w-full ${bgColor} shadow`}>
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            <a href="/">
                                <motion.h2
                                    initial={{ x: -500, opacity: 0, scale: 0.5, }}
                                    animate={{ x: 0, opacity: 1, scale: 1, }}
                                    transition={{ duration: 1.5, }}
                                    className="text-3xl hover:text-red-900 text-gray font-bold font-signature">
                                    Youssef
                                </motion.h2>
                            </a>
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-700  rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-gray"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-gray"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'block' : 'hidden'
                                }`}
                        >
                            <motion.ul
                                initial={{ x: 1000, opacity: 0, scale: 0.5, }}
                                animate={{ x: 0, opacity: 1, scale: 1, }}
                                transition={{ duration: 1.5, }}
                                className="items-center justify-center space-y-8 md:flex md:space-x-3 md:space-y-0">
                                {renderThemeChanger()}
                                <li className="text-gray p-1 rounded-lg hover:text-red-900 hover:ring-2 ring-red-900" >
                                    <Link href="/about">
                                        About
                                    </Link>
                                </li>
                                <li className="text-gray p-1 rounded-lg hover:text-red-900 hover:ring-2 ring-red-900  rounded-lg">
                                    <Link href="/experience">
                                        Experience
                                    </Link>
                                </li>
                                <li className="text-gray p-1 rounded-lg hover:text-red-900 hover:ring-2 ring-red-900  rounded-lg">
                                    <Link href="/skills">
                                        Skills
                                    </Link>
                                </li>
                                <li className="text-gray p-1 rounded-lg hover:text-red-900 hover:ring-2 ring-red-900  rounded-lg">
                                    <Link href="/projects">
                                        Projects
                                    </Link>
                                </li>
                                <li className="text-gray p-1 rounded-lg hover:text-red-900 hover:ring-2 ring-red-900">
                                    <Link href="/contact">
                                        Contact
                                    </Link>
                                </li>
                                {/*Socials Icons*/}
                                <div className='flex flex-row items-center'>
                                    <SocialIcon url="https://www.linkedin.com/in/youssef-bounouacha-b90981202" fgColor='gray' bgColor='transparent' className="p-1 rounded-lg hover:ring-2 ring-red-900" />
                                    <SocialIcon url="https://github.com/Youssef-Bounouacha" fgColor='gray' bgColor='transparent' className="p-1 rounded-lg hover:ring-2 ring-red-900" />
                                </div>
                            </motion.ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>


    )
}







