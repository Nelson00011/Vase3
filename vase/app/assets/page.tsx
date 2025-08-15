"use client"

import Image from 'next/image'
import lotus from './assets/lotus.jpg'

import { useChat } from "ai/react"
import { Message } from "ai"

const Home = () => {
    return (
        <main>
            <Image src={lotus} width={250} alt="Lotus Logo" />
            
        </main>
    )
}

export default Home

