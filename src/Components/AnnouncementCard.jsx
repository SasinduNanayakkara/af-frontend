import React from 'react'

function AnnouncementCard({title, date, time, onClick, isSelected }) {
    const handleClick = () => {
        onClick();
    }
  return (
    <div className={`${ isSelected ? "bg-[#dfdede] rounded-lg pt-2 pb-2 pl-2 w-[26rem]" : ""} hover:bg-[#dfdede] cursor-pointer`} onClick={handleClick}>
        <div className=''>
            <h3 className='font-bold'>
            {title}
            </h3>
            <h5 className='text-[#8B8B8B]'>{date}</h5>
        </div>
    </div>
  )
}

export default AnnouncementCard