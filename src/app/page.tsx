"use client";
import { Inter } from '@next/font/google'
import { ThemeProvider } from 'next-themes'
//Components-------------------------------------------------------
import Header from '@/Components/Header'
import Hero from '@/Components/Hero';
import About from '@/Components/About';
import Skills from '@/Components/Skills';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <ThemeProvider attribute='class'>
      <div className='bg-[#f0f0f0] dark:bg-[#0f0f0f]  h-screen snap-y snap-mandatory overflow-scroll z-0'>
        {/*Header*/}
        <Header />

        {/*Hero*/}
        <section id='hero' className='snap-start select-none'>
          <Hero />
        </section>

        {/*About*/}
        <section id='about' className='snap-center select-none'>
          <About />
        </section>

        {/*Skills*/}
        <section id='skills' className='snap-start select-none'>
          <Skills />
        </section>
        {/*Project*/}
        {/*<section id='project' className='snap-center select-none'>

        {/*Contact*/}
        {/*<section id='contact' className='snap-center select-none'>*/}

      </div>
    </ThemeProvider>
  )
}
