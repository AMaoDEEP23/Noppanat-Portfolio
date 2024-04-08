import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'


const Home = () => {
  return (
    <div name = 'home' className=' bg-white flex flex-col md:flex-row pt-24'>

       {/* Container */}
       <div className=' w-[250px]  md:ml-[10rem] ml-16 min-w-[300px] flex items-center mt-20 md:mt-40 '>
        <img className='rounded-2xl' src='ProfileLinkin.jpg'/>
       </div>
       <div className='w-3/4'>
       <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full my-10 md:py-0'>
        <p className='text-black font-bold'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-green-700'>Noppanat Nittayapaibool</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-green-700'>I'm Junior Software Developer</h2>
        {/* <p className='text-black py-4 max-w-[700px]'>.....waiting for sentence.....waiting for sentence.....waiting for sentence.....waiting for sentence.....waiting for sentence.....waiting for sentence.....waiting for sentence.....waiting for sentence.....waiting for sentence.....waiting for sentence.....waiting for sentence.....waiting for sentence.....waiting for sentence</p> */}
        <div>
          <button className=' group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#8bca00] hover:border-[#8bca00]'>View Project 
          <span className='group-hover:rotate-90 duration-300'>
          <HiArrowNarrowRight className='ml-3'/>
          </span>
          </button>
          
        </div>
        </div>
        </div>
    </div>
  )
}

export default Home