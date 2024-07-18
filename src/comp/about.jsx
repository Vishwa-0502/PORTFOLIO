import React from 'react'

function about() {
  return (
    
    <section id="About" name="Skills">
    <div name="About" className="container max-w-screen-2xl mx-auto px-4 md:px-20 my-20">
      <h1 className='text-3xl font-bold text-green-300'>About</h1>
      <br/>
        <p>
        I am constantly passionate about learning new things, 
        not only in engineering but also in philosophy, music, arts, and politics. 
        I look forward to connecting and collaborating with like-minded individuals 
        to create innovative solutions and explore new horizons in technology.
        </p>
        
        <br/>
        <h2 className='text-xl text-cyan-600 font-semibold'>Education</h2>
        <p>
        <div>
        ~NIT Karnataka, Surathkal
        B.Tech in Information Technology (2022 - 2026)
        CGPA: 8.57
        </div>
        <div>
        ~V.V.P. Junior College, Solapur, India
        Higher Secondary Certificate (2020 - 2021)
        Percentage: 98.33%
        </div>
        <div>
        ~Late V.M.M. High School, Solapur, India
        Secondary School Certificate (2018 - 2019)
        Percentage: 97.20%
        </div>
        </p>

        <br/>
        <section id="skills">
        <h2 name="Skills" className='text-xl text-cyan-600 font-semibold'>Skills & Expertise</h2>
        <p>
        <div>
        During my academic career, I have developed a solid foundation in key technical areas, including:
        </div>
        <div>
        ~Data Structures & Algorithms
        </div>

        <div>
        ~Operating Systems
        </div>

        <div>
        ~Computer Networking
        </div>
        </p>
        </section>

        <br/>
        <h2 className='text-xl text-cyan-600 font-semibold'>Projects</h2>
        <p>
        <div>
        ~5 State CPU Simulator | Linux System Calls
        (March 2024 - June 2024)
        Developed a CPU simulator using C++, employing a 5-state model and Linux system calls like fork, exec, and pipes.
        </div>
        <div>
        ~Personal Money Manager | MERN Stack Development
        (March 2024 - June 2024)
        Built a web application using the MERN stack (MongoDB, Express.js, React.js, Node.js) for tracking income and expenses.
        </div>
        
        </p>

        
        <br/>
        <h2 className='text-xl text-cyan-600 font-semibold'>Extracurricular Activities</h2>
        <p>
        <div>
        ~Script Writer, ISTE, NITK
        (Dec 2023 - Feb 2024)
        Authored the script for the short film "Dummies Guide to College."
        </div>
        <div>
        ~Mentor, ISTE, NITK
        (May 2024 - June 2024)
        Mentored juniors in music production using Audacity Software.
        </div>
        
        </p>
  
  

    </div>
    </section>
    
  )
}

export default about
