
function Feature(props: {src: string, title: string, text: string}) {
  return (
    <>
        <div className='text-center flex flex-col w-96 items-center gap-4'>
            <img className='h-56 ' src={props.src} alt="" />
            <div className='w-60'>
            <p className='text-2xl font-semibold'>{props.title}</p>
            <p className=''>{props.text}</p>
            </div>
        </div>
    </>
  )
}

export default Feature