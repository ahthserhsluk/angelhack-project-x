import React from 'react'
import SingleProject from '../_components/SingleProject'
import ProposalList from '../_components/SIngleProposal'

const Page = () => {
  return (
    <main className='bg-white h-screen p-20'>
        <h2 className='font-bold text-6xl text-black pb-5'>Proposals </h2>
<ProposalList />

    </main>
  )
}

export default Page