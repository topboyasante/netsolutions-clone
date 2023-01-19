import React from 'react'
import DisclosureComponent from './DisclosureComponent'

function Disclosures() {
  return (
    <main className='w-screen h-full p-5'>
        <section className='max-w-[1700px] mx-auto'>
            <section className='flex flex-col lg:flex-row justify-between items-center p-5'>
                <h1 className='text-3xl lg:text-5xl lg:w-[50%]'>Software, App, and Website Development Agency Services</h1>
                
                <section className='lg:w-[50%] self-center p-3'>
                    <DisclosureComponent title={'Experience Design'}
                    content={`Turn your company’s UX into your X-factor with the Net Solutions experience design process. 
                    Our people-first philosophy results in finished products that strike the perfect balance of emotion and function, leaving your customers to experience more rewarding interactions with your products and services.

                    Each experience design project is unique. Regardless of your goals and desires for the finished product, you can rest easy knowing Net Solutions will deliver.
                    `}/>
                    <br />
                    <DisclosureComponent title={'Digital Commerce'}
                    content={`Elevate the nature of your eCommerce store beyond simply being responsive. Net Solutions can help you design a platform to keep your customers engaged and anticipate their needs.

                    You only have seconds to gain your customers’ attention. Leverage our team’s eCommerce expertise to win the hearts, minds, and wallets of your store’s visitors.
                    `}/>
                    <br />
                    <DisclosureComponent title={'Product Development'}
                    content={`Net Solutions is a premier website development agency that can guide you through your product's entire development life cycle. 
                    Our goal is to leverage cutting-edge technology to provide you with engaging, fulfilling digital products for your customers. 
                    Regardless of the size of your business, we can deliver solutions to help you rejuvenate your existing digital presence.`}/>
                    <br />
                    <DisclosureComponent title={'Digital Experience Platforms'}
                    content={`To survive in today’s business world, you need to grab your audience’s attention on mobile. Net Solutions offers first-class app development agency services to do just that.

                    Our team factors your business goals and users’ desires into building a dynamic pathway to bridge the gap between you and your audience. The results are simple, powerful, and elegant enough to use while still responding to the needs and challenges of your customers.
                    `}/>
                    <br />
                    <DisclosureComponent title={'Data Analytics'}
                    content={`Part of premier web development services is mastering the art of data analytics. Any software development agency can design a platform once and hand it off to you. However, they’re missing out on the gold mine of information to be found by analyzing your data.

                    Net Solutions can analyze your data through a lens of design thinking to create new and improved ways to satisfy and retain your customers. 
                    Feel empowered to monitor your company’s key metrics, discover patterns, and access new levels of insight that allow you to boost revenue by optimizing the user experience.`}/>
                    <br />
                    <DisclosureComponent title={'Digital Transformation'}
                    content={`Most companies struggle to design digital experiences that embrace future trends. The digital landscape is constantly changing, and businesses need to adapt along with it to best serve their customers.

                    As a digital transformation agency, Net Solutions offers enterprise mobile app development services so your digital experiences can grow along with your business. 
                    Your company’s future is only as big as your ideas, and Net Solutions leaves you free to evolve, modernize, and move toward them with confidence.`}/>
                </section>
            </section>
        </section>
    </main>
  )
}

export default Disclosures