"use client"
import { StateContext } from '@/context/context'
import React, { useContext } from 'react'

const Page = () => {
  const {context, setContext} = useContext(StateContext)
  console.log(context)
  return (
    <div>Page</div>
  )
}

export default Page