import React from 'react'
import Button from '../Reusables/Button'

function Hubpix() {
  return (
    <main className='w-screen xl:h-screen'>
      <section className='max-w-[1600px] mx-auto h-full py-5'>
        <h1 className='text-3xl xl:text-6xl font-extrabold p-5'>Don’t Just Deliver Digital Products. Give Your Customers Digital Experiences</h1>
        <section className='xl:relative xl:bg-[url("https://www.netsolutions.com/assets/images/net-solutions-hubpix-convenience-store-macaroons.webp")]
        w-full h-[80%] bg-no-repeat bg-cover my-5'>
            <img src="https://www.netsolutions.com/assets/images/net-solutions-hubpix-convenience-store-macaroons.webp" alt="hubpix" className='block xl:hidden'/>
            <div className="xl:absolute bg-white bottom-0 left-[5em] xl:w-[40%] p-[3em]">
              <img src="https://gra.gov.gh/wp-content/uploads/2020/09/GRA_primary-logo_72dpi_RGB.png" alt="hubpix" className='w-[100px]'/>
              <p className='font-extralight xl:text-xl my-5'>See how our iterative field research and ecosystem mapping for Hubpix, a connector of brands and 22K+ independent retailers, 
                resulted in a unique platform that adds value to the entire network spectrum and drives sales.
              </p>
              <Button text={`Read the Success Story`}/>
            </div>
        </section>
      </section>
    </main>
  )
}

export default Hubpix