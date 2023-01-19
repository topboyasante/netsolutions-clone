import React from 'react'

function Navbar() {
  return (
    <nav className='fixed top-0 left-0 w-screen shadow bg-white z-[50] p-2'>
     <section className='max-w-[1600px] mx-auto flex justify-between items-center gap-5 px-5 py-8 lg:p-5 h-[7vh]'>
           {/* Logo */}
           <section>
            <p className='lg:text-4xl'>net solutions</p>
        </section>
        <button className='bg-[#f13625] text-white px-4 py-2'>Get a Free Consultation</button>
     </section>
    </nav>
  )
}

export default Navbar