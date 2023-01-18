import React from 'react'

function Navbar() {
  return (
    <nav className='fixed w-screen shadow bg-white z-[50]'>
     <section className='max-w-[1600px] mx-auto flex justify-between items-center p-5 h-[7vh]'>
           {/* Logo */}
           <section>
            <p className='text-4xl'>net solutions</p>
        </section>
        <button className='bg-[#f13625] text-white px-4 py-2'>Get a Free Consultation</button>
     </section>
    </nav>
  )
}

export default Navbar