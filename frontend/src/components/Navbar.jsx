import React from 'react'
import {Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className=''>
<div className='flex  justify-center'>
<h1 className='text-3xl mt-48 font-semibold bg-orange-400 py-4 px-8  rounded-lg'>Project Based on Data</h1>
<ul className='mt-48 text-2xl bg-slate-200 cursor-pointer p-9 rounded-lg'>
    
    <Link to="/login"><li className='mb-8  items-center'> Customer Login</li></Link>
    <Link to="/login"><li>Admin Login</li></Link>
    <Link to="/admindata"><li>Admin Data</li></Link>
</ul>
</div>

    </div>
  )
}

export default Navbar