import React from 'react'

function AnnouncementCard({title, date, time, onClick}) {
    const handleClick = () => {
        onClick();
    }
  return (
    <div className='px-3 my-3' onClick={handleClick}>
        <div className=''>
            <h3 className='font-bold'>
            {title}
            </h3>
            <h5 className='text-[#8B8B8B]'>{date} | {time}</h5>
        </div>
    </div>
  )
}

export default AnnouncementCard