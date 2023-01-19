import React from 'react'
import ContactForm from '../components/Contact/ContactForm'

function Contact() {
  return (
    <main className='w-screen h-screen pt-[10vh]'>
        <section className='max-w-[1000px] mx-auto'>
            <ContactForm/>
        </section>
    </main>
  )
}

export default Contact