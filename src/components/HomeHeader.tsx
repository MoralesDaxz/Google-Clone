import Link from 'next/link'
import React from 'react'
import { CgMenuGridO } from 'react-icons/cg'

const HomeHeader = () => {
    const routes = [
        { label: 'Gmail', ref: 'https://mail.google.com' },
        { label: 'Images', ref: 'https://image.google.com' }
    ]
    return (
        <header className='flex justify-end p-2 text-sm'>
            <div className='flex space-x-4 items-center'>
                {routes.map((item) => {
                    return (
                        <Link className='hover:underline' key={item.label} href={item.ref}>{item.label}</Link>)
                }
                )}
                <CgMenuGridO className=' hover:bg-gray-200 rounded-full text-4xl p-2 cursor-pointer' />
                <button className=' bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-shadow'>Sign in</button>
            </div>
        </header>
    )
}

export default HomeHeader