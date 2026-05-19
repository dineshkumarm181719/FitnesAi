'use client';

import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-7 rounded-full bg-surface border border-border transition-all duration-500 hover:border-primary/40 focus:outline-none cursor-pointer"
      aria-label="Toggle theme"
    >
      <div
        className={`absolute top-0.5 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-500 ${
          theme === 'dark'
            ? 'left-0.5 bg-gradient-to-r from-indigo-500 to-purple-600'
            : 'left-[calc(100%-26px)] bg-gradient-to-r from-amber-400 to-orange-500'
        }`}
      >
        {theme === 'dark' ? (
          <Moon size={14} className="text-white" />
        ) : (
          <Sun size={14} className="text-white" />
        )}
      </div>
    </button>
  );
}
