"use client";
import { Inter } from '@next/font/google'
import Header from '@/Components/Header'
import { ThemeProvider } from 'next-themes'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <ThemeProvider attribute='class'>
      <div>
        {/*Header*/}
        <Header />

        {/*Hero*/}


        {/*About*/}


        {/*Experience*/}


        {/*Skills*/}


        {/*Project*/}


        {/*Contact*/}


      </div>
    </ThemeProvider>
  )
}
