import React, { useRef } from 'react'
import  { useState } from 'react';


const Contact = () => {



  const email = useRef("");


  return (
    <div className=' max-w-[1200px] mx-auto bg-black sm:py-20 p-5' id='contact'>

    <div className=' text-center'>
        <h2 className=' text-4xl font-bold leading-tight primary-color'>Contact Me</h2>

    </div>

    <div className=' max-w-[800px] mx-auto'>
        <div className=' mt-6 bg-[#161616] rounded-xl'>
            <div className=' p-10'>

                <form action='https://getform.io/f/7e567Xa2' method='POST'>
                    <div className=' grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4'>
                        <div>
                            <div className=' mt-2.5 '>
                                <input type='text' name='name' id='' placeholder='Your Name' className=' bg-[#161616] w-full px-4 py-4 text-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600' />

                          </div>
                        </div>

                        <div>
                            <div className=' mt-2.5 '>
                                <input ref={email} type='email' required name='email' id='' placeholder='Your Email' className=' bg-[#161616] w-full px-4 py-4 text-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600' />

                          </div>
                        </div>

                        <div>
                            <div className=' mt-2.5 '>
                                <textarea type='text' name='message' id='' placeholder='Your Message' className=' bg-[#161616] w-full px-4 py-4 text-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600' rows={4}/>

                          </div>
                        </div>

                        <div className=' sm:col-span-2'>
                            <button   type='submit' className=' text-xl w-full p-4 font-semibold text-white rounded-md bg-primary-color '>
                                Send
                            </button>
                        </div>

                       
                    </div>
                </form>

            </div>
        </div>
    </div>

    </div>
  )
}

export default Contact