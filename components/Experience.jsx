import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import htmlImage from '../public/assets/experience/html.png'
import javascriptImage from '../public/assets/experience/javascript.png'
import laravelImage from '../public/assets/experience/laravel.png'
import gitImage from '../public/assets/experience/git.png'
import reactImage from '../public/assets/experience/react.png'
import nextjsImage from '../public/assets/experience/nextjs.png'
import mysqlImage from '../public/assets/experience/mysql.png'
import tailwindImage from '../public/assets/experience/tailwind.png'
import vueImage from '../public/assets/experience/vuejs.png'

const Experience = () => {

    const experiences =[
        {
            id: 1,
            title: 'HTML/CSS',
            imageSrc: htmlImage,
        },
        {
            id: 2,
            title: 'Javascript',
            imageSrc: javascriptImage,
        },
        {
            id: 3,
            title: 'Laravel',
            imageSrc: laravelImage,
        },
        {
            id: 4,
            title: 'Tailwind',
            imageSrc: tailwindImage,
        },
        {
            id: 5,
            title: 'Git',
            imageSrc: gitImage,
        },
        {
            id: 6,
            title: 'React',
            imageSrc: reactImage,
        },
        {
            id: 7,
            title: 'Next.js',
            imageSrc: nextjsImage,
        },
        {
            id: 8,
            title: 'Vue.js',
            imageSrc: vueImage,
        },
        {
            id: 9,
            title: 'SQL',
            imageSrc: mysqlImage,
        },
    ]

  return (
    <div id='experience' className='w-full'>
        <div className='max-w-screen-xl mx-auto px-8 py-6 text-center md:text-left'>
            <h1 className='text-3xl md:text-5xl tracking-wider uppercase text-teal-700 font-bold'>Experience</h1>
            <p className='py-4 max-w-lg'>
                This is what I have used over the peroid.
            </p>
        </div>
        <div className='max-w-screen-xl mx-auto grid grid-cols-5 lg:grid-cols-9 md:grid-cols-5 items-center'>
            {experiences.map(({id,title,imageSrc})=>(
                <div key={id} className="flex flex-col lg:flex-row gap-9 lg:gap-0 items-center justify-between p-6 rounded-md hover:scale-105 ease-in duration-300">
                    <Image src={imageSrc} width="32px" height="32px" alt='{title}'/>
                    <h3 className='font-light text-xs md:px-2'>{title}</h3>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Experience