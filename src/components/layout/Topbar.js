'use client';

import { Menu, Bell, Search, Sparkles } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { getGreeting } from '@/lib/utils';

export default function Topbar({ onMenuClick }) {
  return (
    <header className="sticky top-0 z-30 glass-strong border-b border-border px-4 lg:px-8 py-4">
      <div className="flex items-center justify-between gap-4">
        {/* Left */}
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden text-muted hover:text-foreground transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
          <div className="hidden sm:block">
            <h2 className="text-lg font-bold">{getGreeting()} 👋</h2>
            <p className="text-xs text-muted">Let&apos;s crush your fitness goals today!</p>
          </div>
        </div>

        {/* Center — Search */}
        <div className="hidden md:flex flex-1 max-w-md mx-4">
          <div className="relative w-full">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
            <input
              type="text"
              placeholder="Search features..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-surface border border-border text-sm text-foreground placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button className="relative p-2 rounded-xl hover:bg-surface transition-colors text-muted hover:text-foreground cursor-pointer">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-danger animate-pulse" />
          </button>
          <div className="w-9 h-9 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-xs cursor-pointer hover:scale-110 transition-transform">
            AJ
          </div>
        </div>
      </div>
    </header>
  );
}
