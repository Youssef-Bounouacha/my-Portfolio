"use client";
import { Inter } from '@next/font/google'
import { ThemeProvider } from 'next-themes'
//Components-------------------------------------------------------
import Header from '@/Components/Header'
import Hero from '@/Components/Hero';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <ThemeProvider attribute='class'>
      <div className='h-screen snap-y snap-mandatory overflow-scroll z-0'>
        {/*Header*/}
        <Header />

        {/*Hero*/}
        <section id='hero' className='snap-center'>
          <Hero />
        </section>

        {/*About*/}


        {/*Experience*/}


        {/*Skills*/}


        {/*Project*/}


        {/*Contact*/}


      </div>
    </ThemeProvider>
  )
}
