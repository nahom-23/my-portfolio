'use client';

import React, { useState, useEffect } from 'react';

interface TypewriterProps {
    text: string;
    speed?: number;
    delay?: number;
    className?: string;
    cursor?: boolean;
}

const Typewriter: React.FC<TypewriterProps> = ({
    text,
    speed = 100,
    delay = 0,
    className = '',
    cursor = true
}) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsTyping(true);
        }, delay);

        return () => clearTimeout(timer);
    }, [delay]);

    useEffect(() => {
        if (!isTyping) return;

        if (currentIndex < text.length) {
            const timer = setTimeout(() => {
                setDisplayText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, speed);

            return () => clearTimeout(timer);
        }
    }, [currentIndex, text, speed, isTyping]);

    return (
        <span className={className}>
            {displayText}
            {cursor && isTyping && currentIndex < text.length && (
                <span className="animate-pulse text-[#26FF9A]">|</span>
            )}
        </span>
    );
};

export default Typewriter; 