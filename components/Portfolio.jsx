import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { FiChevronDown } from 'react-icons/fi'

import ApiCrypto from '../public/assets/ApiCrypto.png'
import Bookstore from '../public/assets/Bookstore.png'
import ChatApp from '../public/assets/ChatApp.png'
import TodoList from '../public/assets/TodoList.png'

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            title: 'Chat App with laravel pusher',
            imageSrc: ChatApp,
            url: 'chat-app'
        },
        {
            id: 2,
            title: 'Bookstore tripay payment gateway',
            imageSrc: Bookstore,
            url: 'bookstore'
        },
        {
            id: 3,
            title: 'Todo List App',
            imageSrc: TodoList,
            url: 'todo-app'
        },
        {
            id: 4,
            title: 'Crypto Tracker with Coingecko API',
            imageSrc: ApiCrypto,
            url: 'crypto-tracker'
        },
    ]

  return (
    <div id='portfolio' className='w-full'>
        <div className='max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left'>
            <h1 className='text-3xl md:text-5xl tracking-wider uppercase text-teal-700 font-bold'>Portfolio</h1>
            <p className='py-4 max-w-lg'>
             This is a small part of what i have done.
            </p>

            <div className=' mx-auto grid md:grid-cols-2 gap-8'>
                {portfolios.map (({id, title, imageSrc, url})=> (
                    <Link key={id} href={`/portfolio/${url}`}>
                        <div className='cursor-pointer group shadow-md shadow-gray-600 overflow-hidden rounded-md'>
                            <Image src={imageSrc} alt={title} className="rounded-md duration-200 hover:scale-110"/>
                            <h2 className='text-center text-base capitalize my-4 font-light duration-200 group-hover:underline underline-offset-4'>
                                {title}
                            </h2>
                        </div>
                    </Link>
                ))}
            </div>

            <div className='flex items-center justify-center'>
            <Link href='/portfolio'>
                    <div className='group flex items-center justify-center my-8 bg-teal-700 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer'>
                        All Projects
                        <span className='-rotate-90 duration-75 ease-in group-hover:translate-x-2'>
                            <FiChevronDown size={25}/>
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Portfolio