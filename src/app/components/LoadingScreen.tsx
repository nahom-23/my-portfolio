'use client';

import React, { useState, useEffect } from 'react';
import Typewriter from './Typewriter';

const LoadingScreen: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 4000); // 4 seconds loading time to accommodate typewriter

        return () => clearTimeout(timer);
    }, []);

    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 z-50 bg-[#0a0a0a] flex items-center justify-center">
            <div className="text-center">
                {/* Animated Name with Typewriter */}
                <div className="relative">
                    <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-white mb-4">
                        <Typewriter
                            text="Nahom"
                            speed={200}
                            delay={500}
                            className="text-white"
                            cursor={true}
                        />
                    </h1>

                    {/* Glowing effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#26FF9A] via-transparent to-[#26FF9A] opacity-20 blur-xl animate-glow"></div>
                </div>

                {/* Loading dots */}
                <div className="flex justify-center space-x-2 mt-8">
                    <div className="w-3 h-3 bg-[#26FF9A] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-3 h-3 bg-[#26FF9A] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-3 h-3 bg-[#26FF9A] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen; 