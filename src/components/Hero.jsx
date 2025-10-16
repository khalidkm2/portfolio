import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { useInView } from 'react-intersection-observer';
import myCv from '../assets/khalidmiyaresume.pdf';


const Hero = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
      });
  return (
    <div ref={ref} className={`transition-all ease-in duration-700 ${inView ? 'animate-slideInLeft' : ''} grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black `}>
        {/* <div className=' col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]'>
            <img src={heroImage} alt='hero image'/>
        </div> */}
        <div className=' col-span-2 px-5 my-auto'>
        <h1 className=' text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold'>
            <span className=' text-red-500'>
                I`m a
            </span>
            <br/>
            <TypeAnimation sequence={["Frontend Dev",1000,"Backend Dev",1000,"JS Developer",1000]} wrapper='span' speed={50} repeat={Infinity}   />
        </h1>
        {/* <p className=' text-white sm:text-lg my-6 lg:text-xl'>My name is Khalid Miya and I have 1yrs+ experience in web development</p> */}
        {/* <div className=' my-8'>
            <a href={myCv} download={"Cv.pdf"} className=' px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white'>Download CV</a>
            <a href='#contact' className=' px-6 py-3 w-full rounded-xl mr-4 border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:border-none'>Contact</a>
        </div> */}


        </div>
    </div>
  )
}

export default Hero