import React from 'react'

type Props = {}

export default function Skills({ }: Props) {
    const skill = [
        {
            id: 1,
            src: 'images/skills/html.png',
            title: 'HTML',
            style: 'shadow-orange-500',
        },
        {
            id: 2,
            src: 'images/skills/css.png',
            title: 'CSS',
            style: 'shadow-blue-500',
        },
        {
            id: 3,
            src: 'images/skills/js.png',
            title: 'JavaScript',
            style: 'shadow-yellow-500',
        },
        {
            id: 4,
            src: 'images/skills/ts.png',
            title: 'TypeScript',
            style: 'shadow-blue-700',
        },
        {
            id: 5,
            src: 'images/skills/react.png',
            title: 'React',
            style: 'shadow-sky-600',
        },
        {
            id: 6,
            src: 'images/skills/next.png',
            title: 'Next',
            style: 'shadow-white',
        },
        {
            id: 7,
            src: 'images/skills/tailwind.png',
            title: 'Tailwind',
            style: 'shadow-sky-500',
        },
        {
            id: 8,
            src: 'images/skills/vite.png',
            title: 'VITE',
            style: 'shadow-purple-500',
        },
        {
            id: 9,
            src: 'images/skills/git.png',
            title: 'GIT',
            style: 'shadow-red-500',
        },
        {
            id: 10,
            src: 'images/skills/github.png',
            title: 'GitHub',
            style: 'shadow-gray-600',
        },
        {
            id: 11,
            src: 'images/skills/materialui.png',
            title: 'Material UI',
            style: 'shadow-blue-500',
        },
        {
            id: 12,
            src: 'images/skills/mantineui.png',
            title: 'Mantine UI',
            style: 'shadow-sky-400',
        },
    ]
    return (

        <div className=' md:px-10 min-h-screen  flex flex-col relative h-screen md:space-x-10 text-center md:text-left md:flex-row max-w-4xl mx-auto px-10 justify-evenly items-center'>
            <h3 className='absolute top-24 tracking-[12px] uppercase text-xl md:text-2xl z=10'>
                skills
            </h3>
            <h4 className='absolute top-44 md:top-40 tracking-[3px] z=10 uppercase text-xl md:text-2xl font-semibold md:mb-2'>
                These are the technologies I've worked with
            </h4>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px12 sm:px-0'>
                {
                    skill.map(({ id, src, title, style }) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img src={src} alt="" className='w-20 mx-auto' />
                            <p className='mt-4'>{title}</p>
                        </div>

                    ))
                }
            </div>
        </div>

    )
}

