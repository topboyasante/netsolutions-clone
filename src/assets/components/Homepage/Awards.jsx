import React from 'react'

function Awards() {
  return (
    <main className='w-screen lg:h-[50vh]'>
        <section className='max-w-[1600px] mx-auto '>
            <h1 className='text-5xl text-center lg:text-left font-extrabold'>Awards & Recognitions</h1>
            <section className='grid lg:grid-cols-4 p-10 place-items-center gap-10'>
                <img src="https://www.netsolutions.com/assets/images/net-solutions-awards-recognition-forrester-logo.svg" alt="forrester"/>
                <img src="https://www.netsolutions.com/assets/images/net-solutions-awards-recognition-gartner-logo.svg" alt="gartner"/>
                <img src="https://www.netsolutions.com/assets/images/net-solutions-awards-recognition-clutch-logo.svg" alt="clutch"/>
                <img src="https://www.netsolutions.com/assets/images/net-solutions-awards-recognition-goodfirms-logo.svg" alt="goodfirms"/>
                <img src="https://www.netsolutions.com/assets/images/net-solutions-awards-recognition-brandon-hall-group-logo.webp" alt="brandon hall"/>
                <img src="https://www.netsolutions.com/assets/images/net-solutions-awards-recognition-w3-logo.svg" alt="w3"/>
                <img src="https://www.netsolutions.com/assets/images/net-solutions-awards-recognition-it-firms-logo.webp" alt="it firms"/>
                <img src="https://www.netsolutions.com/assets/images/net-solutions-awards-recognition-adobe-logo.svg" alt="adobe"/>
            </section>
        </section>
    </main>
  )
}

export default Awards