import React from 'react'
import Button from '../Reusables/Button'

function CXODashboard() {
  return (
    <main className='w-screen lg:h-screen'>
    <section className='max-w-[1600px] mx-auto h-full py-5'>
      <h1 className='text-3xl lg:text-6xl font-extrabold p-5'>Leverage Our Data-Driven Approach to Separate Yourself From Your Competition</h1>
      <section className='lg:relative lg:bg-[url("https://www.netsolutions.com/assets/images/net-solutions-analytical-graphs-tablet-devices.webp")]
      w-full h-[80%] bg-no-repeat bg-cover my-5'>
          <img src="https://www.netsolutions.com/assets/images/net-solutions-analytical-graphs-tablet-devices.webp" alt="hubpix" className='block lg:hidden'/>
          <div className="lg:absolute bg-white bottom-0 left-[5em] lg:w-[40%] p-[3em]">
            <img src="https://ugmedicalcentre.org/front/images/ugmclogo.jpg" alt="hubpix" className='w-[200px]'/>
            <p className='font-extralight lg:text-2xl my-5'>Here at Net Solutions, we practice what we preach. 
            We created a one-of-a-kind mobile monitoring platform that provides a 360° view of our own software company that provides our expert CXOs with cutting-edge data analytics and insights at the touch of a button. 
            Our expert team saw this project to the finish line, through multiple iterations, to ensure the best possible results internally and for clients.
            </p>
            <Button text={`Read the Success Story`}/>
          </div>
      </section>
    </section>
  </main>
  )
}

export default CXODashboard