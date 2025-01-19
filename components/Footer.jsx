import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={isDarkMode ? assets.jay_logo_dark : assets.jay_logo} alt='logo' className='w-36 mx-auto mb-2 '/>

        <div className='w-max flex items-center gap-2 mx-auto'>
            <a href="#home"><Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='email' className='w-6'/></a>
            jay09.contact@gmail.com
        </div>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>&copy; 2025 Jay Dhurve. All rights reserved.</p>
        <ul className='flex items-center justify-center gap-10 mt-4 sm:mt-0'>
            <li><a target='_blank' href="https://github.com/jaydhurve09" >Github</a></li>
            <li><a target='_blank' href="https://www.linkedin.com/in/jay-dhurve-352586322/" >LinkedIn</a></li>
            <li><a target='_blank' href="https://x.com/jaydhurve09" >Twitter</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
