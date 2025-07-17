'use client';

import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverProps {
    threshold?: number;
    rootMargin?: string;
}

export const useIntersectionObserver = <T extends HTMLElement>({
    threshold = 0.1,
    rootMargin = '0px'
}: UseIntersectionObserverProps = {}) => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const [hasIntersected, setHasIntersected] = useState(false);
    const elementRef = useRef<T>(null);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasIntersected) {
                    setIsIntersecting(true);
                    setHasIntersected(true);
                }
            },
            {
                threshold,
                rootMargin,
            }
        );

        observer.observe(element);

        return () => {
            observer.unobserve(element);
        };
    }, [threshold, rootMargin, hasIntersected]);

    return { elementRef, isIntersecting };
}; 