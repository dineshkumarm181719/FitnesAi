'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Mail, Lock, Sparkles, ArrowRight } from 'lucide-react';
import { Button, Input } from '@/components/ui';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { getDoc, doc } from 'firebase/firestore';
import { auth, db } from '@/lib/firebase';
import { useUser } from '@/context/UserContext';

async function loadUserProfileFromFirestore(userId) {
  try {
    const userDoc = await getDoc(doc(db, 'users', userId));
    if (userDoc.exists()) {
      return userDoc.data();
    }
    return null;
  } catch (fetchError) {
    console.warn('Firestore user load skipped due to permissions or connectivity:', fetchError);
    return null;
  }
}

export default function LoginPage() {
  const router = useRouter();
  const { updateUser } = useUser();
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      // Sign in with Firebase
      const userCredential = await signInWithEmailAndPassword(auth, form.email, form.password);
      const user = userCredential.user;

      // Fetch user data from Firestore if available, otherwise fall back to auth profile.
      let localUser = {
        uid: user.uid,
        email: user.email,
        name: user.displayName || '',
      };

      const firestoreUser = await loadUserProfileFromFirestore(user.uid);
      if (firestoreUser) {
        localUser = firestoreUser;
      }

      if (typeof window !== 'undefined') {
        localStorage.setItem('fitgenie-user', JSON.stringify(localUser));
        localStorage.setItem('fitgenie-auth', 'true');
      }
      updateUser(localUser);
      router.push('/dashboard');
    } catch (err) {
      setError(err.message || 'Failed to sign in');
      setLoading(false);
    }
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
          {error && <div className="bg-red-500/10 border border-red-500/50 text-red-500 text-sm p-3 rounded-lg mb-4">{error}</div>}
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
      </div>
    </div>
  );
}
