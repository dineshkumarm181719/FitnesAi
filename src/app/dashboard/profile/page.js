'use client';

import { useState } from 'react';
import { User, Mail, Ruler, Weight, Target, Save } from 'lucide-react';
import { Card, Button, Input, Badge } from '@/components/ui';
import { useUser } from '@/context/UserContext';
import { calculateBMI, getBMICategory } from '@/lib/utils';

export default function ProfilePage() {
  const { user, updateUser } = useUser();
  const [form, setForm] = useState(user || { name: 'Alex Johnson', email: 'alex@fitgenie.ai', age: 28, gender: 'male', height: 175, weight: 78, goal: 'muscle-gain' });
  const [saved, setSaved] = useState(false);

  const bmi = calculateBMI(form.weight || 78, form.height || 175);
  const bmiCat = getBMICategory(bmi);
  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const handleSave = () => {
    updateUser(form);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-6 max-w-3xl mx-auto animate-fade-in">
      <h1 className="text-2xl font-black flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
          <User size={20} className="text-white" />
        </div>
        Profile
      </h1>

      {/* Avatar Card */}
      <Card className="flex items-center gap-6">
        <div className="w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-primary/25">
          {(form.name || 'AJ').split(' ').map(n => n[0]).join('').slice(0, 2)}
        </div>
        <div>
          <h2 className="text-xl font-bold">{form.name || 'User'}</h2>
          <p className="text-sm text-muted">{form.email}</p>
          <div className="flex gap-2 mt-2">
            <Badge>BMI: {bmi}</Badge>
            <Badge variant={bmi < 25 ? 'success' : 'energy'}>{bmiCat.label}</Badge>
          </div>
        </div>
      </Card>

      {/* Edit Form */}
      <Card>
        <h2 className="font-bold mb-4">Personal Information</h2>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Input id="p-name" label="Full Name" icon={User} value={form.name} onChange={set('name')} />
            <Input id="p-email" label="Email" icon={Mail} value={form.email} onChange={set('email')} />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <Input id="p-age" label="Age" type="number" value={form.age} onChange={set('age')} />
            <Input id="p-height" label="Height (cm)" type="number" icon={Ruler} value={form.height} onChange={set('height')} />
            <Input id="p-weight" label="Weight (kg)" type="number" icon={Weight} value={form.weight} onChange={set('weight')} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-muted">Gender</label>
              <select value={form.gender} onChange={set('gender')} className="w-full px-4 py-2.5 rounded-xl bg-surface border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50">
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-muted">Goal</label>
              <select value={form.goal} onChange={set('goal')} className="w-full px-4 py-2.5 rounded-xl bg-surface border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50">
                <option value="weight-loss">Weight Loss</option>
                <option value="muscle-gain">Muscle Gain</option>
                <option value="maintenance">Maintenance</option>
              </select>
            </div>
          </div>
          <Button onClick={handleSave} size="lg" className="w-full">
            {saved ? '✓ Saved!' : <><Save size={18} /> Save Changes</>}
          </Button>
        </div>
      </Card>
    </div>
  );
}
