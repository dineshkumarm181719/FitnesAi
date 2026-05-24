'use client';

import Link from 'next/link';
import { Sparkles, Calculator, Utensils, Dumbbell, TrendingUp, MessageCircle, Droplets, Moon as MoonIcon, Footprints, ArrowRight, Star, ChevronRight, Heart, Shield, Zap, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui';
import ThemeToggle from '@/components/layout/ThemeToggle';

const features = [
  { icon: Calculator, title: 'BMI Calculator', desc: 'Instantly calculate your BMI and track your body composition journey over time.', color: 'from-blue-500 to-cyan-500' },
  { icon: Utensils, title: 'AI Diet Planner', desc: 'Get personalized meal plans tailored to your goals, preferences, and nutritional needs.', color: 'from-emerald-500 to-teal-500' },
  { icon: Dumbbell, title: 'Workout Planner', desc: 'AI-generated workout routines with exercises, sets, reps, and rest periods.', color: 'from-purple-500 to-indigo-500' },
  { icon: TrendingUp, title: 'Progress Analytics', desc: 'Track your weight, calories, BMI, and workout completion with beautiful charts.', color: 'from-amber-500 to-orange-500' },
  { icon: MessageCircle, title: 'AI Chat Assistant', desc: '24/7 fitness chatbot for diet tips, workout advice, motivation, and health guidance.', color: 'from-pink-500 to-rose-500' },
  { icon: Droplets, title: 'Health Trackers', desc: 'Track water intake, steps, sleep quality, and set daily reminders.', color: 'from-sky-500 to-blue-500' },
];



export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* ═══ NAVBAR ═══ */}
      <nav className="fixed top-0 w-full z-50 glass-strong border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-lg shadow-primary/25 group-hover:scale-110 transition-transform">
              <Sparkles size={22} className="text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">FitGenie AI</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-muted hover:text-foreground transition-colors">Features</a>

            <a href="#pricing" className="text-sm text-muted hover:text-foreground transition-colors">Pricing</a>
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link href="/login">
              <Button variant="ghost" size="sm">Log In</Button>
            </Link>
            <Link href="/register">
              <Button size="sm">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* ═══ HERO ═══ */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-energy/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 mb-8 animate-fade-in">
            <Sparkles size={14} className="text-primary" />
            <span className="text-sm font-medium text-primary">AI-Powered Fitness Revolution</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 animate-fade-in-up">
            Your Smart
            <span className="block gradient-text">Fitness Companion</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted mb-10 animate-fade-in-up delay-2">
            Get personalized AI-powered diet plans, workout routines, and real-time health insights.
            Transform your body with science-backed recommendations.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up delay-3">
            <Link href="/register">
              <Button size="xl" className="min-w-[200px]">
                Start Free <ArrowRight size={20} />
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button variant="secondary" size="xl" className="min-w-[200px]">
                Live Demo <ChevronRight size={20} />
              </Button>
            </Link>
          </div>


        </div>
      </section>

      {/* ═══ FEATURES ═══ */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent/20 mb-4">
              <Zap size={14} className="text-accent" />
              <span className="text-sm font-medium text-accent">Powerful Features</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black mb-4">Everything You Need to <span className="gradient-text">Transform</span></h2>
            <p className="text-muted max-w-xl mx-auto">AI-powered tools designed to make your fitness journey smarter, easier, and more effective.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div
                  key={i}
                  className="glass p-8 group hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={26} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>



      {/* ═══ PRICING ═══ */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">Simple <span className="gradient-text">Pricing</span></h2>
            <p className="text-muted">Start free, upgrade when you need more.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Free */}
            <div className="glass p-8">
              <h3 className="text-xl font-bold mb-2">Free</h3>
              <p className="text-muted text-sm mb-4">Perfect to get started</p>
              <p className="text-4xl font-black mb-6">$0<span className="text-lg text-muted font-normal">/mo</span></p>
              <ul className="space-y-3 mb-8">
                {['BMI Calculator', 'Basic Diet Plan', 'Basic Workout Plan', '5 AI Chats/day', 'Progress Tracking'].map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted">
                    <CheckCircle2 size={16} className="text-primary flex-shrink-0" />{f}
                  </li>
                ))}
              </ul>
              <Link href="/register">
                <Button variant="secondary" className="w-full">Get Started</Button>
              </Link>
            </div>

            {/* Pro */}
            <div className="glass p-8 border-primary/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 px-4 py-1 bg-gradient-to-r from-primary to-accent text-white text-xs font-bold rounded-bl-xl">
                POPULAR
              </div>
              <h3 className="text-xl font-bold mb-2">Pro</h3>
              <p className="text-muted text-sm mb-4">For serious fitness goals</p>
              <p className="text-4xl font-black mb-6 gradient-text">$9<span className="text-lg text-muted font-normal">/mo</span></p>
              <ul className="space-y-3 mb-8">
                {['Everything in Free', 'Unlimited AI Chats', 'Advanced Meal Plans', 'Custom Workout Splits', 'Sleep & Water Tracking', 'AI Body Predictions', 'Priority Support'].map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted">
                    <CheckCircle2 size={16} className="text-primary flex-shrink-0" />{f}
                  </li>
                ))}
              </ul>
              <Link href="/register">
                <Button className="w-full">Start Pro Trial</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center glass p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10" />
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">Ready to Transform Your <span className="gradient-text">Fitness Journey</span>?</h2>
            <p className="text-muted mb-8 max-w-xl mx-auto">Join thousands of users who have already achieved their fitness goals with FitGenie AI.</p>
            <Link href="/register">
              <Button size="xl">
                Get Started for Free <ArrowRight size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
              <Sparkles size={16} className="text-white" />
            </div>
            <span className="font-bold gradient-text">FitGenie AI</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">Contact</a>
          </div>
          <p className="text-xs text-muted">&copy; 2025 FitGenie AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
