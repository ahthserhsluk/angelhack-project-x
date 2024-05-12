"use client"
import React, { useState } from 'react'
// import img from '@/public/freelancer.jpg'
import Image from 'next/image'
// Import the openaiAction function
import { openaiAction, openaiAction2, openaiAction3 } from '@/utils/actions'
import { Calendar, IndianRupee, Link } from 'lucide-react'
import { GlobeDemo } from './_components/Globe'

const Page = () => {
  const [requirements, setRequirements] = useState({
    "proposal_title": "",
    "details": "",
    "price": "",
    "delivery_time": "",
    "skills": ""
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const userInput = e.target[0].value
    console.log(userInput)
    // Call the openaiAction function and handle the response
    const response = await openaiAction3(userInput)
    console.log(response)
    // Update the state with the response
    setRequirements(response)


  }

  return (
    <div className='flex h-screen bg-white text-black w-full'>

      <div className='w-1/3 justify-center items-start flex flex-col gap-5 '>

     
      {
        requirements.proposal_title === "" ?
          (
              <>
                <h1 className='text-3xl font-medium'>Hi!</h1>
                {/* Display the proposal_title from the state */}
                <p>{requirements.proposal_title}</p>
                <form onSubmit={handleSubmit} className='flex items-center justify-center'>
                  <input type="text" placeholder='tell us your requirement?' className='text-black text-3xl outline-0 focus:outline-0' />
                  <button type='submit' className=' text-black text-4xl p-3'>→</button>
                </form>
           
            
            </>)
          :
          (

            <>
              <div className='w-full justify-center items-start flex flex-col gap-5 px-20 font-medium text-xl'>
                <p className='font-bold text-4xl'>{requirements.proposal_title}</p>
                <p>{requirements.details}</p>
                <p className='font-medium flex gap-4'><span className='font-bold '> Timeline: </span>  {requirements.delivery_time}</p>
                <p className='font-medium flex gap-4'><span className='font-bold '>Price: </span>  {requirements.price}</p>
                <p className='font-medium flex gap-4'><span className='font-bold '>Skils: </span>  {requirements.skills}</p>

<div className='flex  gap-4 mt-4'>

                <button className='bg-[#020] text-white p-3 rounded-lg'>Find Freelancer Packages</button>
                <button className='bg-[#020] text-white p-3 rounded-lg'>Post a Project</button>
</div>

              </div>
            
            </>
          )
      }
       </div>

<div className=" w-2/3 bg-cover bg-center" >
               <GlobeDemo />
              </div>
    </div>
  )
}

export default Page