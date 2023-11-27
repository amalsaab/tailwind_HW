import React from 'react'

function Benefit(props: any) {
  return (
    <>
        <div className='text-center flex flex-col w-72 items-center gap-2'>
            <img className='h-20 ' src={props.src} alt="" />
            <p className='text-2xl'>{props.title}</p>
            <p className=''>{props.text}</p>
        </div>
    </>
  )
}

export default Benefit