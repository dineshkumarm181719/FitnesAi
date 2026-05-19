// App-wide constants

export const APP_NAME = 'FitGenie AI';

export const BMI_CATEGORIES = [
  { min: 0, max: 18.5, label: 'Underweight', color: '#3b82f6', advice: 'You may need to gain weight. Consult a healthcare provider.' },
  { min: 18.5, max: 25, label: 'Normal', color: '#10b981', advice: 'Great job! Maintain your healthy lifestyle.' },
  { min: 25, max: 30, label: 'Overweight', color: '#f59e0b', advice: 'Consider a balanced diet and regular exercise.' },
  { min: 30, max: 100, label: 'Obese', color: '#ef4444', advice: 'Please consult a healthcare provider for guidance.' },
];

export const FITNESS_GOALS = [
  { value: 'weight-loss', label: 'Weight Loss', icon: '🔥', desc: 'Burn fat and lose weight' },
  { value: 'muscle-gain', label: 'Muscle Gain', icon: '💪', desc: 'Build muscle and strength' },
  { value: 'maintenance', label: 'Maintenance', icon: '⚖️', desc: 'Maintain current fitness' },
];

export const DIETARY_PREFERENCES = [
  { value: 'non-veg', label: 'Non-Vegetarian', icon: '🍗' },
  { value: 'veg', label: 'Vegetarian', icon: '🥗' },
  { value: 'vegan', label: 'Vegan', icon: '🌱' },
];

export const FITNESS_LEVELS = [
  { value: 'beginner', label: 'Beginner', icon: '🌟', desc: '0-6 months of training' },
  { value: 'intermediate', label: 'Intermediate', icon: '⭐', desc: '6 months - 2 years' },
  { value: 'advanced', label: 'Advanced', icon: '🏆', desc: '2+ years of training' },
];

export const WORKOUT_DURATIONS = [
  { value: '30', label: '30 minutes' },
  { value: '45', label: '45 minutes' },
  { value: '60', label: '60 minutes' },
  { value: '90', label: '90 minutes' },
];

export const NAV_ITEMS = [
  { href: '/dashboard', label: 'Dashboard', icon: 'LayoutDashboard' },
  { href: '/dashboard/bmi', label: 'BMI Calculator', icon: 'Calculator' },
  { href: '/dashboard/diet', label: 'Diet Planner', icon: 'Utensils' },
  { href: '/dashboard/workout', label: 'Workout Planner', icon: 'Dumbbell' },
  { href: '/dashboard/progress', label: 'Progress', icon: 'TrendingUp' },
  { href: '/dashboard/chat', label: 'AI Chat', icon: 'MessageCircle' },
];

export const DEMO_USER = {
  name: 'Alex Johnson',
  email: 'alex@fitgenie.ai',
  age: 28,
  gender: 'male',
  height: 175,
  weight: 78,
  goal: 'muscle-gain',
  dietaryPreference: 'non-veg',
  fitnessLevel: 'intermediate',
};

export const DEMO_BMI_HISTORY = [
  { date: '2025-01-15', bmi: 26.2, weight: 80.2 },
  { date: '2025-02-15', bmi: 25.8, weight: 79.0 },
  { date: '2025-03-15', bmi: 25.5, weight: 78.1 },
  { date: '2025-04-15', bmi: 25.1, weight: 76.8 },
  { date: '2025-05-15', bmi: 25.5, weight: 78.0 },
];

export const DEMO_WEIGHT_DATA = [
  { date: 'Mon', weight: 78.2, calories: 2100 },
  { date: 'Tue', weight: 78.0, calories: 1950 },
  { date: 'Wed', weight: 77.8, calories: 2200 },
  { date: 'Thu', weight: 77.9, calories: 2050 },
  { date: 'Fri', weight: 77.6, calories: 1900 },
  { date: 'Sat', weight: 77.4, calories: 2300 },
  { date: 'Sun', weight: 77.5, calories: 2100 },
];

export const DEMO_WORKOUT_COMPLETION = [
  { day: 'Mon', completed: 1 },
  { day: 'Tue', completed: 1 },
  { day: 'Wed', completed: 0 },
  { day: 'Thu', completed: 1 },
  { day: 'Fri', completed: 1 },
  { day: 'Sat', completed: 0 },
  { day: 'Sun', completed: 1 },
];

export const QUICK_CHAT_PROMPTS = [
  '💡 Give me a quick diet tip',
  '🏋️ Suggest a 15-min workout',
  '🔥 How to boost metabolism?',
  '💪 Best protein sources?',
  '😴 How much sleep do I need?',
  '🥗 Healthy snack ideas',
];

export const DEMO_MEAL_PLAN = {
  calories: 2200,
  protein: 165,
  carbs: 220,
  fats: 73,
  meals: [
    {
      type: 'Breakfast',
      time: '7:00 AM',
      name: 'Protein Oatmeal Bowl',
      calories: 450,
      protein: 35,
      carbs: 55,
      fats: 12,
      items: ['1 cup oats', '1 scoop whey protein', '1 banana', '1 tbsp almond butter', '200ml almond milk'],
    },
    {
      type: 'Mid-Morning Snack',
      time: '10:00 AM',
      name: 'Greek Yogurt Parfait',
      calories: 250,
      protein: 20,
      carbs: 30,
      fats: 6,
      items: ['200g Greek yogurt', '1/2 cup mixed berries', '1 tbsp honey', '2 tbsp granola'],
    },
    {
      type: 'Lunch',
      time: '1:00 PM',
      name: 'Grilled Chicken Power Bowl',
      calories: 600,
      protein: 45,
      carbs: 55,
      fats: 20,
      items: ['200g grilled chicken breast', '1 cup brown rice', '1 cup steamed broccoli', 'Mixed salad', '1 tbsp olive oil dressing'],
    },
    {
      type: 'Afternoon Snack',
      time: '4:00 PM',
      name: 'Protein Shake',
      calories: 300,
      protein: 30,
      carbs: 25,
      fats: 8,
      items: ['1 scoop whey protein', '1 banana', '1 tbsp peanut butter', '250ml milk'],
    },
    {
      type: 'Dinner',
      time: '7:30 PM',
      name: 'Salmon & Sweet Potato',
      calories: 550,
      protein: 35,
      carbs: 45,
      fats: 25,
      items: ['200g baked salmon', '1 medium sweet potato', 'Roasted asparagus', 'Lemon herb sauce'],
    },
    {
      type: 'Evening Snack',
      time: '9:00 PM',
      name: 'Cottage Cheese & Nuts',
      calories: 200,
      protein: 15,
      carbs: 10,
      fats: 10,
      items: ['150g cottage cheese', '10 almonds', 'Cinnamon sprinkle'],
    },
  ],
};

export const DEMO_WORKOUT_PLAN = {
  name: 'Full Body Strength',
  duration: '60 min',
  difficulty: 'Intermediate',
  caloriesBurned: 450,
  exercises: [
    { name: 'Barbell Squats', sets: 4, reps: '8-10', rest: '90s', muscle: 'Legs', icon: '🦵' },
    { name: 'Bench Press', sets: 4, reps: '8-10', rest: '90s', muscle: 'Chest', icon: '🏋️' },
    { name: 'Bent-Over Rows', sets: 3, reps: '10-12', rest: '60s', muscle: 'Back', icon: '💪' },
    { name: 'Overhead Press', sets: 3, reps: '10-12', rest: '60s', muscle: 'Shoulders', icon: '🙆' },
    { name: 'Romanian Deadlifts', sets: 3, reps: '10-12', rest: '90s', muscle: 'Hamstrings', icon: '🦵' },
    { name: 'Dumbbell Bicep Curls', sets: 3, reps: '12-15', rest: '45s', muscle: 'Biceps', icon: '💪' },
    { name: 'Tricep Dips', sets: 3, reps: '12-15', rest: '45s', muscle: 'Triceps', icon: '💪' },
    { name: 'Plank Hold', sets: 3, reps: '45-60s', rest: '30s', muscle: 'Core', icon: '🧘' },
  ],
};
