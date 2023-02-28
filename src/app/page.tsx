"use client";
import { Inter } from '@next/font/google'
import { ThemeProvider } from 'next-themes'
//Components-------------------------------------------------------
import Header from '@/Components/Header'
import Hero from '@/Components/Hero';
import About from '@/Components/About';
import Skills from '@/Components/Skills';
import Project from '@/Components/Project';
import Contact from '@/Components/Contact';
import ComingSoon from '@/Components/ComingSoon';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <ThemeProvider attribute='class'>
      <div className='bg-[#f0f0f0] dark:bg-[#0f0f0f]  h-screen snap-y md:snap-mandatory  overflow-scroll z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-red-900/80'>
        {/*Header*/}
        <Header />

        {/*Hero*/}
        <section id="hero" className='md:snap-start select-none'>
          <Hero />
        </section>

        {/*About*/}
        <section id="about" className='md:snap-start select-none'>
          <About />
        </section>

        {/*Skills*/}
        <section id="skills" className='md:snap-start select-none'>
          <Skills />
        </section>

        {/*Project*/}
        <section id="projects" className='md:snap-start select-none'>
          <Project />
        </section>

        {/*Contact*/}
        <section id='contact' className='md:snap-start select-none'>
          <Contact />
        </section>
      </div>
    </ThemeProvider>
  )
}
