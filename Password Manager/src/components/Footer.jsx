import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='bg-slate-800 text-white flex flex-col justify-center items-center fixed bottom-0 w-full'>
        <div className="logo font-bold text-xl">
            <span className="text-green-700">&lt;</span>
            Password 
            <span className="text-green-700"> Manager / &gt;</span>
        </div>

        <div className='flex'> Created with <img className='w-10' src="icons/heart.png" alt="" /> by Aayush
        </div>
    </div>
    </>
  )
}

export default Footer
