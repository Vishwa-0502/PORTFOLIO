import React from 'react';
import { FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaNode, FaReact } from "react-icons/fa6";
import { ReactTyped } from "react-typed";
import pic from "../../src/photo/myp.jpg";


function Home() {
  return (
    
    <section id="Home">
    <div  name="Home" className="container max-w-screen-2xl mx-auto px-4 md:px-20 my-20">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 mt-12 md:mt-24 order-2 md:order-1">
          <span className="text-xl">Welcome to my Portfolio Website</span>
          <div className="flex space-x-1 text-2xl md:text-4xl space-y-2">
            <h1>Hello I am a</h1>
            <ReactTyped 
            className=' text-green-700 font-bold'
            strings={["Developer","Coder"]} typeSpeed={40} backSpeed={50} loop={true} />
          </div>
          <br />
          <p className="text-sm md:text-md text-justify">
            Hey...I am Vishwajeet and I'm constantly passionate about learning new things,
            not only interested in Engineering but also in Philosophy, Music, Arts, and Politics.
          </p>
          <br />

          <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0">
            <div>
              <h1 className="font-semibold">Available on</h1>
              <ul className="flex space-x-4">
                <li>
                <a href="https://www.instagram.com/me_mind_i/" target="_blank">
                <FaInstagram className='text-2xl cursor-pointer' />
                </a>
                </li>
                
                <li>
                <a href="https://www.whatsapp.com/" target="_blank">
                <FaWhatsapp className='text-2xl cursor-pointer' />
                </a>
                </li>

                <li>
                <a href= "https://www.linkedin.com/in/vishwajeet-dodyalkar-4288ab290/" target="_blank">
                <FaLinkedin className='text-2xl cursor-pointer'/>
                </a>
                </li>
                <li>
                <a href='https://www.youtube.com/@vishwajeethanamant2427' target="_blank">
                <FaYoutube className='text-2xl cursor-pointer'/>
                </a>
                </li>
              </ul>
            </div>

            <div>
              <h1 className='font-semibold'>Currently working On</h1>
              <ul className="flex space-x-4">
                <li><DiMongodb className='text-2xl cursor-pointer' /></li>
                <li><SiExpress className='text-2xl cursor-pointer' /></li>
                <li><FaNode className='text-2xl cursor-pointer'/></li>
                <li><FaReact className='text-2xl cursor-pointer'/></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="md:w-1/2  md:ml-40 md:mt-16 order-1 md:order-2">
        <img src={pic} className='rounded-full  w-[320px] h-[320px] md:w-[450px] md:h-[450px] '/>
        </div>
      </div>
    </div>
    <hr/>
    </section>


  );
}

export default Home;

