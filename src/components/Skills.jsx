import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import tailwind from '../assets/tailwind.png'
import react from '../assets/react.png'
import express from '../assets/icons8-express-js-50.png'
import git from '../assets/icons8-git-48.png'
import mongodb from '../assets/icons8-mongodb-48.png'
import node from '../assets/icons8-node-js-48.png'
import typescript from '../assets/icons8-typescript-48.png'
import { useInView } from 'react-intersection-observer'
import '../css/animations.css'


const Skills = () => {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className={`transition-all ease-in duration-700 ${inView ? 'animate-slideInRight' : ''} border border-gray-600 bg-black text-gray-400 text-sm md:text-base md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-6 place-items-center md:flex md:justify-between md:items-center`}>
    <h2 className=' text-gray-700 text-xl md:text-4xl font-bold m-4'>My <br/> Tech <br/> Stack</h2>
    <div className=' flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
      <img className=' animate-pulse' src={html} alt=''/>
      <p className=' mt-2'>HTML</p>
    </div>
    <div className=' flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
      <img className=' ' src={css} width={100} height={100} alt=''/>
      <p className=' mt-2'>CSS</p>
    </div>
    <div className=' flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
      <img className=' animate-pulse' src={javascript} width={100} height={100} alt=''/>
      <p className=' mt-2'>Javascript</p>
    </div>
    <div className=' flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
      <img className=' animate-pulse' src={typescript} width={100} height={100} alt=''/>
      <p className=' mt-2'>TypeScript</p>
    </div>
    <div className=' flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
      <img className=' ' src={tailwind} width={100} height={100} alt=''/>
      <p className=' mt-2'>Tailwind</p>
    </div>
    <div className=' flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
      <img className=' animate-pulse' src={react} width={100} height={100} alt=''/>
      <p className=' mt-2'>React</p>
    </div>
    <div className=' flex flex-col  items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
      <img className=' bg-white animate-pulse' src={node} width={100} height={100} alt=''/>
      <p className=' mt-2'>Node js</p>
    </div>
    <div className=' flex flex-col  items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
      <img className=' bg-white animate-pulse' src={express} width={100} height={100} alt=''/>
      <p className=' mt-2'>Express js</p>
    </div>
    <div className=' flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
      <img className=' animate-pulse' src={mongodb} width={100} height={100} alt=''/>
      <p className=' mt-2'>Mongo Db</p>
    </div>
    <div className=' flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
      <img className=' animate-pulse' src={git} width={100} height={100} alt=''/>
      <p className=' mt-2'>Git</p>
    </div>
    </div>
  )
}

export default Skills