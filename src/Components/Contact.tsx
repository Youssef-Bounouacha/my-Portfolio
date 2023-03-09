import React from 'react'
import ContactCard from './SubComponents/ContactCard'

type Props = {}

export default function Contact({ }: Props) {
    return (
        <div className=' md:px-10 min-h-screen  flex flex-col relative h-screen md:space-x-10 text-center md:text-left md:flex-row max-w-4xl mx-auto px-10 justify-evenly items-center'>
            <h3 className='absolute top-24 tracking-[12px] uppercase text-xl md:text-2xl z=10'>
                Contact
            </h3>
            <div className='w-full px-10 mt-[20%]'>
                <ContactCard />
            </div>
        </div>
    )
}

