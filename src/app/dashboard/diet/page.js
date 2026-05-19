'use client';

import { useState } from 'react';
import { Utensils, Sparkles, Clock, Flame } from 'lucide-react';
import { Card, Button, Badge } from '@/components/ui';
import { FITNESS_GOALS, DIETARY_PREFERENCES, DEMO_MEAL_PLAN } from '@/lib/constants';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

export default function DietPage() {
  const [goal, setGoal] = useState('muscle-gain');
  const [diet, setDiet] = useState('non-veg');
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState(null);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/ai/diet', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ goal, diet, weight: 78, height: 175, age: 28 }) });
      const data = await res.json();
      if (data.plan) setPlan(data.plan);
      else setPlan(DEMO_MEAL_PLAN);
    } catch {
      setPlan(DEMO_MEAL_PLAN);
    }
    setLoading(false);
  };

  const macroData = plan ? [
    { name: 'Protein', value: plan.protein, color: '#10b981' },
    { name: 'Carbs', value: plan.carbs, color: '#6366f1' },
    { name: 'Fats', value: plan.fats, color: '#f59e0b' },
  ] : [];

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-black flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
            <Utensils size={20} className="text-white" />
          </div>
          AI Diet Planner
        </h1>
        <p className="text-sm text-muted mt-1">Get personalized meal plans powered by AI</p>
      </div>

      {/* Config */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <h2 className="font-bold mb-4">Select Your Goal</h2>
          <div className="space-y-3">
            {FITNESS_GOALS.map((g) => (
              <button key={g.value} onClick={() => setGoal(g.value)}
                className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all cursor-pointer ${goal === g.value ? 'border-primary bg-primary/10' : 'border-border bg-surface hover:border-primary/30'}`}
              >
                <span className="text-2xl">{g.icon}</span>
                <div className="text-left">
                  <p className="font-semibold text-sm">{g.label}</p>
                  <p className="text-xs text-muted">{g.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </Card>

        <Card>
          <h2 className="font-bold mb-4">Dietary Preference</h2>
          <div className="space-y-3 mb-6">
            {DIETARY_PREFERENCES.map((d) => (
              <button key={d.value} onClick={() => setDiet(d.value)}
                className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all cursor-pointer ${diet === d.value ? 'border-primary bg-primary/10' : 'border-border bg-surface hover:border-primary/30'}`}
              >
                <span className="text-2xl">{d.icon}</span>
                <p className="font-semibold text-sm">{d.label}</p>
              </button>
            ))}
          </div>
          <Button onClick={handleGenerate} loading={loading} className="w-full" size="lg">
            <Sparkles size={18} /> Generate Meal Plan
          </Button>
        </Card>
      </div>

      {/* Results */}
      {plan && (
        <div className="space-y-6 animate-fade-in-up">
          {/* Overview */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="text-center">
              <Flame size={20} className="text-energy mx-auto mb-1" />
              <p className="text-xs text-muted">Daily Calories</p>
              <p className="text-2xl font-black">{plan.calories}</p>
            </Card>
            {macroData.map((m) => (
              <Card key={m.name} className="text-center">
                <div className="w-3 h-3 rounded-full mx-auto mb-1" style={{ background: m.color }} />
                <p className="text-xs text-muted">{m.name}</p>
                <p className="text-2xl font-black">{m.value}<span className="text-sm text-muted">g</span></p>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Macro Pie */}
            <Card>
              <h3 className="font-bold mb-4">Nutrition Breakdown</h3>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie data={macroData} cx="50%" cy="50%" innerRadius={50} outerRadius={80} dataKey="value" paddingAngle={5}>
                    {macroData.map((m, i) => <Cell key={i} fill={m.color} />)}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex justify-center gap-4 mt-2">
                {macroData.map((m) => (
                  <div key={m.name} className="flex items-center gap-1.5 text-xs">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: m.color }} />
                    <span className="text-muted">{m.name}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Meals */}
            <div className="lg:col-span-2 space-y-4">
              <h3 className="font-bold">Daily Meal Plan</h3>
              {plan.meals.map((meal, i) => (
                <Card key={i} className="hover:-translate-y-0.5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <Badge variant={i % 2 === 0 ? 'default' : 'accent'}>{meal.type}</Badge>
                      <h4 className="font-bold mt-2">{meal.name}</h4>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted flex items-center gap-1"><Clock size={12} /> {meal.time}</p>
                      <p className="text-sm font-bold text-energy">{meal.calories} kcal</p>
                    </div>
                  </div>
                  <div className="flex gap-4 text-xs text-muted mb-3">
                    <span>P: {meal.protein}g</span>
                    <span>C: {meal.carbs}g</span>
                    <span>F: {meal.fats}g</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {meal.items.map((item, j) => (
                      <span key={j} className="px-2 py-1 rounded-lg bg-surface text-xs text-muted border border-border">{item}</span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
