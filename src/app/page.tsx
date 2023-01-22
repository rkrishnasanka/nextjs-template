import Image from 'next/image'
import { Inter } from '@next/font/google'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <h1 className="text-5xl font-medium animate-bounce text-gray-900 underline">
      Hello world! xxx
    </h1>
  )
}