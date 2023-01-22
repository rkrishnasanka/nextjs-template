import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <h1 className="text-5xl font-bold underline">
      Hello world!
    </h1>
  )
}