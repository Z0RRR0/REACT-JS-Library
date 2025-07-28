import React, { useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState({})
    // useEffect(() => {
    //     fetch('https://api.github.com/users/z0rrr0')
    //     .then((res) => res.json())
    //     .then((data) => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl rounded-lg items-center flex flex-col space-x-2'><h1 className='font-bold text-gray-300'>GitHub Followers: {data.followers}</h1> 
        <div id="borded" className='w-50 border-2 my-2 rounded border-yellow-500'></div>
        <div className='h-fit w-full mt-2 flex md:flex-row
        flex-col'>
            <div className='w-full'>
                <img className='md:w={300px} w-full rounded-t-lg md:rounded-l-lg md:rounded-t-none' src={data.avatar_url} alt="Git picture"/>
            </div>
            <div className='w-full bg-gray-500
                rounded-b-lg 
                md:rounded-b-none 
                md:rounded-tr-lg md:rounded-br-lg flex flex-col items-center'>
                <div className='h-[44%] grid place-content-center flex'>
                    <Link to="https://github.com/Z0RRR0"><h1 className='bg-slate-700 p-2 md:p-4 hover:bg-slate-800 rounded text-4xl my-4 md:my-none text-center'>{data.name}</h1></Link>
                </div>
                <div id="borded2" className='w-[25%] border-1 my-2 rounded border-white'></div>
                <div className='h-[30%] mx-12 grid place-content-center'>
                    <p className='overflow text-sm text-center my-2 md:my-4'>"Hi there 👋👋👋
As an aspiring Java Developer, I am driven by a deep passion for crafting innovative solutions and tackling coding challenges head-on."</p>
                </div>
                <div id="borded2" className='w-[25%] border-1 my-2 rounded border-white'></div>
                <div className='h-[24%] mb-2'></div>
            </div>
        </div>
    </div>
  )
}

export default Github

export const githubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/z0rrr0')
    return response.json()
}