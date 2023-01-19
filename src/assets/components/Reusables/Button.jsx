import React from 'react'

function Button({text}) {
  return (
    <button className='border-2 border-[#f8a709] px-4 py-2 text-[#f8a709] hover:bg-[#f8a709] hover:text-white ease duration-500'>
        {text}
    </button>
  )
}

export default Button