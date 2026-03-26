import { motion } from "framer-motion";
import { Cog } from "lucide-react";

interface LogoProps {
  variant?: "full" | "icon" | "compact";
  className?: string;
  showTagline?: boolean;
}

const Logo = ({ variant = "full", className = "", showTagline = true }: LogoProps) => {
  if (variant === "icon") {
    return (
      <div className={`relative ${className}`}>
        <motion.div
          whileHover={{ rotate: 3, scale: 1.05 }}
          className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shadow-industrial relative overflow-hidden"
        >
          {/* Gold accent border */}
          <div className="absolute inset-0 border-2 border-secondary/30 rounded-lg" />
          <span className="text-white font-display text-lg tracking-wider relative z-10">RK</span>
          {/* Wheat accent line */}
          <div className="absolute bottom-1.5 left-2 right-2 h-0.5 bg-secondary/60 rounded-full" />
        </motion.div>
        {/* Animated gear */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1 -right-1"
        >
          <div className="w-4 h-4 bg-secondary rounded-full flex items-center justify-center">
            <Cog className="w-3 h-3 text-primary" />
          </div>
        </motion.div>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <div className="relative">
          <motion.div
            whileHover={{ rotate: 3, scale: 1.05 }}
            className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-industrial relative overflow-hidden"
          >
            <div className="absolute inset-0 border-2 border-secondary/30 rounded-lg" />
            <span className="text-white font-display text-sm tracking-wider relative z-10">RK</span>
            <div className="absolute bottom-1 left-1.5 right-1.5 h-0.5 bg-secondary/60 rounded-full" />
          </motion.div>
        </div>
        <span className="font-display text-lg text-primary tracking-wider">RK ENGINEERING</span>
      </div>
    );
  }

  // Full variant (default)
  return (
    <div className={`flex items-center gap-3 group ${className}`}>
      {/* Logo Mark */}
      <div className="relative">
        <motion.div
          whileHover={{ rotate: 3, scale: 1.05 }}
          className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shadow-industrial relative overflow-hidden"
        >
          {/* Gold accent border */}
          <div className="absolute inset-0 border-2 border-secondary/30 rounded-lg" />
          <span className="text-white font-display text-lg tracking-wider relative z-10">RK</span>
          {/* Wheat accent line */}
          <div className="absolute bottom-1.5 left-2 right-2 h-0.5 bg-secondary/60 rounded-full" />
        </motion.div>
        {/* Animated gear - shows on hover */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <div className="w-4 h-4 bg-secondary rounded-full flex items-center justify-center">
            <Cog className="w-3 h-3 text-primary" />
          </div>
        </motion.div>
      </div>

      {/* Text */}
      <div className="flex flex-col">
        <span className="font-display text-lg text-primary tracking-wider leading-tight">
          RK ENGINEERING
        </span>
        {showTagline && (
          <div className="flex items-center gap-2">
            <div className="h-0.5 w-4 bg-secondary rounded-full" />
            <span className="text-[10px] text-muted-foreground font-body font-medium tracking-wide uppercase">
              Agricultural Machinery
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Logo;
