import React from "react";
import netflixImg from "../assets/netflix.png";
import ecommerceImg from "../assets/ecommerce.png";
import buddhichalImg from "../assets/buddhichal.png";
import flickgramImg from "../assets/flickgram.png";
import { useInView } from "react-intersection-observer";
import movieImg from "../assets/movie.png";

const Work = () => {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });


  return (
    <div ref={ref} id="projects" className={`transition-all ease-in duration-700 ${inView ? 'animate-slideInUp' : ''} max-w-[1200px] mx-auto p-5 my-24"`}>
      <div className=" pb-8">
        <p className=" text-4xl mb-3 font-bold primary-color ">Projects</p>
        <p className=" text-gray-400">Check out some of my projects</p>
      </div>
      <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-8">
      <div className=" border border-gray-600 p-3 transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center  h-[300px] bg-cover relative flex-col">
          <img src={flickgramImg} alt="" />
          <div className=" opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className=" text-2xl font-bold text-white tracking-wider"></span>
            <div className=" pt-8 text-center">
              <a href="https://flickgram.vercel.app/" target="blank">
                <button className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Live
                </button>
              </a>
            </div>
          </div>
          <p className=" text-gray-400 text-sm text-wrap py-5 ">A social media application .</p>
        </div>
        <div className=" border border-gray-600 p-3 transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center  h-[300px] bg-cover relative flex-col">
          <img src={netflixImg} alt="" />
          <div className=" opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className=" text-2xl font-bold text-white tracking-wider"></span>
            <div className=" pt-8 text-center">
              <a href="https://strong-empanada-740126.netlify.app/" target="blank">
                <button className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Live
                </button>
              </a>
            </div>
          </div>
          <p className=" text-gray-400 text-sm text-wrap py-5 ">The Netflix GPT </p>
          {/* <p>project integrates AI-powered search using Redux for streamlined state management. Users log in, search with natural language, enhancing content discovery and user experience.</p> */}
        </div>
        <div className=" border border-gray-600 p-3 transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center  h-[300px] bg-cover relative flex-col">
          <img src={ecommerceImg} alt="" />
          <div className=" opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className=" text-2xl font-bold text-white tracking-wider"></span>
            <div className=" pt-8 text-center">
              <a href="https://store-app-ten-nu.vercel.app/" target="blank">
                <button className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Live
                </button>
              </a>
            </div>
          </div>
          <p className=" text-gray-400 text-sm text-wrap py-5 ">A ecommerce website</p>
          {/* <p>A responsive UI facilitating easy product browsing, cart management, and secure authentication. Product catalog with filtering, sorting, and cart operations. Integration with backend API ensures real-time product data retrieval.</p> */}
        </div>
        <div className=" border border-gray-600 p-3 transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center  h-[300px] bg-cover relative flex-col">
          <img src={movieImg} alt="" />
          <div className=" opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className=" text-2xl font-bold text-white tracking-wider"></span>
            <div className=" pt-8 text-center">
              <a href="https://booking-client-seven.vercel.app/" target="blank">
                <button className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Live
                </button>
              </a>
            </div>
          </div>
          <p className=" text-gray-400 text-sm text-wrap py-5 ">A show booking site</p>
          {/* <p>A responsive UI facilitating easy product browsing, cart management, and secure authentication. Product catalog with filtering, sorting, and cart operations. Integration with backend API ensures real-time product data retrieval.</p> */}
        </div>
        <div className=" border border-gray-600 p-3 transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center  h-[300px] bg-cover relative flex-col">
          <img src={buddhichalImg} alt="" />
          <div className=" opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className=" text-2xl font-bold text-white tracking-wider"></span>
            <div className=" pt-8 text-center">
              <a href="https://buddhichal.vercel.app/" target="blank">
                <button className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Live
                </button>
              </a>
            </div>
          </div>
          <p className=" text-gray-400 text-sm text-wrap py-5 ">Upgraded Tic Tac Toe Game</p>
          {/* <p>A responsive UI facilitating easy product browsing, cart management, and secure authentication. Product catalog with filtering, sorting, and cart operations. Integration with backend API ensures real-time product data retrieval.</p> */}
        </div>
      </div>
    </div>
  );
};

export default Work;