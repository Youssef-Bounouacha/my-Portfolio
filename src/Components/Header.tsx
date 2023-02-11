"use client";
import React from 'react'
import Link from 'next/link';
import { useState } from 'react';
import { SocialIcon } from 'react-social-icons'
import { useTheme } from 'next-themes'
type Props = {}

export default function Header({ }: Props) {

    const [navbar, setNavbar] = useState(false);
    const { theme, setTheme } = useTheme()

    return (
        <header>
            <nav className="w-full bg- shadow">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            <a href="#">
                                <h2 className="text-2xl text-gray font-bold">Youssef</h2>
                            </a>
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
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
                            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                                <li className="text-gray">
                                    <Link href="/">
                                        About
                                    </Link>
                                </li>
                                <li className="text-gray">
                                    <Link href="/blogs">
                                        Experience
                                    </Link>
                                </li>
                                <li className="text-gray">
                                    <Link href="/about">
                                        Skills
                                    </Link>
                                </li>
                                <li className="text-gray">
                                    <Link href="/contact">
                                        Project
                                    </Link>
                                </li>
                                <li className="text-gray">
                                    <Link href="/contact">
                                        Contact
                                    </Link>
                                </li>
                                {/*Socials Icons*/}
                                <div className='flex flex-row items-center'>
                                    <SocialIcon url="https://www.linkedin.com/in/youssef-bounouacha-b90981202" fgColor='gray' bgColor='transparent' />
                                    <SocialIcon url="https://github.com/Youssef-Bounouacha" fgColor='gray' bgColor='transparent' />
                                </div>
                                <button
                                    onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                                    className="px-4 py-2 text-white bg-black rounded dark:bg-white dark:text-black">
                                    Dark Toggle
                                </button>
                            </ul>



                        </div>
                    </div>
                </div>
            </nav>



            <div>

            </div>
        </header>


    )
}

