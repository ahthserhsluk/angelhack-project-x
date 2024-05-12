"use client"
import { SparklesCore } from '@/components/ui/sparkles'
import React from 'react'
import OpenAI from "openai";
import { openaiAction } from '@/utils/actions';

const Page = () => {

  
  async function main(requirements: string) {
    const data = await openaiAction(requirements)
    console.log(data)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = main(e.target[0].value)
    console.log(result)

  };
  return (
    <main className='bg-[#222] h-screen flex flex-col justify-center items-center text-black'>
        <div className="h-full w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <form onSubmit={handleSubmit}>
      <div className="flex">
        <input
          type="text"
          placeholder="Tell us your requirements..."
          className="bg-[#000] text-white p-4 rounded-lg w-[30rem] focus:outline-0"
        />
        <button type="submit" className="bg-[#333] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </div>
    </form>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
 
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
 
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
      
    </main>
  )
}

export default Page