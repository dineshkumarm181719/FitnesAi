'use client';

import Link from 'next/link';
import { Activity, Calculator, Utensils, Dumbbell, TrendingUp, MessageCircle, Droplets, Footprints, Moon, Flame, Target, Award } from 'lucide-react';
import { Card, Badge, ProgressRing } from '@/components/ui';
import { useUser } from '@/context/UserContext';
import { calculateBMI, getBMICategory } from '@/lib/utils';
import { DEMO_WEIGHT_DATA } from '@/lib/constants';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const quickActions = [
  { href: '/dashboard/bmi', icon: Calculator, label: 'BMI Calculator', color: 'from-blue-500 to-cyan-500' },
  { href: '/dashboard/diet', icon: Utensils, label: 'Diet Plan', color: 'from-emerald-500 to-teal-500' },
  { href: '/dashboard/workout', icon: Dumbbell, label: 'Workout Plan', color: 'from-purple-500 to-indigo-500' },
  { href: '/dashboard/chat', icon: MessageCircle, label: 'AI Chat', color: 'from-pink-500 to-rose-500' },
];

export default function DashboardPage() {
  const { user, fitnessData } = useUser();

  const bmi = user ? calculateBMI(user.weight || 78, user.height || 175) : 25.5;
  const bmiCat = getBMICategory(bmi);
  const waterPercent = ((fitnessData?.waterIntake || 5) / 8) * 100;

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Quick Action Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {quickActions.map((action, i) => {
          const Icon = action.icon;
          return (
            <Link key={i} href={action.href}>
              <Card className="group cursor-pointer hover:-translate-y-1 transition-all duration-300">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${action.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-lg`}>
                  <Icon size={22} className="text-white" />
                </div>
                <p className="font-semibold text-sm">{action.label}</p>
                <p className="text-xs text-muted mt-1">Open →</p>
              </Card>
            </Link>
          );
        })}
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs text-muted font-medium">Current BMI</p>
            <Badge variant={bmi < 25 ? 'success' : 'energy'}>{bmiCat.label}</Badge>
          </div>
          <p className="text-3xl font-black">{bmi}</p>
          <p className="text-xs text-primary mt-1">↓ 0.3 from last week</p>
        </Card>

        <Card>
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs text-muted font-medium">Daily Calories</p>
            <Flame size={18} className="text-energy" />
          </div>
          <p className="text-3xl font-black">2,100</p>
          <p className="text-xs text-muted mt-1">Target: 2,200 kcal</p>
        </Card>

        <Card>
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs text-muted font-medium">Workout Streak</p>
            <Award size={18} className="text-primary" />
          </div>
          <p className="text-3xl font-black">{fitnessData?.streak || 5}</p>
          <p className="text-xs text-primary mt-1">🔥 days in a row!</p>
        </Card>

        <Card>
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs text-muted font-medium">Weight</p>
            <Target size={18} className="text-accent" />
          </div>
          <p className="text-3xl font-black">{user?.weight || 78} <span className="text-lg text-muted">kg</span></p>
          <p className="text-xs text-emerald-400 mt-1">↓ 0.8 this week</p>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <h3 className="font-bold mb-4">Weekly Weight Trend</h3>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={DEMO_WEIGHT_DATA}>
              <defs>
                <linearGradient id="weightGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="var(--primary)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="date" tick={{ fill: 'var(--muted)', fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis domain={['dataMin - 1', 'dataMax + 1']} tick={{ fill: 'var(--muted)', fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-color)', borderRadius: '12px', backdropFilter: 'blur(12px)' }} />
              <Area type="monotone" dataKey="weight" stroke="var(--primary)" strokeWidth={2} fill="url(#weightGrad)" />
            </AreaChart>
          </ResponsiveContainer>
        </Card>

        <Card>
          <h3 className="font-bold mb-4">Calorie Intake</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={DEMO_WEIGHT_DATA}>
              <XAxis dataKey="date" tick={{ fill: 'var(--muted)', fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: 'var(--muted)', fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-color)', borderRadius: '12px' }} />
              <Bar dataKey="calories" fill="var(--accent)" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Trackers Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Water */}
        <Card className="text-center">
          <Droplets size={24} className="text-blue-400 mx-auto mb-2" />
          <p className="text-xs text-muted mb-1">Water Intake</p>
          <div className="relative mx-auto my-2">
            <ProgressRing progress={waterPercent} size={64} color="#60a5fa" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm font-bold">{fitnessData?.waterIntake || 5}/8</span>
            </div>
          </div>
          <p className="text-xs text-muted">glasses</p>
        </Card>

        {/* Steps */}
        <Card className="text-center">
          <Footprints size={24} className="text-emerald-400 mx-auto mb-2" />
          <p className="text-xs text-muted mb-1">Steps Today</p>
          <p className="text-2xl font-black">{(fitnessData?.steps || 6847).toLocaleString()}</p>
          <p className="text-xs text-muted">/ 10,000</p>
        </Card>

        {/* Sleep */}
        <Card className="text-center">
          <Moon size={24} className="text-indigo-400 mx-auto mb-2" />
          <p className="text-xs text-muted mb-1">Sleep</p>
          <p className="text-2xl font-black">{fitnessData?.sleepHours || 7.5}h</p>
          <p className="text-xs text-muted">last night</p>
        </Card>

        {/* Workouts */}
        <Card className="text-center">
          <Activity size={24} className="text-primary mx-auto mb-2" />
          <p className="text-xs text-muted mb-1">Workouts</p>
          <p className="text-2xl font-black">{fitnessData?.workoutsCompleted || 18}</p>
          <p className="text-xs text-muted">this month</p>
        </Card>
      </div>
    </div>
  );
}
