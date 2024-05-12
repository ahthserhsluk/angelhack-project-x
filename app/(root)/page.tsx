
import { Spotlight } from '@/components/ui/Spotlight'
import React from 'react'
import logo from '@/public/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
const Page = () => {
  return (
    <main className='h-screen bg-black w-full flex flex-col items-center justify-center'>

<div className='flex gap-12 w-full items-center justify-center'>
        <h1 className='text-8xl font-bold'>Project - X</h1>
        <Image src={logo} alt='logo' width={100} height={100} />
      </div>

    <div className='flex justify-center items-center gap-10'>
    <Link href='/freelancers/projects'>
<button className='bg-white text-black p-4 rounded-lg mt-20 '>Find a Gig</button>
</Link>
<Link href='/clients'>
<button className='bg-white text-black p-4 rounded-lg mt-20'>Post a Project</button>
</Link>

    </div>
<Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

    </main>
  )
}

export default Page