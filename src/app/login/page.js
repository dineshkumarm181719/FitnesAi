'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Mail, Lock, Sparkles, ArrowRight } from 'lucide-react';
import { Button, Input } from '@/components/ui';

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1000));
    localStorage.setItem('fitgenie-auth', 'true');
    router.push('/dashboard');
  };

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
            <h1 className="text-2xl font-bold mb-2">Welcome Back</h1>
            <p className="text-sm text-muted">Sign in to continue your fitness journey</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input id="login-email" label="Email" type="email" placeholder="alex@fitgenie.ai" icon={Mail} value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} required />
            <Input id="login-password" label="Password" type="password" placeholder="••••••••" icon={Lock} value={form.password} onChange={(e) => setForm({...form, password: e.target.value})} required />
            <Button type="submit" loading={loading} className="w-full" size="lg">Sign In <ArrowRight size={18} /></Button>
          </form>
          <div className="mt-6 text-center text-sm text-muted">
            Don&apos;t have an account?{' '}
            <Link href="/register" className="text-primary font-semibold hover:underline">Sign Up</Link>
          </div>
        </div>
        <p className="text-center text-xs text-muted mt-6">Demo: Enter any email &amp; password</p>
      </div>
    </div>
  );
}
