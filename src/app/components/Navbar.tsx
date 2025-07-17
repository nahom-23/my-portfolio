import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-11 flex flex-col items-start z-50 before:border-t before:border-gray-400 before:border-[1px] before:h-96">
      <ul className="flex-col space-y-3 pt-3 mr-5">
        <li><Link href="/" className="hover:text-green-400 "><span className='text-[#26FF9A]'>#</span>Home</Link></li>
        <li><Link href="/projects" className="hover:text-green-400 cursor-pointer"><span className='text-[#26FF9A]'>#</span>Projects</Link></li>
        <li><Link href="/about" className="hover:text-green-400 cursor-pointer"><span className='text-[#26FF9A]'>#</span>About</Link></li>
        <li><Link href="/contact" className="hover:text-green-400 cursor-pointer"><span className='text-[#26FF9A]'>#</span>Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar