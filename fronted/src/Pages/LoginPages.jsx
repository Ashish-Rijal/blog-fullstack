import React from 'react'

export default function LoginPages() {
  return (
    <div className='flex items-center justify-center h-[90vh]'>
      <form className='w-3/12 border border-gray-300 p-8 space-y-4'>

          <p className='text-3xl font-semibold text-center'>Login</p>
         <div className='flex flex-col'>
          <label htmlFor="email-address">Email Address</label>
          <input id="email-address" type="email" placeholder='Enter Your Email'className='border border-gray-300 px-2 py-1 outline-none'/>
         </div>

         <div className='flex flex-col'>
          <label htmlFor="user-password">password</label>
          <input id="user-password" type="text" placeholder='*********' className='border border-gray-300 px-2 py-1 outline-none '/>
         </div>

         <button className='bg-blue-500 px-8 py-1.5 text-white hover:bg-pink-500 cursor-pointer'>Login</button>
      </form>
    </div>
  )
}
