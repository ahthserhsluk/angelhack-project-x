import React from 'react'
import SingleProject from '../_components/SingleProject'
import ProposalList from '../_components/SIngleProposal'

const Page = () => {
  return (
    <main className='bg-white h-screen p-10 flex justify-center items-center flex-col gap-20'>
        <div className="bg-black h-64 w-full mt-1 rounded-3xl text-white flex p-10  justify-between items-center">
       
         
       <h1 className="font-medium text-6xl ">Proposal Summary</h1>
       {/* <p>project list</p> */}
    

   
 
   
 </div>
<ProposalList />

    </main>
  )
}

export default Page