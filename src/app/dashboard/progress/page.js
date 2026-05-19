'use client';

import { TrendingUp, Scale, Flame, Dumbbell, Target } from 'lucide-react';
import { Card, Badge } from '@/components/ui';
import { DEMO_WEIGHT_DATA, DEMO_BMI_HISTORY, DEMO_WORKOUT_COMPLETION } from '@/lib/constants';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, PieChart, Pie, Cell } from 'recharts';

const monthlyData = [
  { month: 'Jan', weight: 82, calories: 2400, workouts: 12 },
  { month: 'Feb', weight: 80.5, calories: 2200, workouts: 16 },
  { month: 'Mar', weight: 79, calories: 2100, workouts: 18 },
  { month: 'Apr', weight: 78, calories: 2000, workouts: 20 },
  { month: 'May', weight: 77.5, calories: 2150, workouts: 18 },
];

const goalData = [
  { name: 'Weight Lost', value: 4.5, color: '#10b981' },
  { name: 'Remaining', value: 5.5, color: 'var(--border-color)' },
];

const tooltipStyle = { background: 'var(--surface)', border: '1px solid var(--border-color)', borderRadius: '12px', backdropFilter: 'blur(12px)' };

export default function ProgressPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-black flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
            <TrendingUp size={20} className="text-white" />
          </div>
          Progress Analytics
        </h1>
        <p className="text-sm text-muted mt-1">Track your fitness journey with detailed analytics</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <Scale size={20} className="text-primary mb-2" />
          <p className="text-xs text-muted">Weight Lost</p>
          <p className="text-2xl font-black">4.5 <span className="text-sm text-muted">kg</span></p>
          <p className="text-xs text-primary mt-1">↓ 5.5% total</p>
        </Card>
        <Card>
          <Flame size={20} className="text-energy mb-2" />
          <p className="text-xs text-muted">Avg Daily Cal</p>
          <p className="text-2xl font-black">2,100</p>
          <p className="text-xs text-emerald-400 mt-1">On target ✓</p>
        </Card>
        <Card>
          <Dumbbell size={20} className="text-accent mb-2" />
          <p className="text-xs text-muted">Workouts/Month</p>
          <p className="text-2xl font-black">18</p>
          <p className="text-xs text-primary mt-1">↑ 12% vs last</p>
        </Card>
        <Card>
          <Target size={20} className="text-pink-400 mb-2" />
          <p className="text-xs text-muted">Goal Progress</p>
          <p className="text-2xl font-black">45%</p>
          <p className="text-xs text-muted mt-1">5.5 kg to go</p>
        </Card>
      </div>

      {/* Weight + BMI Charts */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <h3 className="font-bold mb-4">Weight Trend</h3>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={monthlyData}>
              <defs>
                <linearGradient id="wg" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="var(--primary)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
              <XAxis dataKey="month" tick={{ fill: 'var(--muted)', fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis domain={['dataMin - 2', 'dataMax + 2']} tick={{ fill: 'var(--muted)', fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={tooltipStyle} />
              <Area type="monotone" dataKey="weight" stroke="var(--primary)" strokeWidth={2} fill="url(#wg)" />
            </AreaChart>
          </ResponsiveContainer>
        </Card>

        <Card>
          <h3 className="font-bold mb-4">BMI History</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={DEMO_BMI_HISTORY}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
              <XAxis dataKey="date" tick={{ fill: 'var(--muted)', fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis domain={[20, 30]} tick={{ fill: 'var(--muted)', fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={tooltipStyle} />
              <Line type="monotone" dataKey="bmi" stroke="var(--accent)" strokeWidth={2} dot={{ fill: 'var(--accent)', r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Calorie + Workout Charts */}
      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <h3 className="font-bold mb-4">Weekly Calories</h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={DEMO_WEIGHT_DATA}>
              <XAxis dataKey="date" tick={{ fill: 'var(--muted)', fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: 'var(--muted)', fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={tooltipStyle} />
              <Bar dataKey="calories" fill="var(--accent)" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card>
          <h3 className="font-bold mb-4">Goal Progress</h3>
          <ResponsiveContainer width="100%" height={180}>
            <PieChart>
              <Pie data={goalData} cx="50%" cy="50%" innerRadius={55} outerRadius={75} dataKey="value" startAngle={90} endAngle={-270}>
                {goalData.map((g, i) => <Cell key={i} fill={g.color} />)}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="text-center -mt-4">
            <p className="text-3xl font-black gradient-text">45%</p>
            <p className="text-xs text-muted">of weight loss goal</p>
          </div>
        </Card>
      </div>

      {/* Workout Completion */}
      <Card>
        <h3 className="font-bold mb-4">Workout Completion This Week</h3>
        <div className="grid grid-cols-7 gap-3">
          {DEMO_WORKOUT_COMPLETION.map((d, i) => (
            <div key={i} className="text-center">
              <div className={`w-12 h-12 mx-auto rounded-xl flex items-center justify-center text-lg mb-2 transition-all ${d.completed ? 'gradient-primary text-white shadow-lg shadow-primary/20' : 'bg-surface border border-border text-muted'}`}>
                {d.completed ? '✓' : '—'}
              </div>
              <p className="text-xs text-muted font-medium">{d.day}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
