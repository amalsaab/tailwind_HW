import React from 'react'
import Benefit from './Benefit'
function Services() {
  return (
    <>
        <div className='flex flex-col justify-center items-center gap-10 '>
            <h1 className='text-3xl text-center'>Here are some of the benifits of your offer</h1>
            <div className='text-center'>
            <p>Explain what makes your product or service great.</p>
            <p>Talk about features in a way that highlights the real value people get out of them.</p>
            </div>
            <div className='flex gap-5 max-sm:flex-col'>
                <Benefit src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/b41bc87d-freshgoods-benefit2-icon_1000000000000000000028.png"
                title="Benefit 1" text="For example, restaurants and bakeries could outline the health benefits of their all-natural ingredients." />
                <Benefit src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/3a18a275-freshgoods-benefit1-icon_1000000000000000000028.png"
                title="Benefit 2" text="Florists and other small retailers might use this space to describe how their products make delightful, one-of-a-kind gifts." />
                <Benefit src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/6622ad60-freshgoods-benefit3-icon_1000000000000000000028.png"
                title="Benefit 3" text="You could also add buttons to this section and share links to other products or available delivery methods." />
            </div>
        </div>
    </>
  )
}

export default Services