"use client";
import { Inter } from '@next/font/google'
import { ThemeProvider } from 'next-themes'
//Components-------------------------------------------------------
import Header from '@/Components/Header'
import Hero from '@/Components/Hero';
import About from '@/Components/About';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <ThemeProvider attribute='class'>
      <div className='bg-[#d4d4d4] dark:bg-[#0f0f0f]  h-screen snap-y snap-mandatory overflow-scroll z-0'>
        {/*Header*/}
        <Header />

        {/*Hero*/}
        <section id='hero' className='snap-start'>
          <Hero />
        </section>

        {/*About*/}
        <section id='about' className='snap-center'>
          <About />
        </section>

        {/*Experience*/}


        {/*Skills*/}


        {/*Project*/}


        {/*Contact*/}


      </div>
    </ThemeProvider>
  )
}
