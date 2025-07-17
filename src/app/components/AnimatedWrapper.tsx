'use client';

import React, { ReactNode } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface AnimatedWrapperProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right';
    duration?: number;
}

const AnimatedWrapper: React.FC<AnimatedWrapperProps> = ({
    children,
    className = '',
    delay = 0,
    direction = 'up',
    duration = 0.8
}) => {
    const { elementRef, isIntersecting } = useIntersectionObserver<HTMLDivElement>({
        threshold: 0.1,
        rootMargin: '80px'
    });

    const getTransform = () => {
        switch (direction) {
            case 'up':
                return 'translateY(50px)';
            case 'down':
                return 'translateY(-50px)';
            case 'left':
                return 'translateX(50px)';
            case 'right':
                return 'translateX(-50px)';
            default:
                return 'translateY(50px)';
        }
    };

    return (
        <div
            ref={elementRef}
            className={`transition-all ease-out ${className}`}
            style={{
                opacity: isIntersecting ? 1 : 0,
                transform: isIntersecting ? 'translateY(0)' : getTransform(),
                transitionDelay: `${delay}ms`,
                transitionDuration: `${duration * 1000}ms`,
                transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }}
        >
            {children}
        </div>
    );
};

export default AnimatedWrapper; 