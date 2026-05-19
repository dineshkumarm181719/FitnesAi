'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Mail, Lock, User, Sparkles, ArrowRight, Ruler, Weight } from 'lucide-react';
import { Button, Input } from '@/components/ui';

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', password: '', height: '', weight: '', goal: 'maintenance' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1000));
    const user = { name: form.name, email: form.email, height: Number(form.height), weight: Number(form.weight), goal: form.goal, age: 25, gender: 'male', dietaryPreference: 'non-veg', fitnessLevel: 'intermediate' };
    localStorage.setItem('fitgenie-user', JSON.stringify(user));
    localStorage.setItem('fitgenie-auth', 'true');
    router.push('/dashboard');
  };

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>
      <div className="relative w-full max-w-md animate-scale-in">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shadow-lg shadow-primary/25 group-hover:scale-110 transition-transform">
              <Sparkles size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold gradient-text">FitGenie AI</span>
          </Link>
        </div>
        <div className="glass p-8">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold mb-2">Create Account</h1>
            <p className="text-sm text-muted">Start your fitness transformation today</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input id="reg-name" label="Full Name" placeholder="Alex Johnson" icon={User} value={form.name} onChange={set('name')} required />
            <Input id="reg-email" label="Email" type="email" placeholder="alex@fitgenie.ai" icon={Mail} value={form.email} onChange={set('email')} required />
            <Input id="reg-password" label="Password" type="password" placeholder="••••••••" icon={Lock} value={form.password} onChange={set('password')} required />
            <div className="grid grid-cols-2 gap-4">
              <Input id="reg-height" label="Height (cm)" type="number" placeholder="175" icon={Ruler} value={form.height} onChange={set('height')} />
              <Input id="reg-weight" label="Weight (kg)" type="number" placeholder="78" icon={Weight} value={form.weight} onChange={set('weight')} />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-muted">Fitness Goal</label>
              <select value={form.goal} onChange={set('goal')} className="w-full px-4 py-2.5 rounded-xl bg-surface border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 appearance-none cursor-pointer">
                <option value="weight-loss">🔥 Weight Loss</option>
                <option value="muscle-gain">💪 Muscle Gain</option>
                <option value="maintenance">⚖️ Maintenance</option>
              </select>
            </div>
            <Button type="submit" loading={loading} className="w-full" size="lg">Create Account <ArrowRight size={18} /></Button>
          </form>
          <div className="mt-6 text-center text-sm text-muted">
            Already have an account?{' '}
            <Link href="/login" className="text-primary font-semibold hover:underline">Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
