'use client';

import { useState } from 'react';
import { Calculator, Ruler, Weight, User, Activity } from 'lucide-react';
import { Card, Button, Input, Badge } from '@/components/ui';
import { calculateBMI, getBMICategory } from '@/lib/utils';
import { BMI_CATEGORIES, DEMO_BMI_HISTORY } from '@/lib/constants';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

export default function BMIPage() {
  const [form, setForm] = useState({ height: '', weight: '', age: '', gender: 'male' });
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState(DEMO_BMI_HISTORY);

  const handleCalculate = (e) => {
    e.preventDefault();
    if (!form.height || !form.weight) return;
    const bmi = calculateBMI(Number(form.weight), Number(form.height));
    const cat = getBMICategory(bmi);
    setResult({ bmi, ...cat });
    const entry = { date: new Date().toISOString().slice(0, 10), bmi, weight: Number(form.weight) };
    setHistory([...history, entry]);
  };

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-black flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
            <Calculator size={20} className="text-white" />
          </div>
          BMI Calculator
        </h1>
        <p className="text-sm text-muted mt-1">Calculate your Body Mass Index and track changes over time</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Form */}
        <Card>
          <h2 className="font-bold mb-4">Enter Your Details</h2>
          <form onSubmit={handleCalculate} className="space-y-4">
            <Input id="bmi-height" label="Height (cm)" type="number" placeholder="175" icon={Ruler} value={form.height} onChange={set('height')} required />
            <Input id="bmi-weight" label="Weight (kg)" type="number" placeholder="78" icon={Weight} value={form.weight} onChange={set('weight')} required />
            <Input id="bmi-age" label="Age" type="number" placeholder="28" icon={User} value={form.age} onChange={set('age')} />
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-muted">Gender</label>
              <div className="grid grid-cols-2 gap-3">
                {['male', 'female'].map((g) => (
                  <button key={g} type="button" onClick={() => setForm({ ...form, gender: g })}
                    className={`py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer border ${form.gender === g ? 'gradient-primary text-white border-transparent' : 'bg-surface border-border text-muted hover:text-foreground'}`}
                  >{g === 'male' ? '👨 Male' : '👩 Female'}</button>
                ))}
              </div>
            </div>
            <Button type="submit" className="w-full" size="lg">Calculate BMI</Button>
          </form>
        </Card>

        {/* Result */}
        <Card>
          <h2 className="font-bold mb-4">Your Result</h2>
          {result ? (
            <div className="text-center animate-scale-in">
              <div className="relative w-40 h-40 mx-auto mb-6">
                <div className="absolute inset-0 rounded-full" style={{ background: `conic-gradient(${result.color} ${(result.bmi / 40) * 360}deg, var(--border-color) 0deg)` }} />
                <div className="absolute inset-3 rounded-full bg-background flex items-center justify-center flex-col">
                  <span className="text-4xl font-black">{result.bmi}</span>
                  <span className="text-xs text-muted">BMI</span>
                </div>
              </div>
              <Badge variant={result.bmi < 25 ? 'success' : result.bmi < 30 ? 'energy' : 'danger'} className="text-base px-4 py-2">{result.label}</Badge>
              <p className="text-sm text-muted mt-4">{BMI_CATEGORIES.find(c => result.bmi >= c.min && result.bmi < c.max)?.advice}</p>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-64 text-muted">
              <Activity size={48} className="mb-4 opacity-30" />
              <p className="text-sm">Enter your details to see your BMI</p>
            </div>
          )}

          {/* BMI Scale */}
          <div className="mt-6">
            <p className="text-xs text-muted font-medium mb-2">BMI Scale</p>
            <div className="flex rounded-full h-3 overflow-hidden">
              <div className="flex-1 bg-blue-500" title="Underweight" />
              <div className="flex-1 bg-emerald-500" title="Normal" />
              <div className="flex-1 bg-amber-500" title="Overweight" />
              <div className="flex-1 bg-red-500" title="Obese" />
            </div>
            <div className="flex justify-between text-[10px] text-muted mt-1">
              <span>Underweight</span><span>Normal</span><span>Overweight</span><span>Obese</span>
            </div>
          </div>
        </Card>
      </div>

      {/* History Chart */}
      <Card>
        <h2 className="font-bold mb-4">BMI History</h2>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={history}>
            <XAxis dataKey="date" tick={{ fill: 'var(--muted)', fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis domain={[18, 32]} tick={{ fill: 'var(--muted)', fontSize: 11 }} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-color)', borderRadius: '12px' }} />
            <ReferenceLine y={18.5} stroke="#3b82f6" strokeDasharray="3 3" />
            <ReferenceLine y={25} stroke="#f59e0b" strokeDasharray="3 3" />
            <Line type="monotone" dataKey="bmi" stroke="var(--primary)" strokeWidth={2} dot={{ fill: 'var(--primary)', r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
}
