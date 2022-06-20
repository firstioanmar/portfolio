import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {FiMenu, FiX, FiGithub, FiLinkedin, FiMail} from 'react-icons/fi'

const Navbar = () => {

    const links = [
        {
            id: 1,
            link: 'about'
        },
        {
            id: 2,
            link: 'portfolio'
        },
        {
            id: 3,
            link: 'experience'
        },
        {
            id: 4,
            link: 'contact'
        },
    ];

    const [navigation,setNavigation] = useState(false)
    const [pageScroll,setpageScroll] = useState(false)

    useEffect(() => {
        const sub = window.addEventListener('scroll', ()=> setpageScroll(window.scrollY >=90))

        return sub;
    })

  return (
    <div className={`w-full h-20 z-10 fixed bg-white text-black duration-100 ease-in ${pageScroll &&  'border-b-2  border-b-teal-700'} `}>
        <div className='flex justify-between items-center w-full h-full max-w-screen-xl mx-auto p-4'>
            <Link href='/#about'>
                <h1  className='text-3xl lg:text4xl font-bold uppercase underline underline-offset-4 tracking-wider cursor-pointer'>
                    Firstio Anmar
                </h1>
            </Link>

            <div>
                <ul className='hidden md:flex'>
                    {
                        links.map(({id, link}) => (
                            <Link key={id} href={`/#${link}`}>
                                <li className='ml-10 text-sm uppercase cursor-pointer duration-200 ease-out hover:scale-105 hover:text-teal-700 tracking-wider'>
                                    {link}
                                </li>
                            </Link>
                        ))
                    }
                </ul>
                {!navigation && (
                    <div className='md:hidden' onClick={() => setNavigation(true)}>
                        <FiMenu size={30}/>
                    </div>
                )}
            </div>
        </div>
        <div className={navigation ? 'md:hidden fixed left-0 top-0 w-full h-full bg-black/70 backdrop:blur' : ''}>
            <div className={navigation ? 'fixed left-0 top-0 w-4/5 h-full bg-gradient-to-r from-teal-700 to-green-800 text-white p-10 ease-in duration-500' : 'fixed top-0 left-[-100%] ease-in duration-500'}>
                <div>
                    <div className='flex w-full items-center justify-between'>
                        <Link href='/#about'>
                            <h1 onClick={()=>setNavigation(false)} className='text-1xl lg:text4xl font-bold uppercase underline underline-offset-4 tracking-wider cursor-pointer'>
                                Firstio Anmar
                            </h1>
                        </Link>
                        <div className='p-3 cursor-pointer' onClick={() => setNavigation(false)}>
                            <FiX size={30}/>
                        </div>
                    </div>
                </div>
                <div className='mt-24 flex flex-col h-fit gap-20'>
                    <ul className='uppercase'>
                        {
                            links.map(({id, link}) => (
                                <Link key={id} href={`/#${link}`}>
                                    <li onClick={()=>setNavigation(false)} className='py-4 text-2xl tracking-wider cursor-pointer'>
                                        {link}
                                    </li>
                                </Link>
                            ))
                        }
                    </ul>

                    <div>
                        <div className='grid grid-cols-3 mx-auto w-4/5 gap-10'>
                            <a href='https://github.com/firstioanmar' target='_blank' rel="noopener noreferrer">
                                <div className='flex items-center justify-center p-3 cursor-pointer duration-200 ease-out hover:scale-105 tracking-wider'>
                                    <FiGithub size={30}/>
                                </div>
                            </a>
                            <a href='https://www.linkedin.com/in/firstioanmar/' target='_blank' rel="noopener noreferrer">
                                <div className='flex items-center justify-center p-3 cursor-pointer duration-200 ease-out hover:scale-105 tracking-wider'>
                                    <FiLinkedin size={30}/>
                                </div>
                            </a>
                            <a href='mailto:firstioanmar@gmail.com' target='_blank' rel="noopener noreferrer">
                                <div className='flex items-center justify-center p-3 cursor-pointer duration-200 ease-out hover:scale-105 tracking-wider'>
                                    <FiMail size={30}/>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Navbar