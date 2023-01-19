import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Reusables/Button'

function ContactLink() {
  return (
    <main className='w-screen h-[30vh] flex flex-col justify-center items-center'>
        <section className='max-w-[1600px] mx-auto flex flex-col justify-center items-center gap-10'>
                <div className='text-center'>
                    <h1 className='text-3xl font-extralight'>
                    Got a Software or App Development Project in Mind?
                    </h1>
                    <h1 className='text-3xl font-extralight'>
                        Get Started Now.
                    </h1>
                </div>
                <Link to={`contact`}>
                <Button text={`Let's Talk`}/>
                </Link>
        </section>
    </main>
  )
}

export default ContactLink