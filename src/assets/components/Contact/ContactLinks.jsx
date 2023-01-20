import React from 'react'

function ContactLinks() {
  return (
    <main className='w-full lg:w-[30%] p-5'>
        <h1 className='text-4xl'>Hate Filling Out Forms?</h1>
        <p className='text-xl my-2'>Email Us.</p>

        <section className='flex flex-col gap-10 my-5'>
            <section>
                <h1 className='text-2xl'>Request A Quote</h1>
                <p className='text-xl text-[#f8a60a]'>sales@axon.com</p>
            </section>

            <section>
                <h1 className='text-2xl'>Careers</h1>
                <p className='text-xl text-[#f8a60a]'>careers@axon.com</p>
            </section>

            <section>
                <h1 className='text-2xl'>Reference Checks</h1>
                <p className='text-xl text-[#f8a60a]'>hr@axon.com</p>
            </section>

            <section>
                <h1 className='text-2xl'>Other Info</h1>
                <p className='text-xl text-[#f8a60a]'>info@axon.com</p>
            </section>
        </section>

    </main>
  )
}

export default ContactLinks