import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import heroImage from '../public/assets/heroImage.jpg'
import { FiChevronDown, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const HomePage = () => {
  return (
    <div id='about' className='h-screen w-full '>
        <div className='max-w-screen-xl mx-auto w-full h-full flex flex-col md:flex-row justify-center items-center'>
            <div className='w-64 h-64 md:h-96 md:w-96 mx-6 overflow-hidden rounded-md'>
                <Image src={ heroImage } alt="photo"/>
            </div>
            <div className='max-w-md md:max-w-xl mx-auto mt-6 px-2'>
                <h1 className='uppercase font-bold text-2xl md:text-3xl'>Hello, I'm <span className='text-teal-700'>Firstio Daniel Anmar</span></h1>
                <p className='text-gray-600 text-xl'>
                I am a Web Developer with over 3 years of experience working in the IT industry. I am proficient in HTML/CSS, Javascript, Laravel and Tailwind. I am also competent in React JS, Next JS and SQL Language. I listen to music a lot and play video games in my free time.
                </p>

                <div className='my-6'>
                    <div className='grid grid-cols-3 mx-auto w-4/5 gap-10'>
                        <a href='https://github.com/firstioanmar' target='_blank' rel="noopener noreferrer">
                            <div className='flex items-center justify-center p-3 cursor-pointer duration-200 ease-out hover:scale-105 hover:text-teal-700 tracking-wider'>
                                <FiGithub size={30}/>
                            </div>
                        </a>
                        <a href='https://www.linkedin.com/in/firstioanmar/' target='_blank' rel="noopener noreferrer">
                            <div className='flex items-center justify-center p-3 cursor-pointer duration-200 ease-out hover:scale-105 hover:text-teal-700 tracking-wider'>
                                <FiLinkedin size={30}/>
                            </div>
                        </a>
                        <a href='mailto:firstioanmar@gmail.com' target='_blank' rel="noopener noreferrer">
                            <div className='flex items-center justify-center p-3 cursor-pointer duration-200 ease-out hover:scale-105 hover:text-teal-700 tracking-wider'>
                                <FiMail size={30}/>
                            </div>
                        </a>
                    </div>
                </div>
                <Link href='/resume.pdf' target='_blank' download={true}>
                    <div className='group flex items-center justify-center bg-teal-700 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer'>
                        Resume
                        <span className='-rotate-90 duration-75 ease-in group-hover:rotate-0'>
                            <FiChevronDown size={25}/>
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default HomePage