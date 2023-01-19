import React from 'react'
import { Disclosure } from '@headlessui/react'
import {AiOutlinePlus} from 'react-icons/ai'

function DisclosureComponent({title,content}) {
  return (
    <section className='shadow rounded w-full ease duration-500 '>
         <Disclosure>
            <Disclosure.Button className={`w-full p-5`}>
                <div className='flex justify-between items-center w-full'>
                    <p className='text-3xl'>{title}</p>
                    <AiOutlinePlus size={30}/>
                </div>
            </Disclosure.Button>
            <Disclosure.Panel className={`p-5`}>
                <p className='text-3xl font-extralight'>{content}</p>
                <button className='border-2 border-[#f13625] px-4 py-2 text-[#f13625] hover:bg-[#f13625] hover:text-white ease duration-500 font-normal my-2'>
                Learn More</button>
            </Disclosure.Panel>
        </Disclosure>
    </section>
  )
}

export default DisclosureComponent