import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-white flex justify-center items-center p-4'>
        <form method='POST' action='https://getform.io/f/668f7241-bc6d-49b5-8bd3-ffaf0c9ef54e' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-black border-pink-600'>Contact</p>
                <p className='py-4'>// Submit the form below or shoot me an email- amaodeep@gmail.com</p>
            </div>
            <input className='border-solid border-2 border-black p-2 ' type='text' placeholder='Name' name='name'></input>
            <input className='border-solid border-2 border-black my-4 p-2 ' type='email' placeholder='Email' name='email'></input>
            <textarea className='border-solid border-2 border-black p-2'name='message' rows={10} placeholder='Message'></textarea>
            <button className='border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact