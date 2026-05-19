// Utility functions for FitGenie AI

export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function calculateBMI(weightKg, heightCm) {
  const heightM = heightCm / 100;
  return parseFloat((weightKg / (heightM * heightM)).toFixed(1));
}

export function getBMICategory(bmi) {
  if (bmi < 18.5) return { label: 'Underweight', color: '#3b82f6', textColor: 'text-blue-400' };
  if (bmi < 25) return { label: 'Normal', color: '#10b981', textColor: 'text-emerald-400' };
  if (bmi < 30) return { label: 'Overweight', color: '#f59e0b', textColor: 'text-amber-400' };
  return { label: 'Obese', color: '#ef4444', textColor: 'text-red-400' };
}

export function formatDate(date) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(date));
}

export function formatTime(date) {
  return new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }).format(new Date(date));
}

export function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good Morning';
  if (hour < 17) return 'Good Afternoon';
  return 'Good Evening';
}

export function generateId() {
  return Math.random().toString(36).substring(2, 15);
}

export function getCalorieGoal(bmi, goal) {
  const baseCal = 2000;
  if (goal === 'weight-loss') return baseCal - 500;
  if (goal === 'muscle-gain') return baseCal + 400;
  return baseCal;
}

export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
