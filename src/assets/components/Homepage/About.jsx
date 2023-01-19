import React from 'react'
import Button from '../Reusables/Button'

function About() {
  return (
    <main className='w-screen h-[115vh] lg:h-[160vh] lg:py-5 lg:relative'>
        <section className='max-w-[1600px] mx-auto h-full lg:relative'>

           <section className='w-full lg:relative'>
                <img src="http://axoninfosystems.com/v4/wp-content/uploads/2019/11/ourcompany-1.jpg" alt="netsolutions"
                className='h-full'/>
                <section className='flex flex-col lg:flex-row gap-5 lg:h-full'>
                      {/* Yellow Box */}
                <section className='bg-[#f9d94e] lg:w-[50%] lg:absolute lg:bottom-[-15em] p-5 lg:p-[5em]'>
                    <h1 className='text-lg lg:text-xl tracking-widest font-extrabold'>CREATE SOFTWARE AND APPS TO MEET YOUR CUSTOMER NEEDS</h1>
                    <br />
                    <p className='text-3xl lg:text-5xl font-extralight'>Work with a software company that develops products & platforms that elevate your customers’ 
                        experience, earn their loyalty & grow your business.</p>
                </section>
                {/* Text */}
                <section className='lg:absolute lg:bottom-[-18em] lg:right-0 lg:w-[45%] lg:text-2xl font-extralight p-5 lg:p-10'>
                    <p>Net Solutions is transforming the identity of the traditional software company. 
                    We’re taking the conventional developer “design and build” model and flipping it on its head.</p>
                    <br />
                    <p>Few custom software development companies offer an innovative, end-to-end agile development process. 
                    Our transformative solutions excite users and drive revenue while reducing your development headaches.</p>
                    <br />
                    <Button text={`Learn About Our Capabilities & Culture`}/>
                </section>
                </section>
           </section>

        </section>
    </main>
  )
}

export default About