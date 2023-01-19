import React from 'react'
import InsightCard from './InsightCard'

function Insights() {
  return (
    <main className='w-screen h-full'>
        <section className='max-w-[1600px] mx-auto'>
            <h1 className='text-6xl font-extrabold'>Insights</h1>
            <section className='p-5 grid lg:grid-cols-3 place-items-center'>
                <InsightCard
                img={`https://www.netsolutions.com/insights/wp-content/uploads/2019/07/essential-features-for-building-a-ride-sharing-app.jpg`}
                date={`12th December, 2023`}
                genre={`mobile app development, product development`}
                title={`How to Build a Ride-Sharing App from Scratch in 2023?`}
                />
                <InsightCard
                img={`https://www.netsolutions.com/insights/wp-content/uploads/2023/01/how-to-make-distributed-agile-teams-work-a-project-manager-guide.png`}
                date={`12th December, 2023`}
                genre={`agile development, product development`}
                title={`How to Build a Ride-Sharing App from Scratch in 2023?`}
                />
                <InsightCard
                img={`https://www.netsolutions.com/insights/wp-content/uploads/2023/01/CakePHP.png`}
                date={`12th December, 2023`}
                genre={`product development, web development`}
                title={`How to Build a Ride-Sharing App from Scratch in 2023?`}
                />
            </section>

            <section>
                <h1 className="text-center text-4xl font-extralight w-[40%] mx-auto">
                </h1>
            </section>
        </section>
    </main>
  )
}

export default Insights