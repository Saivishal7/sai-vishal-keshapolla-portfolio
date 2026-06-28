import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Elegant, smooth loading over 1.5s
    const timer = setTimeout(() => {
      setIsFinished(true);
      const exitTimer = setTimeout(() => {
        onComplete();
      }, 500); // 0.5s fade out
      return () => clearTimeout(exitTimer);
    }, 1500); // 1.5s progress duration

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          id="loading-screen-container"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.5, ease: "easeInOut" }
          }}
          className="fixed inset-0 bg-[#0A0A0A] z-[9999] flex flex-col items-center justify-center select-none"
        >
          <div className="flex flex-col items-center text-center max-w-xs w-full px-6 relative z-10">
            {/* Logo and Name */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex items-center space-x-3 mb-8"
            >
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center font-display font-extrabold text-lg text-black shadow-lg shadow-white/10">
                SV
              </div>
              <span className="font-display text-xl font-bold tracking-tight text-white">
                Sai Vishal
              </span>
            </motion.div>

            {/* Progress Container */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="w-48 space-y-3"
            >
              {/* Progress Bar */}
              <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ 
                    duration: 1.2,
                    ease: [0.65, 0, 0.35, 1], // Smooth easing
                    delay: 0.1 
                  }}
                  className="h-full bg-white origin-left"
                />
              </div>
              
              <div className="flex justify-between items-center text-zinc-500 font-mono text-[10px] uppercase tracking-widest font-semibold">
                <span>Loading</span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  System
                </motion.span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

