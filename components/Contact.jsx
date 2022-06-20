import React from 'react'
import { FiGithub, FiLinkedin, FiMail} from 'react-icons/fi'

function Contact() {
  return (
    <div id='contact' className='w-full'>
        <div className='max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left'>
            <h1 className='text-3xl md:text-5xl tracking-wider uppercase text-teal-700 font-bold'>Contact</h1>

            <div className='flex flex-col md:flex-row gap-8 mt-4'>
                <div className='w-full h-full rounded-xl p-4'>
                    <p className='pt-2 pb-8'>
                        Im open to talk regrading freelanceing of full-time opportunities. Fell free to contact me using your preferred medium
                    </p>
                    
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
                {/* form stuff  */}
                <div className="text-left">
                <form
                    action="https://getform.io/f/e02cc0ee-5174-45f4-993c-5297d5fc99db"
                    method="POST"
                >
                    <div className="max-w-screen-xl md:grid md:grid-cols-2 mx-auto mt-6">
                    <div className="flex flex-col md:pr-2">
                        <label className="capitalize text-sm py-2 text-teal-700 font-light">
                        name
                        </label>
                        <input
                        type="text"
                        name="name"
                        className="border-2 rounded-lg p-3 flex focus:outline-none border-teal-700"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="capitalize text-sm py-2 text-teal-700 font-light">
                        phone
                        </label>
                        <input
                        type="text"
                        name="phone"
                        className="border-2 rounded-lg p-3 flex focus:outline-none border-teal-700"
                        />
                    </div>

                    <div className="flex flex-col md:col-span-2">
                        <label className="capitalize text-sm py-2 text-teal-700 font-light">
                        email
                        </label>
                        <input
                        type="email"
                        name="email"
                        className="border-2 rounded-lg p-3 flex focus:outline-none border-teal-700"
                        />
                    </div>
                    <div className="flex flex-col md:col-span-2">
                        <label className="capitalize text-sm py-2 text-teal-700 font-light">
                        message
                        </label>
                        <textarea
                        name="message"
                        rows="10"
                        className="border-2 rounded-lg p-3 flex focus:outline-none border-teal-700"
                        ></textarea>
                    </div>
                    </div>

                    <div className="flex items-center justify-center">
                        <button className="my-8 bg-teal-700 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer hover:scale-105 duration-200">
                            send message
                        </button>
                    </div>
                </form>
                </div>
                </div>
        </div>
      </div>
    </div>
  )
}

export default Contact