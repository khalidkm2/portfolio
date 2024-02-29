import React from 'react'

const About = () => {
  return (
    <div className=' text-white max-w-[1200px] mx-auto my-24' id='about'>
    <div className=' md:grid md:grid-cols-2 sm:py-16'>
    <div className=' mt-4 md:mt-0 text-left flex'>
    <div className=' my-auto mx-6'>
    <h2 className=' text-4xl font-bold mb-4 '>
About me
    </h2>
    <p className=' text-base lg:text-lg'>
    Hello! I’m a front-end developer with over a year of experience crafting engaging digital experiences. My journey in web development began with a keen interest in web design and evolved into a deep passion for creating intuitive user interfaces.
Excited about the future of web development, I look forward to collaborating on projects that push boundaries and deliver impactful digital experiences. If you’re looking for a dedicated front-end developer, let’s get together and make something amazing!
    </p>

    </div>

    </div>
         {/* <img className=' mx-auto rounded-3xl py-8 md:py-0' src={aboutImg} width={300} height={300}/> */}
    </div>

    </div>
  )
}

export default About