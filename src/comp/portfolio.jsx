import React from 'react'
import mongo from "../../src/photo/mong.png";
import nod from "../../src/photo/nodejs.png";
import reac from "../../src/photo/reac.png";
import expr from "../../src/photo/expressjs.png";
import cppp from "../../src/photo/cppl.jpg";

function portfolio() {
    const citem=[
        {
            id:1,
            logo:mongo,
            title:"MongoDB",
            info:"Includes NoSQL database helps in Building responsive websites",
        },
        {
            id:2,
            logo:nod,
            title:"NodeJs",
            info:"Back-end framework helps in Building responsive websites",

        },
        {
            id:3,
            logo:reac,
            title:"ReactJs",
            info:"front-end framework helps in Building responsive websites",
        },
        {
            id:4,
            logo:expr,
            title:"ExpressJs",
            info:"Back-end framework helps in Building responsive websites",
        },
        {
            id:5,
            logo:cppp,
            title:"C++",
            info:"Programming language helps in developing responsive Apps",
        }
]
    return (
    
    <section id="Portfolio" name="Portfolio">
    <div name="Portfolio" className="container max-w-screen-2xl mx-auto px-4 md:px-20 my-20">
      <h1 className='text-3xl font-bold text-green-300 mb-5'>Portfolio</h1>
      <h2 className='font-semibold text-sm underline'>Featured Projects</h2>

    <div className='grid grid-cols-1 md:grid-cols-4 gap-3 my-5'>
        {
            citem.map(({id,logo,title,info})=>(
                <div  className="md:h-[300px] md:w-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"key={id}>
                    <img src={logo} alt={title} className='w-12 h-12 p-1 rounded-full border-[2px]'/>
                    <div className='p-3'>
                        <div className='px-2 font-bold text-xl mb-2'>{title}</div>
                        <p className='text-gray-700 px-2'>{info}</p>
                    </div>
                    
                    <br/>
                    <div className='px-6 py-4 justify-around space-x-1'>
                        <button className='bg-green-700 font-bold text-xl px-4 py-2 rounded text-white'>Video</button>
                        <button className='font-bold text-xl bg-blue-500 text-white px-4 py-2 rounded'>Source Code</button>
                    </div>
                </div>
            ))
        }


      </div>
    </div>
    </section>
    
  )
}

export default portfolio
