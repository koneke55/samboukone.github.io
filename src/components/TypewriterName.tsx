import { useState, useEffect } from 'react';

interface TypewriterNameProps {
  text: string;
  speed?: number;
  className?: string;
}

export const TypewriterName = ({ text, speed = 100, className = "" }: TypewriterNameProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (isTyping && currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else if (isTyping && currentIndex >= text.length) {
      // Typing is complete, stop the cursor from blinking
      setIsTyping(false);
      setShowCursor(false);
    }
  }, [currentIndex, isTyping, text, speed]);

  return (
    <span className={className}>
      {displayedText}
      {isTyping && (
        <span className="inline-block w-0.5 h-8 bg-white ml-1 animate-pulse">
          |
        </span>
      )}
    </span>
  );
};
