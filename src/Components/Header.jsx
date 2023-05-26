import React from 'react';
import LogoLightPng from '../Assets/LogoLight.png'
import LogoDarkPng from '../Assets/LogoDark.png'
import Profile from '../Assets/Profile.png'
import {Button} from "@geist-ui/core"
import { useNavigate } from 'react-router-dom';

function Header() {
    const role = localStorage.getItem('role');
    
    const navigate = useNavigate();
    const handleNavigate = () => {
        if (role === '') {
            navigate('/signin')
        }
        else {
            localStorage.clear();
            navigate('/')
        }
    }
  return (
    <div className={role === '' ? 'justify-between flex flex-row px-12' : 'justify-between flex flex-row px-12 bg-black text-white'}>
        <div className='w-1/4'>
            {role === '' ? (
            <img src={LogoLightPng} alt='Logo'/>
            ) : (
                <img src={LogoDarkPng} alt='Logo'/>
            )}
        </div>
        <div>
            {role === 'admin' ? 
            (<ul className='flex-row flex'>
            <li className='mr-20 font-bold mt-5'>Dashboard</li>
            <li className='mr-20 font-bold mt-5'>Articles</li>
            <li className='mr-20 font-bold mt-5'>Announcement</li>
            <li className='mr-20 font-bold mt-5'>Account</li>
        </ul>) : role === 'client' ? (<ul className='flex-row flex'>
                <li className='mr-20 font-bold mt-5'>Home</li>
                <li className='mr-20 font-bold mt-5'>Messages</li>
                <li className='mr-20 font-bold mt-5'>Account</li>
            </ul>)
            : role === 'consultant' ? (<ul className='flex-row flex'>
            <li className='mr-20 font-bold mt-5'>Home</li>
            <li className='mr-20 font-bold mt-5'>Messages</li>
            <li className='mr-20 font-bold mt-5'>Articles</li>
            <li className='mr-20 font-bold mt-5'>Account</li>
        </ul>) :
                (<ul className='flex-row flex'>
                <li className='mr-20 font-bold mt-5'>Articles</li>
                <li className='mr-20 font-bold mt-5'>Consultants</li>
                <li className='mr-20 font-bold mt-5'>FAQ</li>
            </ul>) }
        </div>
        <div className='flex-row flex'>
            <div className='mt-3'>
                <Button onClick={()=> handleNavigate()} auto type="secondary" className=''>{role === '' ? 'SignIn' : 'LogOut'}</Button>
            </div>
            <div className='mt-3 ml-5'>
                {role === '' ? <Button type="secondary" ghost auto scale={0.9}>SignUp</Button> : null}
            </div>
            {role !== '' ? (<img src={Profile} alt='Profile' className='w-10 h-10 mt-3'/>) : null}
        </div>
    </div>
  )
}

export default Header