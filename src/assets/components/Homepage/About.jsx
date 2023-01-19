import React from 'react'
import Button from '../Reusables/Button'

function About() {
  return (
    <main className='w-screen h-full xl:h-[80vh] xl:py-5 xl:relative'>
        <section className='max-w-[1600px] mx-auto h-full xl:relative'>

           <section className='w-full xl:relative flex flex-col justify-center items-center'>
                <img src="http://axoninfosystems.com/v4/wp-content/uploads/2019/11/ourcompany-1.jpg" alt="netsolutions"
                className='h-full'/>
                <section className='flex flex-col xl:flex-row gap-5 xl:h-full'>
                      {/* Yellow Box */}
                <section className='bg-[#f9d94e] xl:w-[50%] xl:absolute xl:bottom-[-15em] left-0 p-5 xl:p-[5em]'>
                    <h1 className='text-xl xl:text-xl tracking-widest font-extrabold'>CREATE SOFTWARE AND APPS TO MEET YOUR CUSTOMER NEEDS</h1>
                    <br />
                    <p className='text-3xl xl:text-5xl font-extralight'>Work with a software company that develops products & platforms that elevate your customers’ 
                        experience, earn their loyalty & grow your business.</p>
                </section>
                {/* Text */}
                <section className='xl:absolute xl:bottom-[-18em] xl:right-0 xl:w-[45%] xl:text-2xl font-extralight p-5 xl:p-10'>
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