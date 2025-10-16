import React from 'react'
import { useInView } from 'react-intersection-observer';


const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div  id='about'  ref={ref} className={`text-white max-w-[1200px] mx-auto my-24 transition-all ease-in duration-700 ${inView ? 'animate-slideInUp' : ''}`}>
    <div className=' md:grid md:grid-cols-2 sm:py-16'>
    <div className=' mt-4 md:mt-0 text-left flex'>
    <div className=' my-auto mx-6'>
    <h2 className=' text-4xl font-bold mb-4 '>
About me
    </h2>
    <p className=' text-base lg:text-lg'>
    Hey, I’m a web developer who loves building clean, responsive, and functional websites. I work across frontend and backend, always exploring new tools and ideas to make things better and faster. I enjoy experimenting, solving problems, and turning ideas into real, working experiences that feel good to use.
    </p>

    </div>

    </div>
         {/* <img className=' mx-auto rounded-3xl py-8 md:py-0' src={aboutImg} width={300} height={300}/> */}
    </div>

    </div>
  )
}

export default About