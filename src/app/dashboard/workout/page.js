'use client';

import { useState } from 'react';
import { Dumbbell, Sparkles, Clock, Flame, RotateCcw, Target } from 'lucide-react';
import { Card, Button, Badge } from '@/components/ui';
import { FITNESS_GOALS, FITNESS_LEVELS, WORKOUT_DURATIONS, generateMockWorkoutPlan } from '@/lib/constants';

export default function WorkoutPage() {
  const [goal, setGoal] = useState('muscle-gain');
  const [level, setLevel] = useState('intermediate');
  const [duration, setDuration] = useState('60');
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState(null);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/ai/workout', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ goal, level, duration }) });
      const data = await res.json();
      if (data.plan) setPlan(data.plan);
      else setPlan(generateMockWorkoutPlan(goal, level, duration));
    } catch {
      setPlan(generateMockWorkoutPlan(goal, level, duration));
    }
    setLoading(false);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-black flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center">
            <Dumbbell size={20} className="text-white" />
          </div>
          AI Workout Planner
        </h1>
        <p className="text-sm text-muted mt-1">Get personalized workout plans powered by AI</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Goal */}
        <Card>
          <h2 className="font-bold mb-4">Your Goal</h2>
          <div className="space-y-2">
            {FITNESS_GOALS.map((g) => (
              <button key={g.value} onClick={() => setGoal(g.value)}
                className={`w-full flex items-center gap-3 p-3 rounded-xl border text-left transition-all cursor-pointer ${goal === g.value ? 'border-primary bg-primary/10' : 'border-border bg-surface hover:border-primary/30'}`}
              >
                <span className="text-xl">{g.icon}</span>
                <div>
                  <p className="font-semibold text-sm">{g.label}</p>
                  <p className="text-[10px] text-muted">{g.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </Card>

        {/* Level */}
        <Card>
          <h2 className="font-bold mb-4">Fitness Level</h2>
          <div className="space-y-2">
            {FITNESS_LEVELS.map((l) => (
              <button key={l.value} onClick={() => setLevel(l.value)}
                className={`w-full flex items-center gap-3 p-3 rounded-xl border text-left transition-all cursor-pointer ${level === l.value ? 'border-accent bg-accent/10' : 'border-border bg-surface hover:border-accent/30'}`}
              >
                <span className="text-xl">{l.icon}</span>
                <div>
                  <p className="font-semibold text-sm">{l.label}</p>
                  <p className="text-[10px] text-muted">{l.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </Card>

        {/* Duration + Generate */}
        <Card>
          <h2 className="font-bold mb-4">Workout Duration</h2>
          <div className="grid grid-cols-2 gap-2 mb-6">
            {WORKOUT_DURATIONS.map((d) => (
              <button key={d.value} onClick={() => setDuration(d.value)}
                className={`p-3 rounded-xl border text-sm font-medium transition-all cursor-pointer ${duration === d.value ? 'border-energy bg-energy/10 text-energy' : 'border-border bg-surface text-muted hover:border-energy/30'}`}
              >
                <Clock size={16} className="mx-auto mb-1" />
                {d.label}
              </button>
            ))}
          </div>
          <Button onClick={handleGenerate} loading={loading} className="w-full" size="lg">
            <Sparkles size={18} /> Generate Workout
          </Button>
        </Card>
      </div>

      {/* Workout Plan */}
      {plan && (
        <div className="animate-fade-in-up space-y-6">
          {/* Overview */}
          <Card className="gradient-primary text-white">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-black">{plan.name}</h2>
                <p className="text-white/70 text-sm">{plan.exercises.length} exercises • {plan.difficulty}</p>
              </div>
              <div className="flex gap-6">
                <div className="text-center">
                  <Clock size={18} className="mx-auto mb-1" />
                  <p className="text-sm font-bold">{plan.duration}</p>
                </div>
                <div className="text-center">
                  <Flame size={18} className="mx-auto mb-1" />
                  <p className="text-sm font-bold">{plan.caloriesBurned} cal</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Exercises */}
          <div className="grid md:grid-cols-2 gap-4">
            {plan.exercises.map((ex, i) => (
              <Card key={i} className="group hover:-translate-y-0.5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                    {ex.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-bold text-sm">{ex.name}</h3>
                      <Badge variant="accent">{ex.muscle}</Badge>
                    </div>
                    <div className="flex gap-4 text-xs text-muted mt-2">
                      <span className="flex items-center gap-1"><Target size={12} /> {ex.sets} sets</span>
                      <span className="flex items-center gap-1"><RotateCcw size={12} /> {ex.reps} reps</span>
                      <span className="flex items-center gap-1"><Clock size={12} /> {ex.rest} rest</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
