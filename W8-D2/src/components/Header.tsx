import React from 'react'
import Background from '../assets/Screen_Shot_2023-11-26_at_10.49.03_AM_cleanup.png'
import Button from './Button'
function Header() {
  return (
    <>
        <div style={{backgroundImage: `url(${Background})`}} className="border w-screen max-sm:h-[30rem] h-[25rem] bg-cover bg-no-repeat mb-5 text-white">
            <div className='w-1/2 max-sm:w-full flex max-sm:text-center  max-sm:items-center flex-col  p-16 gap-8 max-sm:p-2 '>
                <p className='text-3xl'>FreshGoods</p>
                <p className='text-4xl'>Concisely describe your product or service</p>
                <p className='text-base'>No need to get clever. Tell people exactly what you're offering, then use this space to communicate your key value proposition</p>
                <Button text='ORDER NOW'/>
            </div>
        </div>
    </>
  )
}

export default Header