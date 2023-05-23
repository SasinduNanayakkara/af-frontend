import React from 'react'
import LogoDark from '../Assets/LogoDark.png'
import Facebook from '../Assets/Facebook.svg'
import Instagram from '../Assets/Instergram.svg'
import LinkedIn from '../Assets/LinkedIn.svg'
import Email from '../Assets/Email.svg'

const Footer = () => {
    return (
        <footer className='bg-black text-white w-full content-center'>
            <div className="flex flex-row content-between pt-10 pb-10">
                <div className='flex flex-col pl-14 mr-56'>
                    <div>
                        <img src={LogoDark} alt='Logo' />
                    </div>
                    <p className='mt-5 text-sm w-60'>
                        A community driven consultation and information platform that helps to reduce the gap between people  who has special needs
                    </p>
                    <div className='flex flex-row mt-5'>
                        <img src={Facebook} alt='facebook' className='mr-4' />
                        <img src={LinkedIn} alt='facebook' className='mr-4' />
                        <img src={Instagram} alt='facebook' className='mr-4' />
                    </div>
                </div>
                <div className='flex flex-col mr-16'>
                    <div>
                        <h4 className='font-bold'>Useful Links</h4>
                        <div className='w-12 h-[2px] bg-[#F5A624]'></div>
                    </div>
                    <div className='mt-9 flex flex-row'>
                        <ul>
                            <li>About Us</li>
                            <li className='mt-4'>Contact Us</li>
                            <li className='mt-4'>Terms of service</li>
                            <li className='mt-4'>Support Center</li>
                        </ul>
                        <ul className='ml-10'>
                            <li>Articles</li>
                            <li className='mt-4'>Consultants</li>
                            <li className='mt-4'>Feedbacks</li>
                            <li className='mt-4'>Sponsors</li>
                        </ul>
                    </div>
                </div>
                <div className='h-48 w-[1px] mt-5 bg-white ml-20'></div>
                <div className='ml-28'>
                    <div>
                        <h4 className='font-bold'>Subscribe newsletter</h4>
                        <div className='w-12 h-[2px] bg-[#F5A624]'></div>
                    </div>
                    <p className='mt-4 text-sm'>Get the latest updates and information regarding our platform.</p>
                    <div className='mt-4 mb-4 flex flex-row'>
                        <input type='text' placeholder='Enter your email' className='w-[250px] h-[40px] bg-[#2F2E2E] px-4' />
                        <div>
                            <button className='bg-white px-3'><img src={Email} alt='email' className=' h-[40px] text-black' /></button>
                        </div>
                    </div>
                    <p className='text-sm'>Copyright © 2023, All Right Reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
