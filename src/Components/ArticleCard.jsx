import React from 'react'
import Profile from '../Assets/Profile.png'

function ArticleCard() {
  return (
    <div className='px-40'>
      <div className='flex flex-row'>
      <img src={Profile} alt='Profile' className='w-10 h-10 mt-3'/>
      <div className='flex, flex-col'>
      <h2 className='font-bold mt-3 ml-3'>Sasindu Nanayakkara</h2>
      <h6 className='text-sm ml-3'>Emergency Medicine Specialists</h6>
      </div>
      </div>
    </div>
  )
}

export default ArticleCard