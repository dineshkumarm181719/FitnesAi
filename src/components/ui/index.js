'use client';

import { cn } from '@/lib/utils';

export function Button({ children, variant = 'primary', size = 'md', className, disabled, loading, ...props }) {
  const base = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer';

  const variants = {
    primary: 'bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.02] focus:ring-primary',
    secondary: 'glass border border-border text-foreground hover:bg-surface-hover focus:ring-accent',
    ghost: 'text-foreground hover:bg-surface focus:ring-accent',
    danger: 'bg-gradient-to-r from-red-500 to-rose-600 text-white hover:shadow-lg hover:shadow-red-500/25 hover:scale-[1.02] focus:ring-red-500',
    energy: 'bg-gradient-to-r from-energy to-orange-500 text-white hover:shadow-lg hover:shadow-energy/25 hover:scale-[1.02] focus:ring-energy',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-7 py-3.5 text-base gap-2.5',
    xl: 'px-9 py-4 text-lg gap-3',
  };

  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      )}
      {children}
    </button>
  );
}

export function Card({ children, className, hover = true, ...props }) {
  return (
    <div
      className={cn(
        'glass p-6 transition-all duration-300',
        hover && 'hover:shadow-lg hover:border-primary/20',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function Input({ label, error, icon: Icon, className, id, ...props }) {
  return (
    <div className="space-y-1.5">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-muted">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted">
            <Icon size={18} />
          </div>
        )}
        <input
          id={id}
          className={cn(
            'w-full px-4 py-2.5 rounded-xl bg-surface border border-border text-foreground placeholder:text-muted/60 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary',
            Icon && 'pl-10',
            error && 'border-danger focus:ring-danger/50',
            className
          )}
          {...props}
        />
      </div>
      {error && <p className="text-xs text-danger">{error}</p>}
    </div>
  );
}

export function Badge({ children, variant = 'default', className }) {
  const variants = {
    default: 'bg-primary/15 text-primary',
    accent: 'bg-accent/15 text-accent',
    energy: 'bg-energy/15 text-energy',
    danger: 'bg-danger/15 text-danger',
    success: 'bg-emerald-500/15 text-emerald-400',
  };

  return (
    <span className={cn('inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold', variants[variant], className)}>
      {children}
    </span>
  );
}

export function Loader({ size = 'md' }) {
  const sizes = { sm: 'h-5 w-5', md: 'h-8 w-8', lg: 'h-12 w-12' };
  return (
    <div className="flex items-center justify-center p-8">
      <div className={cn('animate-spin rounded-full border-2 border-border border-t-primary', sizes[size])} />
    </div>
  );
}

export function ProgressRing({ progress, size = 80, strokeWidth = 6, color = 'var(--primary)' }) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg width={size} height={size} className="progress-ring -rotate-90">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="var(--border-color)"
        strokeWidth={strokeWidth}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Select({ label, options, id, className, ...props }) {
  return (
    <div className="space-y-1.5">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-muted">
          {label}
        </label>
      )}
      <select
        id={id}
        className={cn(
          'w-full px-4 py-2.5 rounded-xl bg-surface border border-border text-foreground transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary appearance-none cursor-pointer',
          className
        )}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
