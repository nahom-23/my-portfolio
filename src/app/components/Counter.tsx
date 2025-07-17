'use client';

import React, { useState, useEffect, useRef } from 'react';

interface CounterProps {
    end: number;
    duration?: number;
    delay?: number;
    suffix?: string;
    className?: string;
}

const Counter: React.FC<CounterProps> = ({
    end,
    duration = 2000,
    delay = 0,
    suffix = '',
    className = ''
}) => {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const counterRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasStarted) {
                    setHasStarted(true);

                    // Start counting after delay
                    const timer = setTimeout(() => {
                        const startTime = Date.now();
                        const startValue = 0;

                        const updateCounter = () => {
                            const currentTime = Date.now();
                            const elapsed = currentTime - startTime;
                            const progress = Math.min(elapsed / duration, 1);

                            // Easing function for smooth animation
                            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                            const currentValue = Math.floor(startValue + (end - startValue) * easeOutQuart);

                            setCount(currentValue);

                            if (progress < 1) {
                                requestAnimationFrame(updateCounter);
                            }
                        };

                        requestAnimationFrame(updateCounter);
                    }, delay);

                    return () => clearTimeout(timer);
                }
            },
            {
                threshold: 0.5,
                rootMargin: '50px'
            }
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => {
            if (counterRef.current) {
                observer.unobserve(counterRef.current);
            }
        };
    }, [end, duration, delay, hasStarted]);

    return (
        <span ref={counterRef} className={className}>
            {count}{suffix}
        </span>
    );
};

export default Counter; 