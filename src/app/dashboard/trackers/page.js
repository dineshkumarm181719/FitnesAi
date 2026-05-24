'use client';

import { Droplets, Footprints, Moon as MoonIcon, Plus, Minus } from 'lucide-react';
import { Card, Button } from '@/components/ui';
import { useUser } from '@/context/UserContext';

export default function TrackersPage() {
  const { fitnessData, updateFitnessData } = useUser();

  const handleUpdate = (key, value) => {
    updateFitnessData({ [key]: Math.max(0, fitnessData[key] + value) });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-black flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center shadow-lg shadow-sky-500/20">
            <Droplets size={20} className="text-white" />
          </div>
          Health Trackers
        </h1>
        <p className="text-sm text-muted mt-1">Track your daily water intake, steps, and sleep quality.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Water */}
        <Card className="text-center group border-sky-500/20 hover:border-sky-500/50 transition-colors">
          <div className="w-14 h-14 mx-auto bg-sky-500/10 text-sky-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Droplets size={24} />
          </div>
          <h2 className="font-bold mb-1">Water Intake</h2>
          <p className="text-sm text-muted mb-6">Goal: 8 glasses</p>
          
          <div className="flex items-center justify-center gap-6 mb-6">
            <Button variant="outline" onClick={() => handleUpdate('waterIntake', -1)} className="rounded-full w-10 h-10 p-0 flex items-center justify-center cursor-pointer">
              <Minus size={16} />
            </Button>
            <div className="text-4xl font-black text-sky-500 w-16">
              {fitnessData.waterIntake}<span className="text-lg font-normal text-muted">/8</span>
            </div>
            <Button variant="outline" onClick={() => handleUpdate('waterIntake', 1)} className="rounded-full w-10 h-10 p-0 flex items-center justify-center cursor-pointer">
              <Plus size={16} />
            </Button>
          </div>
          <div className="h-3 bg-surface rounded-full overflow-hidden shadow-inner">
            <div className="h-full bg-gradient-to-r from-sky-400 to-blue-500 transition-all duration-500" style={{ width: `${Math.min(100, (fitnessData.waterIntake / 8) * 100)}%` }} />
          </div>
        </Card>

        {/* Steps */}
        <Card className="text-center group border-emerald-500/20 hover:border-emerald-500/50 transition-colors">
          <div className="w-14 h-14 mx-auto bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Footprints size={24} />
          </div>
          <h2 className="font-bold mb-1">Daily Steps</h2>
          <p className="text-sm text-muted mb-6">Goal: 10,000 steps</p>
          
          <div className="flex items-center justify-center gap-6 mb-6">
            <Button variant="outline" onClick={() => handleUpdate('steps', -500)} className="rounded-full w-10 h-10 p-0 flex items-center justify-center cursor-pointer">
              <Minus size={16} />
            </Button>
            <div className="text-4xl font-black text-emerald-500 min-w-24">
              {fitnessData.steps}
            </div>
            <Button variant="outline" onClick={() => handleUpdate('steps', 500)} className="rounded-full w-10 h-10 p-0 flex items-center justify-center cursor-pointer">
              <Plus size={16} />
            </Button>
          </div>
          <div className="h-3 bg-surface rounded-full overflow-hidden shadow-inner">
            <div className="h-full bg-gradient-to-r from-emerald-400 to-teal-500 transition-all duration-500" style={{ width: `${Math.min(100, (fitnessData.steps / 10000) * 100)}%` }} />
          </div>
        </Card>

        {/* Sleep */}
        <Card className="text-center group border-indigo-500/20 hover:border-indigo-500/50 transition-colors">
          <div className="w-14 h-14 mx-auto bg-indigo-500/10 text-indigo-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <MoonIcon size={24} />
          </div>
          <h2 className="font-bold mb-1">Sleep Hours</h2>
          <p className="text-sm text-muted mb-6">Goal: 8 hours</p>
          
          <div className="flex items-center justify-center gap-6 mb-6">
            <Button variant="outline" onClick={() => handleUpdate('sleepHours', -0.5)} className="rounded-full w-10 h-10 p-0 flex items-center justify-center cursor-pointer">
              <Minus size={16} />
            </Button>
            <div className="text-4xl font-black text-indigo-500 w-20">
              {fitnessData.sleepHours}<span className="text-lg font-normal text-muted">h</span>
            </div>
            <Button variant="outline" onClick={() => handleUpdate('sleepHours', 0.5)} className="rounded-full w-10 h-10 p-0 flex items-center justify-center cursor-pointer">
              <Plus size={16} />
            </Button>
          </div>
          <div className="h-3 bg-surface rounded-full overflow-hidden shadow-inner">
            <div className="h-full bg-gradient-to-r from-indigo-400 to-purple-500 transition-all duration-500" style={{ width: `${Math.min(100, (fitnessData.sleepHours / 8) * 100)}%` }} />
          </div>
        </Card>
      </div>
    </div>
  );
}
