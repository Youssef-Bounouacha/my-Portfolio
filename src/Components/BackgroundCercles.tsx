import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function BackgroundCircles({ }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ scale: [1, 2, 2, 3, 1], opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0], }}
            transition={{ duration: 5, }}
            className='relative flex justify-center items-center'>
            <div className='absolute border border-red-900 rounded-full h-[200px] w-[200px] mt-52 animate-ping' />
            <div className='absolute border border-red-900 rounded-full h-[200px] w-[250px] mt-52 animate-spin' />
            <div className='absolute border border-red-900 rounded-full h-[350px] w-[300px] mt-52 animate-spin' />
            <div className='absolute border border-red-900 rounded-full h-[300px] w-[350px] mt-52 animate-spin' />
        </motion.div>
    )
}