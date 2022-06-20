import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import ApiCrypto from '../../public/assets/ApiCrypto.png'
import Bookstore from '../../public/assets/Bookstore.png'
import ChatApp from '../../public/assets/ChatApp.png'
import TodoList from '../../public/assets/TodoList.png'

export const getStaticProps = async()=>{
    
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

    return{
        props: {portfolios}
    }

}

const OnePortfolio = ({portfolios}) => {
  return (
    <div id='portfolio' className='w-full'>
        <div className='max-w-screen-xl mx-auto pt-24 p-4 text-center md:text-left'>
            <h1 className='py-4 text-3xl md:text-5xl tracking-wider uppercase text-teal-700 font-bold'>
                Portfolio
            </h1>

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

        </div>
    </div>
  )
}

export default OnePortfolio