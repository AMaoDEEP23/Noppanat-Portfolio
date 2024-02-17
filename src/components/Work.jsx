import React from 'react'
import WorkImg from '../assets/projects/workImg.jpeg'
import realEstate from '../assets/projects/realestate.jpg'
import Oneday from '../assets/projects/Oneday.png'
import Burger from '../assets/projects/Burger.png'
import CoundownWatch from '../assets/projects/CoundownWatch.png'
import Weather from '../assets/projects/Weather.png'
import Green from '../assets/projects/Green.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-black bg-white'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-black border-pink-600'>Projects</p>
                <p className='py-6'>Check out some of recent Projects</p>
            </div>

{/* Container */}
            <div 
            className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {/* grid Item */}
                <div style={{backgroundImage: `url(${Oneday})`}}
                 className='shadow-lg shadow-[#040c16] group container rounded-md 
                 flex justify-center text-center items-center mx-auto content-div'>
                   
                   {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font bold text-white tracking-wider'>
                            One day React Assessment 
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://one-day-react-assessment.vercel.app/" 
                            target='_blank'
                            rel='noopener noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-Black font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/AMaoDEEP23/One-day-React-Assessment"
                            target='_blank'
                            rel='noopener noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-Black font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${Burger})`}}
                 className='shadow-lg shadow-[#040c16] group container rounded-md 
                 flex justify-center text-center items-center mx-auto content-div'>
                   
                   {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font bold text-white tracking-wider'>
                            React Burger
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://react-burger-lemon.vercel.app/"
                            target='_blank'
                            rel='noopener noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-Black font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/AMaoDEEP23/React-Burger"
                              target='_blank'
                              rel='noopener noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-Black font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                 {/* grid Item */}
                 <div style={{backgroundImage: `url(${CoundownWatch})`}}
                 className='shadow-lg shadow-[#040c16] group container rounded-md 
                 flex justify-center text-center items-center mx-auto content-div'>
                   
                   {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font bold text-white tracking-wider'>
                            Countdown Watch
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://countdown-watch.vercel.app/"
                             target='_blank'
                             rel='noopener noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-Black font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/AMaoDEEP23/CountdownWatch"
                             target='_blank'
                             rel='noopener noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-Black font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${Weather})`}}
                 className='shadow-lg shadow-[#040c16] group container rounded-md 
                 flex justify-center text-center items-center mx-auto content-div'>
                   
                   {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font bold text-white tracking-wider'>
                            API-Weather
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://api-weather-gray.vercel.app/"
                            target='_blank'
                            rel='noopener noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-Black font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/AMaoDEEP23/API-Weather"
                            target='_blank'
                            rel='noopener noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-Black font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                 {/* grid Item */}
                 <div style={{backgroundImage: `url(${Green})`}}
                 className='shadow-lg shadow-[#040c16] group container rounded-md 
                 flex justify-center text-center items-center mx-auto content-div'>
                   
                   {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font bold text-white tracking-wider'>
                            Green Sculpt
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://greensculpt.vercel.app/"
                             target='_blank'
                             rel='noopener noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-Black font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/Marakarn/Corgi-Milkshake-Final-Project"
                             target='_blank'
                             rel='noopener noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-Black font-bold text-lg'>CodeFrontend</button>
                            </a>
                            <a href="https://github.com/CorgiMilkshake/Backend-project"
                             target='_blank'
                             rel='noopener noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-Black font-bold text-lg'>CodeBackend</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* <div style={{backgroundImage: `url(${realEstate})`}}
                 className='shadow-lg shadow-[#040c16] group container rounded-md 
                 flex justify-center text-center items-center mx-auto content-div'> */}
                   
                   {/* Hover effects */}
                    {/* <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-Black font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-Black font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div> */}
                
            </div>
        </div>
    </div>
  )
}

export default Work