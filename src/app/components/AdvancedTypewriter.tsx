'use client';

import React, { useState, useEffect } from 'react';

interface AdvancedTypewriterProps {
    lines: string[];
    speed?: number;
    delay?: number;
    className?: string;
    cursorColor?: string;
    lineDelay?: number;
}

const AdvancedTypewriter: React.FC<AdvancedTypewriterProps> = ({
    lines,
    speed = 80,
    delay = 0,
    className = '',
    cursorColor = '#26FF9A',
    lineDelay = 500
}) => {
    const [displayLines, setDisplayLines] = useState<string[]>([]);
    const [currentLine, setCurrentLine] = useState(0);
    const [currentChar, setCurrentChar] = useState(0);
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsTyping(true);
        }, delay);

        return () => clearTimeout(timer);
    }, [delay]);

    useEffect(() => {
        if (!isTyping || currentLine >= lines.length) return;

        if (currentChar < lines[currentLine].length) {
            const timer = setTimeout(() => {
                setDisplayLines(prev => {
                    const newLines = [...prev];
                    if (!newLines[currentLine]) {
                        newLines[currentLine] = '';
                    }
                    newLines[currentLine] = lines[currentLine].substring(0, currentChar + 1);
                    return newLines;
                });
                setCurrentChar(prev => prev + 1);
            }, speed);

            return () => clearTimeout(timer);
        } else {
            // Move to next line
            const timer = setTimeout(() => {
                setCurrentLine(prev => prev + 1);
                setCurrentChar(0);
            }, lineDelay);

            return () => clearTimeout(timer);
        }
    }, [currentChar, currentLine, lines, speed, lineDelay, isTyping]);

    const isComplete = currentLine >= lines.length && currentChar >= lines[lines.length - 1]?.length;

    return (
        <div className={className}>
            {displayLines.map((line, index) => (
                <div key={index} className="mb-2">
                    {line}
                    {index === currentLine && isTyping && currentChar < lines[currentLine]?.length && (
                        <span
                            className="animate-pulse"
                            style={{ color: cursorColor }}
                        >
                            |
                        </span>
                    )}
                </div>
            ))}
            {isComplete && (
                <span
                    className="animate-pulse"
                    style={{ color: cursorColor }}
                >
                    |
                </span>
            )}
        </div>
    );
};

export default AdvancedTypewriter; 