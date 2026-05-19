'use client';

import { Settings as SettingsIcon, Palette, Bell, Shield, Globe } from 'lucide-react';
import { Card } from '@/components/ui';
import ThemeToggle from '@/components/layout/ThemeToggle';

export default function SettingsPage() {
  return (
    <div className="space-y-6 max-w-3xl mx-auto animate-fade-in">
      <h1 className="text-2xl font-black flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-500 to-zinc-600 flex items-center justify-center">
          <SettingsIcon size={20} className="text-white" />
        </div>
        Settings
      </h1>

      <Card>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Palette size={20} className="text-accent" />
            <div>
              <p className="font-semibold text-sm">Appearance</p>
              <p className="text-xs text-muted">Toggle dark and light mode</p>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </Card>

      <Card>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Bell size={20} className="text-energy" />
            <div>
              <p className="font-semibold text-sm">Notifications</p>
              <p className="text-xs text-muted">Workout reminders & tips</p>
            </div>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" defaultChecked className="sr-only peer" />
            <div className="w-11 h-6 bg-surface border border-border rounded-full peer peer-checked:bg-primary transition-colors after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full" />
          </label>
        </div>
      </Card>

      <Card>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Globe size={20} className="text-primary" />
            <div>
              <p className="font-semibold text-sm">Units</p>
              <p className="text-xs text-muted">Metric (kg/cm) or Imperial (lb/ft)</p>
            </div>
          </div>
          <select className="px-3 py-1.5 rounded-lg bg-surface border border-border text-sm text-foreground focus:outline-none">
            <option>Metric</option>
            <option>Imperial</option>
          </select>
        </div>
      </Card>

      <Card>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Shield size={20} className="text-emerald-400" />
            <div>
              <p className="font-semibold text-sm">Data Privacy</p>
              <p className="text-xs text-muted">All data stored locally on your device</p>
            </div>
          </div>
          <span className="text-xs text-emerald-400 font-medium">Secured ✓</span>
        </div>
      </Card>
    </div>
  );
}
