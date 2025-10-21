"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 px-4 sm:px-8 py-4 flex items-center justify-between backdrop-blur-sm bg-background/30"
    >
      <Link href="/" className="flex items-center gap-3 group">
        {/* Logo - You can replace this with an actual image */}
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center font-bold text-accent text-lg sm:text-xl group-hover:bg-accent group-hover:text-background transition-all duration-300">
          RN
        </div>
        
        {/* Name */}
        <div className="flex flex-col">
          <span className="font-bold text-lg sm:text-xl text-foreground group-hover:text-accent transition-colors">
            Rohit Naik
          </span>
          <span className="text-xs text-foreground/60 hidden sm:block">
            Full Stack Developer
          </span>
        </div>
      </Link>

      {/* Optional: Add navigation links here if you want a top nav bar */}
      <nav className="hidden md:flex items-center gap-6">
        <Link 
          href="/about" 
          className="text-sm text-foreground/80 hover:text-accent transition-colors"
        >
          About
        </Link>
        <Link 
          href="/projects" 
          className="text-sm text-foreground/80 hover:text-accent transition-colors"
        >
          Projects
        </Link>
        <Link 
          href="/activities" 
          className="text-sm text-foreground/80 hover:text-accent transition-colors"
        >
          Activities
        </Link>
        <Link 
          href="/contact" 
          className="text-sm text-foreground/80 hover:text-accent transition-colors"
        >
          Contact
        </Link>
      </nav>
    </motion.header>
  );
};

export default Header;
