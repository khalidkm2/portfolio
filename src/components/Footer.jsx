import React from 'react'
import { GITHUB_IMG_URL, LINKEDIN_IMG_URL } from '../utils/constants'

const Footer = () => {
  return (
    <div className=' mx-w-[1200px] sm:h-[150px] p-12 flex justify-between mx-auto '>
    <span className=' primary-color text-lg '>K.Khalid</span>
    <div className='  flex justify-between gap-20 cursor-pointer mr-5'>
      <a className=' ' href='https://github.com/khalidprogramming' target='blank'><img alt='github' src={GITHUB_IMG_URL} className='w-14'/></a>
      <a href='https://www.linkedin.com/in/khalid-miya-drac/' target='_blank'><img src={LINKEDIN_IMG_URL} className=' w-14 rounded-full' /></a>
      <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSRVa8lLOwmvEjX6C_zHd7IzDOUShvDBpjLw&usqp=CAU" className=' rounded-full'/>
    </div>
    <p className=' primary-color font-bold '>Khalidmiya399@gmail.com</p>
    
    </div>
  )
}

export default Footer