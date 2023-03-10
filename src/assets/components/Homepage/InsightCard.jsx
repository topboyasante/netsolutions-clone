import React from 'react'
import Button from '../Reusables/Button'

function InsightCard({img,date,genre,title}) {
  return (
    <main className='shadow xl:w-[25vw] h-[580px]'>
        <img src={img} alt={title} />
        <section className='p-3'>
            <div className='flex gap-5 items-center'>
                <p className='bg-[#f8a709] font-extralight text-sm px-4 py-2'>BLOG</p>
                <p className='px-4 py-2 bg-[#F4F9FF]'>{date}</p>
            </div>
            <p className='text-[#f8a709] uppercase tracking-widest text-sm my-5'>{genre}</p>
            <h1 className='text-2xl hover:text-[#f8a709] cursor-pointer ease duration-500'>{title}</h1>
            <br />
               <Button text={`Read Blog`}/>        
        </section>
    </main>
  )
}

export default InsightCard