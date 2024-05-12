import React from 'react'
import logo from '@/public/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className='h-24  bg-[#000] w-full px-20 py-5 flex justify-between items-center text-white ' >
      
      <div className='flex gap-2 '>
        <h1 className='text-2xl font-bold'>Project - X</h1>
        <Image src={logo} alt='logo' width={28} height={28} />
      </div>

<div className='flex space-x-7'>

      <div className='space-x-7'>
        <Link href='/freelancers'> Home </Link>
        <Link href='/freelancers/projects'>  </Link>
        <Link href='/freelancers/proposals'> Proposals </Link>
        <Link href='/freelancers/community'> Community </Link>
      </div>

      <div>
        <h1>Hello Vaibhav!</h1>
        
      </div>
</div>
    </div>
  )
}

export default Navbar