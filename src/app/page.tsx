import HomeForm from '@/components/HomeForm'
import HomeHeader from '@/components/HomeHeader'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <header className='flex flex-col items-center w-full' >
      <HomeHeader />
      <div className='flex justify-center'>
        <Image 
        priority
        width={300} 
        height={100} 
        alt='google'
        style={{width:'auto'}} 
        src={"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1024px-Google_2015_logo.svg.png"}/>
      </div>
      <HomeForm/>
    </header>
  )
}

export default page