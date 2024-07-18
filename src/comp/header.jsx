import React, { useState } from 'react';
import pic from '../../src/photo/myp.jpg';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-scroll';

function header() {
  const [menu, setMenu] = useState(false);
  const headItems = [
    { id: 1, text: 'Home' },
    { id: 2, text: 'About' },
    { id: 3, text: 'Skills' },
    { id: 4, text: 'Portfolio' },
    { id: 5, text: 'Contact' },
  ];

  return (
    <>
      <div className='container max-w-screen-2xl mx-auto px-4 md:px-20 shadow-md top-0 left-0 right-0 z-50 bg-white'>
        <div className='flex justify-between h-16 items-center'>
          <div className='flex space-x-4'>
            <img src={pic} className='w-12 h-12 rounded-full' alt='Profile' />
            <h1 className='text-semibold cursor-pointer text-xl'>
              Vishwaj<span className='text-cyan-400 text-2xl'>ee</span>t
              <p className='text-xs'>Developer</p>
            </h1>
          </div>
          <div>
            <ul className='hidden md:flex space-x-8'>
              {headItems.map(({ id, text }) => (
                <li className='hover:scale-105 duration-200 cursor-pointer' key={id}>
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass='active'
                    className='cursor-pointer'
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
            <div className='md:hidden' onClick={() => setMenu(!menu)}>
              {!menu ? <GiHamburgerMenu size={24} /> : <IoMdClose size={24} />}
            </div>
          </div>
        </div>
        {menu && (
          <div>
            <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl'>
              {headItems.map(({ id, text }) => (
                <li className='font-semibold hover:scale-105 duration-200 cursor-pointer' key={id}>
                <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass='active'
                    className='cursor-pointer'
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default header;
