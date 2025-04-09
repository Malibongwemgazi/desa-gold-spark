
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <Link to="/" className={`flex items-center gap-2 ${className}`}>
      <div className="relative w-8 h-8 bg-banking-gold rounded-full flex items-center justify-center overflow-hidden shadow-md">
        <div className="absolute inset-0 bg-banking-goldDark/20 mix-blend-overlay"></div>
        <span className="text-banking-dark font-bold text-lg">D</span>
      </div>
      <div className="font-bold text-xl tracking-tight flex items-center">
        <span>DESA</span>
        <span className="text-banking-gold ml-1">Bank</span>
      </div>
    </Link>
  );
};

export default Logo;
