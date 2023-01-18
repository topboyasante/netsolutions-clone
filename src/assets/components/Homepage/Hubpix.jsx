import React from 'react'

function Hubpix() {
  return (
    <main className='w-screen h-screen'>
      <section className='max-w-[1600px] mx-auto h-full py-5'>
        <h1 className='text-6xl font-extrabold'>Don’t Just Deliver Digital Products. Give Your Customers Digital Experiences</h1>
        <section className='relative bg-[url("https://www.netsolutions.com/assets/images/net-solutions-hubpix-convenience-store-macaroons.webp")]
        w-full h-[80%] bg-no-repeat bg-cover my-5'>

            <div className="absolute bg-white bottom-0 left-[5em] w-[40%] p-[3em]">
              <img src="https://www.netsolutions.com/assets/images/net-solutions-client-hubpix-logo.svg" alt="hubpix"/>
              <p className='font-extralight text-2xl my-5'>See how our iterative field research and ecosystem mapping for Hubpix, a connector of brands and 22K+ independent retailers, 
                resulted in a unique platform that adds value to the entire network spectrum and drives sales.
              </p>
              <button className='border-2 border-[#f13625] px-4 py-2 text-[#f13625] hover:bg-[#f13625] hover:text-white ease duration-500 font-normal'>
                Read the Success Story</button>
            </div>
        </section>
      </section>
    </main>
  )
}

export default Hubpix