import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800 text-white'>
        <div className="mycontainer flex justify-between items-center px-4 h-15 py-5">
          <div className="logo font-bold text-xl">
            <span className="text-green-700">&lt;</span>
            Password 
            <span className="text-green-700"> Manager /&gt;</span>
          </div>
          <ul>
              <li className='flex gap-6'>
                  <a className='hover:font-bold' href="#">Home</a>
                  <a className='hover:font-bold' href="#">About</a>
                  <a className='hover:font-bold' href="#">Contact</a>
              </li>
          </ul>
          <button className='text-white bg-green-700 rounded-full flex justify-between items-center ring-white ring-1'>
            <img className='w-7' src="icons/github.png" alt="Github" />
            <span className='font-bold px-2'>Github</span>
          </button>
        </div>
    </nav>
  )
}

export default Navbar
