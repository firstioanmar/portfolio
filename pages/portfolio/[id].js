import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { FiChevronLeft, FiGithub, } from 'react-icons/fi'

import ApiCrypto from '../../public/assets/ApiCrypto.png'
import Bookstore from '../../public/assets/Bookstore.png'
import ChatApp from '../../public/assets/ChatApp.png'
import TodoList from '../../public/assets/TodoList.png'

const portfolios = [
    {
        id: 1,
        title: 'Chat App with laravel pusher',
        imageSrc: ChatApp,
        url: 'chat-app',
        desc: 'Realtime chat-app built with laravel pusher and vue js',
        scope: [' #Laravel ', ' #Vue.js ', ' #Tailwind ', ' #Pusher  ']
    },
    {
        id: 2,
        title: 'Bookstore tripay payment gateway',
        imageSrc: Bookstore,
        url: 'bookstore',
        desc: 'Bookstore application built with laravel and integration with tripay payment gateway',
        scope: [' #Laravel ', ' #Bootstrap ', ' #PaymentGateway  ']
    },
    {
        id: 3,
        title: 'Todo List App',
        imageSrc: TodoList,
        url: 'todo-app',
        desc: 'Simple todo-list app built with react js',
        scope: [' #React.js ']
    },
    {
        id: 4,
        title: 'Crypto Tracker with Coingecko API',
        imageSrc: ApiCrypto,
        url: 'crypto-tracker',
        desc: 'Crypto tracker app built with react js and axios to use the api from coingecko',
        scope: [' #React.js ', ' #API ', ' #Coingecko  ', ' #Crypto ']
    },
];

const getPortfolioForm = (url) => portfolios.filter((p) => p.url === url)[0];

export async function getStaticPaths() {
    const paths = portfolios.map((p) => ({
        params: { id: p.url },
    }))

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({params}){
    const portfolio = getPortfolioForm(params.id)

    return {
        props: {portfolio}
    }
}

const OnePorfolio = ({portfolio: {title, imageSrc, url, desc, scope}}) => {

  return (
    <div className='h-fit w-full text-center'>
        <div className='max-w-screen-xl mx-auto w-full h-full pt-24 p-8 flex flex-col'>
            <div className='flex'>
                <Link href='/portfolio'>
                    <div className='flex items-center justify-center my-8 text-teal-700 font-bold capitalize rounded-md cursor-pointer'>
                        <FiChevronLeft size={25}/> back
                    </div>
                </Link>
            </div>
            <h1 className='capitalize text-4xl mt-2 mb-8 text-center md:text-left font-bold text-teal-700 tracking-wider'>
                {title}
            </h1>

            <div className='relative w-96 h-56 mx-auto overflow-hidden my-8'>
                <Image src={imageSrc} alt={`${title}`} layout='fill' objectFit='cover'/>
            </div>

            <h2 className='text-center md:text-left my-4 text-2xl font-bold'>
                Description
            </h2>

            <p className='text-center md:text-left '>
                {desc}
            </p>
            
            <p className='text-center md:text-left '>
                {scope}
            </p>

            <div className='flex items-center justify-center'>
                <a href={`https://github.com/firstioanmar/${url}`} target='_blank' rel="noopener noreferrer">
                    <div className='group flex items-center justify-center my-8 bg-teal-700 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer'>
                        Github
                        <span className='duration-75 ease-in ml-2'>
                            <FiGithub size={25}/>
                        </span>
                    </div>
                </a>
            </div>
        </div>
    </div>
  )
}

export default OnePorfolio