
import Woman from '../assets/Woman.png'
function ExtraInfo() {
  return (
    <>
        <section className='py-20 px-8 flex flex-wrap justify-center items-center gap-7 max-sm:relative'>
        <h1 className='text-5xl font-bold hidden max-sm:block'>Some more information about your business</h1>
            <img src={Woman} alt="" />
            <div className='flex flex-col w-[33rem] gap-10'>
                <h1 className='text-5xl font-bold max-sm:hidden'>Some more information about your business</h1>
                <p className='text-xl'>Share a little about yourself as a business owner, or maybe describe what makes your product or service unique. Give visitors one more reason to care about your offer and want to buy from you.</p>
            </div>
        </section>
        
    </>
  )
}

export default ExtraInfo