import React from 'react'
import InsightCard from './InsightCard'

function Insights() {
  return (
    <main className='w-screen h-full'>
        <section className='max-w-[1600px] mx-auto p-5'>
            <h1 className='text-6xl font-extrabold'>Insights</h1>
            <section className='p-5 grid lg:grid-cols-3 place-items-center gap-5'>
                <InsightCard
                img={`https://www.netsolutions.com/insights/wp-content/uploads/2019/07/essential-features-for-building-a-ride-sharing-app.jpg`}
                date={`12th December, 2023`}
                genre={`mobile app development, product development`}
                title={`How we Built the EC Voters Application in 2020`}
                />
                <InsightCard
                img={`https://www.netsolutions.com/insights/wp-content/uploads/2023/01/how-to-make-distributed-agile-teams-work-a-project-manager-guide.png`}
                date={`12th December, 2023`}
                genre={`agile development, product development`}
                title={`How we Built the Tax Management app for GRA`}
                />
                <InsightCard
                img={`https://www.netsolutions.com/insights/wp-content/uploads/2023/01/CakePHP.png`}
                date={`12th December, 2023`}
                genre={`product development, web development`}
                title={`How we Built the Hospital Management System for UGMS`}
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