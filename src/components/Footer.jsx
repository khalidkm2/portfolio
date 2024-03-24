import React from 'react'
import { GITHUB_IMG_URL, LINKEDIN_IMG_URL } from '../utils/constants'

const Footer = () => {
  return (
    <>
    <div className=' justify-around flex md:hidden'>
    <a className='  ' href='https://github.com/khalidprogramming' target='blank'><img alt='github' src={GITHUB_IMG_URL} className=' w-8'/></a>
      <a href='https://www.linkedin.com/in/khalid-miya-drac/' target='_blank'><img src={LINKEDIN_IMG_URL} className=' w-8 rounded-full' /></a>
      <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSRVa8lLOwmvEjX6C_zHd7IzDOUShvDBpjLw&usqp=CAU" className=' w-8 rounded-full'/>
    </div>
 <div className=' mx-w-[1200px] p-12 flex justify-between mx-auto '>
    <span className=' primary-color text-lg '>K.Khalid</span>
    <div className=' hidden   md:flex justify-between gap-5 md:gap-20 cursor-pointer mr-5'>
      <a className='  ' href='https://github.com/khalidprogramming' target='blank'><img alt='github' src={GITHUB_IMG_URL} className=' w-5 md:w-14'/></a>
      <a href='https://www.linkedin.com/in/khalid-miya-drac/' target='_blank'><img src={LINKEDIN_IMG_URL} className=' w-14 rounded-full' /></a>
      <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSRVa8lLOwmvEjX6C_zHd7IzDOUShvDBpjLw&usqp=CAU" className=' w-14 rounded-full'/>
    </div>
    <p className=' primary-color font-bold '>Khalidmiya399@gmail.com</p>
    
    </div>
    </>
   
  )
}

export default Footer