import React from 'react'
import { SocialIcon } from 'react-social-icons'
type Props = {}

export default function Header({ }: Props) {
    return (
        <header>
            <div className='flex flex-row items-center'>
                {/*Socials Icons*/}
                <SocialIcon url="https://www.linkedin.com/in/youssef-bounouacha-b90981202" fgColor='gray' bgColor='transparent' />
                <SocialIcon url="https://github.com/Youssef-Bounouacha" fgColor='gray' bgColor='transparent' />
                <SocialIcon url="https://mail.google.com/mail" fgColor='gray' bgColor='transparent' />
                <SocialIcon url="https://mail.google.com/mail" fgColor='gray' bgColor='transparent' />
            </div>
        </header>
    )
}

