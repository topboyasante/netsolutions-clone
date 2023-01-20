import React, { useEffect, useState } from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-router-dom'

function Navbar() {
  const [shadow,setShadow] = useState(false)

  useEffect(()=>{
    const handleShadow = ()=>{
      if(window.scrollY>=90){
          setShadow(true)
      }
      else{
          setShadow(false)
      }
  }
  window.addEventListener('scroll',handleShadow)
  },[])

  return (
    <nav className={shadow?'fixed top-0 left-0 w-screen shadow bg-white z-[50] p-2 ease duration-500':'fixed top-0 left-0 w-screen bg-white z-[50] p-2 ease duration-500'}>
     <section className='max-w-[1600px] mx-auto flex justify-between items-center gap-5 px-5 py-8 lg:p-5 h-[7vh]'>
           {/* Logo */}
           <Link to={`/`}>
            <img src="http://axoninfosystems.com/v4/wp-content/uploads/2018/07/axon-logo.png" alt="logo" className='w-[200px]' />
          </Link>
          <section className='flex items-center gap-5'>
            <button className='bg-[#f8a60a] text-white px-4 py-2'>Get a Free Consultation</button>
            <AiOutlineMenu size={40}/>
          </section>
     </section>
    </nav>
  )
}

export default Navbar