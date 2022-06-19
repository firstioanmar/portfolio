import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import heroImage from '../public/assets/heroImage.jpg'
import { FiChevronDown } from 'react-icons/fi'

const HomePage = () => {
  return (
    <div id='home' className='h-screen w-full '>
        <div className='max-w-screen-xl mx-auto w-full h-full flex flex-col md:flex-row justify-center items-center'>
            <div className='w-64 h-64 mx-auto overflow-hidden rounded-md'>
                <Image src={ heroImage } alt="photo"/>
            </div>
            <div className='max-w-md mt-6'>
                <h1 className='uppercase font-bold text-4xl'>Hello, I'm <span className='text-teal-700'>Firstio Daniel Anmar</span></h1>
                <p className='text-gray-600 text-xl'>
                    I am a Web Developer with over 3 Years of Experience working in the IT industry. I am proficient in HTML/CSS, Javascript and Laravel. I am also competent in React JS, Next JS and SQL Language. I listen to music a lot and play video games on my free time.
                </p>
                <Link href='/#about'>
                    <div className='group flex items-center justify-center my-8 bg-teal-700 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer'>
                        Know more
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