import React from 'react'
import { FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";


function footer() {
  return (
    <>
    <hr/>
      <footer className='py-12'>
        <div className='mx-w-screen-2xl container mx-auto px-4 md:px-20'>
        <div className='items-center justify-center flex flex-col'>
                <div className='flex space-x-4'>
                    <FaInstagram size={24}/>
                    <FaWhatsapp size={24}/>
                    <FaLinkedin size={24}/>
                    <FaYoutube size={24}/>
                </div>
                <div className='mt-8 border-t border-gray-700 pt-8 flex flex-col items-center'>
                <p className='text-sm text-gray-600'>�� 2024 Vishwajeet Dodyalkar.</p>
                <p className='text-sm text-gray-600'>All rights reserved.</p>
                </div>
        </div>
        </div>
      </footer>
    </>
  )
}

export default footer
