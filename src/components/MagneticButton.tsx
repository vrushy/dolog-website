import React, { useState, useRef, MouseEvent } from 'react';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  maxShadowOffset?: number;
  maxTiltAngle?: number;
}

const MagneticButton: React.FC<MagneticButtonProps> = ({ 
  children, 
  className = '', 
  style = {}, 
  maxShadowOffset = 8,
  maxTiltAngle = 10,
  ...props 
}) => {
  const [position, setPosition] = useState({ shadowX: 4, shadowY: 4, rotateX: 0, rotateY: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    
    const normalizedX = mouseX / (width / 2);
    const normalizedY = mouseY / (height / 2);
    
    // Calculate shadow offset
    const shadowX = -normalizedX * maxShadowOffset;
    const shadowY = -normalizedY * maxShadowOffset;
    
    // Calculate 3D tilt
    const rotateX = -normalizedY * maxTiltAngle;
    const rotateY = normalizedX * maxTiltAngle;

    setPosition({ shadowX, shadowY, rotateX, rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setPosition({ shadowX: 3, shadowY: 3, rotateX: 0, rotateY: 0 });
  };

  const currentShadowX = isHovered ? position.shadowX : 3;
  const currentShadowY = isHovered ? position.shadowY : 3;
  
  // Apply perspective and rotation for the 3D effect, plus the original brutalist translation
  const transform = isHovered 
    ? `perspective(800px) rotateX(${position.rotateX}deg) rotateY(${position.rotateY}deg) translate(-2px, -2px)` 
    : `perspective(800px) rotateX(0deg) rotateY(0deg) translate(0px, 0px)`;

  return (
    <button
      ref={buttonRef}
      className={`brutal-button ${className}`}
      style={{
        ...style,
        boxShadow: `${currentShadowX}px ${currentShadowY}px 0px var(--black)`,
        transition: isHovered ? 'box-shadow 0.1s ease-out, transform 0.1s ease-out' : 'all 0.3s ease',
        transform: transform,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </button>
  );
};

export default MagneticButton;
