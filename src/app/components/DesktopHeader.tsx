'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const DesktopHeader: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            {/* Mobile Header */}
            <header className="lg:hidden fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center bg-[#0a0a0a]/80 backdrop-blur-sm">
                {/* Logo */}
                <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center shadow-sm">
                        <div className="w-4 h-4 bg-black rounded-sm"></div>
                    </div>
                    <span className="text-white font-semibold text-lg tracking-wide">Nahom</span>
                </div>

                {/* Mobile Hamburger Menu */}
                <button
                    className="text-white p-1 hover:bg-white/10 rounded-sm transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                        <div className={`w-full h-0.5 bg-white rounded-full transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                        <div className={`w-full h-0.5 bg-white rounded-full transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                        <div className={`w-full h-0.5 bg-white rounded-full transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
                    </div>
                </button>
            </header>

            {/* Mobile/Medium Menu Overlay */}
            {isMenuOpen && (
                <div className="lg:hidden fixed inset-0 z-40 bg-black/80 backdrop-blur-sm">
                    <div className="flex flex-col items-center justify-center h-full space-y-8">
                        <Link href="/" className="text-white text-2xl hover:text-green-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
                            <span className='text-[#26FF9A]'>#</span>Home
                        </Link>
                        <Link href="/projects" className="text-white text-2xl hover:text-green-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
                            <span className='text-[#26FF9A]'>#</span>Projects
                        </Link>
                        <Link href="/about" className="text-white text-2xl hover:text-green-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
                            <span className='text-[#26FF9A]'>#</span>About
                        </Link>
                        <Link href="/contact" className="text-white text-2xl hover:text-green-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
                            <span className='text-[#26FF9A]'>#</span>Contact
                        </Link>
                    </div>
                </div>
            )}

            {/* Medium Screen Header */}
            <header className="hidden md:block lg:hidden fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-[#0a0a0a]/80 backdrop-blur-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center shadow-sm">
                            <div className="w-4 h-4 bg-black rounded-sm"></div>
                        </div>
                        <span className="text-white font-semibold text-lg tracking-wide">Nahom</span>
                    </div>
                    <button
                        className="text-white p-1 hover:bg-white/10 rounded-sm transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                            <div className={`w-full h-0.5 bg-white rounded-full transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                            <div className={`w-full h-0.5 bg-white rounded-full transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                            <div className={`w-full h-0.5 bg-white rounded-full transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
                        </div>
                    </button>
                </div>
            </header>

            {/* Desktop Header */}
            <header className="hidden lg:block fixed top-0 left-0 z-50 h-screen">
                <nav className="flex flex-col items-start h-full before:border-t before:border-gray-400 before:border-[1px] before:h-96 ml-8">
                    <ul className="flex-col space-y-3 pt-3 mr-5">
                        <li><Link href="/" className="hover:text-green-400 transition-colors"><span className='text-[#26FF9A]'>#</span>Home</Link></li>
                        <li><Link href="/projects" className="hover:text-green-400 cursor-pointer transition-colors"><span className='text-[#26FF9A]'>#</span>Projects</Link></li>
                        <li><Link href="/about" className="hover:text-green-400 cursor-pointer transition-colors"><span className='text-[#26FF9A]'>#</span>About</Link></li>
                        <li><Link href="/contact" className="hover:text-green-400 cursor-pointer transition-colors"><span className='text-[#26FF9A]'>#</span>Contact</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default DesktopHeader; 