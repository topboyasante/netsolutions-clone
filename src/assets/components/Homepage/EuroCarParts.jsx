import React from 'react'
import Button from '../Reusables/Button'

function EuroCarParts() {
  return (
    <main className='w-screen xl:h-screen'>
    <section className='max-w-[1600px] mx-auto h-full py-5'>
      <h1 className='text-3xl xl:text-6xl font-extrabold p-5'>Expand & Evolve Your Business With Our Transformative Platforms</h1>
      <section className='xl:relative xl:bg-[url("https://www.netsolutions.com/assets/images/net-solutions-man-working-garage-automobile.webp")]
      w-full h-[80%] bg-no-repeat bg-cover my-5'>
          <img src="https://www.netsolutions.com/assets/images/net-solutions-man-working-garage-automobile.webp" alt="hubpix" className='block xl:hidden'/>
          <div className="xl:absolute bg-white bottom-0 left-[5em] xl:w-[40%] p-[3em]">
            <img src="http://apanews.net/storage/app/uploads/public/5fa/2f2/fe2/5fa2f2fe2380c576123921.png" alt="hubpix" className='w-[100px]'/>
            <p className='font-extralight xl:text-xl my-5'>Learn how we built a unified digital commerce platform for Euro Car Parts, 
            the UK's largest eCommerce car parts supplier. Through our efforts, they were able to streamline their backend operations, 
            speed up their supply chain, and support customer loyalty across multiple channels.
            </p>
            <Button text={`Read the Success Story`}/>
          </div>
      </section>
    </section>
  </main>
  )
}

export default EuroCarParts