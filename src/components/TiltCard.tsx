import React, { useState, useRef } from "react";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function TiltCard({ children, className = "", id }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });
  };

  return (
    <div
      id={id}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative transition-all duration-300 select-none ${className}`}
      style={{
        ["--mouse-x" as any]: `${coords.x}px`,
        ["--mouse-y" as any]: `${coords.y}px`,
      } as React.CSSProperties}
    >
      {/* Background radial follow glow */}
      <div
        className="absolute inset-0 pointer-events-none rounded-[inherit] transition-opacity duration-300 z-0"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(180px circle at var(--mouse-x) var(--mouse-y), rgba(139, 92, 246, 0.07), rgba(6, 182, 212, 0.03) 50%, transparent 100%)`,
        }}
      />
      
      {/* Border outline radial follow glow */}
      <div
        className="absolute -inset-[1px] pointer-events-none rounded-[inherit] transition-opacity duration-300 z-0"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(130px circle at var(--mouse-x) var(--mouse-y), rgba(139, 92, 246, 0.4) 0%, rgba(6, 182, 212, 0.25) 50%, transparent 100%)`,
          padding: '1px',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      />

      <div className="relative z-10 h-full w-full rounded-[inherit]">
        {children}
      </div>
    </div>
  );
}
