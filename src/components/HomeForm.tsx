'use client'

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFillMicFill } from 'react-icons/bs';
import { useRouter } from 'next/navigation';

type QueryClient = {
    search?: string | undefined,
}
const HomeForm = () => {
    const [search, setSearch] = useState('');
    const [loadingSearch, setLoadingSearch] = useState(false)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const router = useRouter();
    const getDataForm = (data: QueryClient) => {
        !search.trim() ? '' : router.push(`/search/web?searchTerm=${search}`)
    }
    const randomSearch = async () => {
        setLoadingSearch(true)
        const response = await fetch('https://random-word-api.herokuapp.com/word')
            .then((res) => res.json())
            .then((data) => data[0])
        if (!response) return
        router.push(`/search/web?searchTerm=${response}`)
        return setLoadingSearch(false)
    }
    return (
        <>
            <form onSubmit={handleSubmit(getDataForm)} className='w-full flex flex-col items-center'>
                <label className='flex w-full max-w-[90%] items-center border border-gray-200 mt-5 mx-auto px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow lg:max-w-2xl'>
                    <AiOutlineSearch className='text-xl text-gray-500 mr-3' />
                    <input autoComplete='off' {...register("search", {
                        required: false,
                        onChange: (event) => {
                            setSearch(event.target.value)
                        },
                    })} className='flex-grow focus:outline-none'></input>
                    <BsFillMicFill className='text-lg' />
                </label>


                <div className='flex flex-col space-y-2 sm:space-y-0 justify-center sm:flex-row mt-8 sm:gap-4'>
                    <button type='submit' className='bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow'>
                        Google Search
                    </button>
                    <button
                    disabled={loadingSearch} 
                    onClick={() => randomSearch()} 
                    className='bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow'>
                        {loadingSearch?'Loading...':'I am feeling lucky'}
                    </button>
                </div>
            </form>
        </>
    )
}

export default HomeForm