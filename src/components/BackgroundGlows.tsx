export default function BackgroundGlows() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#0A0A0A]" id="ambient-bg">
      {/* Primary dark gradient base overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0D0D0D] to-[#141414] opacity-95" />

      {/* Layered glowing radial spotlights */}
      
      {/* Indigo glow - top center-left */}
      <div className="absolute -top-40 left-1/4 w-[650px] h-[650px] rounded-full bg-gradient-to-br from-indigo-500/10 to-purple-500/0 blur-[140px] pointer-events-none" />
      
      {/* Purple glow - mid-section right */}
      <div className="absolute top-[25%] -right-20 w-[550px] h-[550px] rounded-full bg-purple-500/10 blur-[120px] pointer-events-none" />
      
      {/* Cyan glow - mid-section left */}
      <div className="absolute top-[55%] -left-20 w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-[110px] pointer-events-none" />

      {/* Deep Indigo glow - bottom center */}
      <div className="absolute -bottom-40 left-1/3 w-[650px] h-[650px] rounded-full bg-indigo-500/10 blur-[150px] pointer-events-none" />

      {/* High-contrast modern grid overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none opacity-60" 
        id="tech-grid-overlay"
      />
      
      {/* Soft vignette vignette overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#0A0A0A_95%)] pointer-events-none opacity-80" />
    </div>
  );
}

