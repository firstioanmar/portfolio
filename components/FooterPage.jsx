import React from 'react'

const FooterPage = () => {
  return (
    <footer className='text-black print:hidden'>
        <div className='container mx-auto px-5'>
            <div className='pt-12 pb-12 flex justify-between items-center'>
                <h3 className='tracking-tighter leading-tight text-sm'>
                    @ 2022 firstioanmar.vercel.app
                </h3>
            </div>
        </div>
    </footer>
  )
}

export default FooterPage