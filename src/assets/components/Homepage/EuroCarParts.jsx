import React from 'react'

function EuroCarParts() {
  return (
    <main className='w-screen h-screen'>
    <section className='max-w-[1600px] mx-auto h-full py-5'>
      <h1 className='text-6xl font-extrabold'>Expand & Evolve Your Business With Our Transformative Platforms</h1>
      <section className='relative bg-[url("https://www.netsolutions.com/assets/images/net-solutions-man-working-garage-automobile.webp")]
      w-full h-[80%] bg-no-repeat bg-cover my-5'>

          <div className="absolute bg-white bottom-0 left-[5em] w-[40%] p-[3em]">
            <img src="https://www.netsolutions.com/assets/images/net-solutions-client-euro-car-parts-logo.svg" alt="hubpix"/>
            <p className='font-extralight text-2xl my-5'>Learn how we built a unified digital commerce platform for Euro Car Parts, 
            the UK's largest eCommerce car parts supplier. Through our efforts, they were able to streamline their backend operations, 
            speed up their supply chain, and support customer loyalty across multiple channels.
            </p>
            <button className='border-2 border-[#f13625] px-4 py-2 text-[#f13625] hover:bg-[#f13625] hover:text-white ease duration-500 font-normal'>
              Read the Success Story</button>
          </div>
      </section>
    </section>
  </main>
  )
}

export default EuroCarParts