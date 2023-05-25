import React from 'react'

function ConsultantDetailsCard({description, title, date, time}) {
  return (
    <>
    <div className=' flex-col px-9 w-full'>
        <div className='flex justify-center items-center mt-14'>
        </div>
        <h1 className='font-bold text-xl mt-9'>
        {title}
        </h1>
        <div className="h-[2px] w-full bg-[#D1D1D1] my-2"></div>
    </div>
        <h5 className='text-[#8B8B8B] ml-9'>{date} | {time}</h5>
        <p className='mt-6 mx-9 text-justify'>
        {description}
        </p>
    </>
  )
}

export default ConsultantDetailsCard