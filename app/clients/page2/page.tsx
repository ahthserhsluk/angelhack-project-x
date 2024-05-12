'use client';

import { useCompletion } from 'ai/react';

export default function Page() {
  const { completion, input, handleInputChange, handleSubmit,  } = useCompletion({
    api: '/api/completion',
  });

  return (
    <div className='h-screen bg-white text-black w-full flex'>
    <div className='w-1/3 justify-center items-start flex flex-col gap-5 px-20'>
      <h1 className='text-3xl font-medium'>Hi!</h1>


    <form onSubmit={handleSubmit}>
      <input
        name="prompt"
        value={input}
        onChange={handleInputChange}
        id="input"
        placeholder='tell us your requirement?'
        className='text-black text-3xl outline-0 focus:outline-0'
      />
     <button type='submit' className=' text-black text-4xl p-3'>→</button>
      <div>{completion}</div>
    </form>
    </div>
    </div>

  );
}