import { useState, useEffect } from 'react';

interface TypewriterTitleProps {
  text: string;
  mobileText?: string;
  speed?: number;
  className?: string;
}

export const TypewriterTitle = ({ text, mobileText, speed = 100, className = "" }: TypewriterTitleProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Use mobile text if available and on mobile, otherwise use regular text
  const currentText = isMobile && mobileText ? mobileText : text;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentIndex < currentText.length) {
          setDisplayedText(currentText.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          // Wait before starting to delete
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentIndex > 0) {
          setDisplayedText(currentText.slice(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        } else {
          setIsDeleting(false);
        }
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, currentText, speed]);

  // Reset animation when text changes (mobile/desktop switch)
  useEffect(() => {
    setDisplayedText('');
    setCurrentIndex(0);
    setIsDeleting(false);
  }, [currentText]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <span className={`${className} ${isMobile ? 'text-xs' : 'text-sm'}`}>
      {displayedText}
      <span className={`inline-block w-0.5 h-4 bg-white ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100 ${isMobile ? 'h-3' : 'h-4'}`}>
        |
      </span>
    </span>
  );
};
