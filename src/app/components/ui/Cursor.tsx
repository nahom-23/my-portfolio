'use client'

import React, { useState, useEffect } from 'react'

const Cursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Detect hover on interactive elements
  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, input, textarea, select, [role="button"]')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    window.addEventListener('mouseover', handleMouseOver);
    return () => window.removeEventListener('mouseover', handleMouseOver);
  }, []);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    }
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <div>
      <div
        className={`fixed top-0 left-0 w-8 h-8 border-2 transform -translate-1/2 rounded-full z-[9999] pointer-events-none transition-all duration-300 ease-out ${isHovering ? 'border-[#26FF9A] bg-[#26FF9A]/10 scale-125' : 'border-gray-400 bg-transparent scale-100'}`}
        style={{
          left: cursorPosition.x,
          top: cursorPosition.y,
        }}
      />
      <div
        className={`fixed top-0 left-0 w-1.5 h-1.5 transform -translate-1/2 rounded-full z-[9999] pointer-events-none transition-all duration-200 ease-out ${isHovering ? 'bg-[#26FF9A] scale-150' : 'bg-green-400 scale-100'}`}
        style={{
          left: cursorPosition.x,
          top: cursorPosition.y,
        }}
      />
    </div>
  )
}

export default Cursor