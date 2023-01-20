import React from 'react'
import ContactForm from '../components/Contact/ContactForm'
import ContactLinks from '../components/Contact/ContactLinks'

function Contact() {
  return (
    <main className='w-screen h-screen pt-[10vh]'>
        <section className='max-w-[1600px] mx-auto flex flex-col lg:flex-row justify-around items-center'>
            <ContactForm/>
            <div className='hidden lg:block w-[1px] lg:h-[80vh] bg-gray-200'></div>
            <ContactLinks/>
        </section>
    </main>
  )
}

export default Contact