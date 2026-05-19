'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Calculator, Utensils, Dumbbell, TrendingUp, MessageCircle, Settings, User, X, Sparkles } from 'lucide-react';
import { NAV_ITEMS } from '@/lib/constants';
import { cn } from '@/lib/utils';

const iconMap = {
  LayoutDashboard,
  Calculator,
  Utensils,
  Dumbbell,
  TrendingUp,
  MessageCircle,
};

export default function Sidebar({ open, onClose }) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={onClose} />
      )}

      <aside
        className={cn(
          'fixed top-0 left-0 z-50 h-full w-72 glass-strong flex flex-col transition-transform duration-300 lg:translate-x-0',
          open ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        {/* Logo */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <Link href="/dashboard" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-lg shadow-primary/25 group-hover:scale-110 transition-transform">
              <Sparkles size={22} className="text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold gradient-text">FitGenie</h1>
              <p className="text-[10px] text-muted font-medium tracking-widest uppercase">AI Fitness</p>
            </div>
          </Link>
          <button onClick={onClose} className="lg:hidden text-muted hover:text-foreground cursor-pointer">
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto">
          <p className="text-[10px] font-semibold text-muted uppercase tracking-widest px-3 mb-3">Main Menu</p>
          {NAV_ITEMS.map((item) => {
            const Icon = iconMap[item.icon];
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={cn(
                  'flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 group',
                  isActive
                    ? 'gradient-primary text-white shadow-lg shadow-primary/20'
                    : 'text-muted hover:text-foreground hover:bg-surface'
                )}
              >
                {Icon && <Icon size={20} className={cn('transition-transform group-hover:scale-110', isActive ? 'text-white' : '')} />}
                <span>{item.label}</span>
                {isActive && (
                  <div className="ml-auto w-2 h-2 rounded-full bg-white animate-pulse" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Bottom section */}
        <div className="p-4 border-t border-border space-y-1.5">
          <Link
            href="/dashboard/profile"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-muted hover:text-foreground hover:bg-surface transition-all"
          >
            <User size={20} />
            <span>Profile</span>
          </Link>
          <Link
            href="/dashboard/settings"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-muted hover:text-foreground hover:bg-surface transition-all"
          >
            <Settings size={20} />
            <span>Settings</span>
          </Link>
        </div>

        {/* User card */}
        <div className="p-4 border-t border-border">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-surface">
            <div className="w-10 h-10 rounded-full gradient-cool flex items-center justify-center text-white font-bold text-sm">
              AJ
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold truncate">Alex Johnson</p>
              <p className="text-xs text-muted truncate">alex@fitgenie.ai</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
