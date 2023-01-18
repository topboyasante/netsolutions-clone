import React from 'react'

function Hero() {
  return (
    <main className='pt-[7vh] w-screen h-screen'>
      <section className='max-w-[1600px] mx-auto h-full'>
          <section className='flex justify-between items-center h-full'>
              {/* text */}
              <div className='w-[50%]'>
                <h1 className='text-6xl my-5 font-bold'>We design, develop and modernize software applications.</h1>
                <p className='text-3xl font-extralight my-10'>Engage Net Solutions to build a remote, 
                  Agile software development team to co-create or update your digital product with the latest web, 
                  mobile and cloud technologies.
                </p>
                {/* buttons */}
                <div className='flex gap-5 my-2'>
                  <button className='border-2 border-[#f13625] px-4 py-2 text-[#f13625] hover:bg-[#f13625] hover:text-white ease duration-500'>Explore Services</button>
                  <button className='border-2 border-[#f13625] px-4 py-2 text-[#f13625] hover:bg-[#f13625] hover:text-white ease duration-500'>View Client Success Stories</button>
                </div>
                {/* reviews */}
                <section className='flex justify-between items-center mt-[50px]'>
                  <img src="https://www.netsolutions.com/assets/images/Clutch.svg" alt="clutch" />
                  <img src ="https://www.netsolutions.com/assets/images/g-2.svg" alt='g2'/>
                  <img src="https://www.netsolutions.com/assets/images/good-firms.svg" alt="good-firms" />
                  <img src="https://www.netsolutions.com/assets/images/upcity.svg" alt="upcity" />
                </section>
              </div>

              {/* form */}
              <section className='w-[35%] h-[80%] bg-[#f9d94e] p-[3em] shadow-2xl flex flex-col justify-center items-center'>
                  <h1 className='font-extrabold text-4xl w-[80%]'>Have A Project in Mind? Chat With Our Experts.</h1>
                  <form className='w-full my-5'>
                    <input type="text"  placeholder='NAME*' className='w-full px-2 py-4 my-2'/>
                    <input type="email"  placeholder='EMAIL*' className='w-full px-2 py-4 my-2'/>

                    <div className='w-full flex items-center gap-3'>
                      <select name="country-code" id="country-code" className='w-[30%] px-2 py-4'>
                        <optgroup>
                          <option value="+233">+233</option>
                        </optgroup>
                      </select>
                      <input type="email" className='w-[70%] px-2 py-4 my-2'/>
                    </div>

                    <textarea name="message" rows={4} className='w-full resize-none my-2'></textarea>

                    <button className='bg-[#f13625] text-white w-full px-4 py-2 text-3xl font-bold shadow-xl my-5'>Get in Touch</button>
                  </form>
              </section>
          </section>
      </section>
    </main>
  )
}

export default Hero