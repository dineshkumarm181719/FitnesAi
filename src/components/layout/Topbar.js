'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Menu, Bell, Search, Sparkles } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { getGreeting } from '@/lib/utils';
import { useUser } from '@/context/UserContext';
import Link from 'next/link';
import { NAV_ITEMS } from '@/lib/constants';

const ALL_ROUTES = [
  ...NAV_ITEMS,
  { href: '/dashboard/profile', label: 'Profile' },
  { href: '/dashboard/settings', label: 'Settings' }
];

export default function Topbar({ onMenuClick }) {
  const { user } = useUser();
  const initials = user?.name ? user.name.split(' ').map(n => n[0]).join('').slice(0, 2) : 'AJ';
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef(null);

  const filteredRoutes = ALL_ROUTES.filter(route => 
    route.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (href) => {
    setSearchQuery('');
    setIsSearchOpen(false);
    router.push(href);
  };

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
        <div className="hidden md:flex flex-1 max-w-md mx-4" ref={searchRef}>
          <div className="relative w-full">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setIsSearchOpen(true);
              }}
              onFocus={() => setIsSearchOpen(true)}
              placeholder="Search features..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-surface border border-border text-sm text-foreground placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            
            {/* Search Dropdown */}
            {isSearchOpen && searchQuery && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-surface border border-border rounded-xl shadow-lg shadow-black/10 overflow-hidden z-50">
                {filteredRoutes.length > 0 ? (
                  <div className="py-2">
                    {filteredRoutes.map((route, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSearch(route.href)}
                        className="w-full text-left px-4 py-2 text-sm hover:bg-surface-hover text-foreground transition-colors cursor-pointer"
                      >
                        {route.label}
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="px-4 py-3 text-sm text-muted text-center">
                    No features found
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button className="relative p-2 rounded-xl hover:bg-surface transition-colors text-muted hover:text-foreground cursor-pointer">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-danger animate-pulse" />
          </button>
          <Link href="/dashboard/profile">
            <div className="w-9 h-9 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-xs cursor-pointer hover:scale-110 transition-transform">
              {initials}
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
