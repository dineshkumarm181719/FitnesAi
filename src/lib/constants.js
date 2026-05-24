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
  { href: '/dashboard/trackers', label: 'Health Trackers', icon: 'Droplets' },
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

export const generateMockMealPlan = (goal, diet) => {
  const isWeightLoss = goal === 'weight-loss';
  const isMuscleGain = goal === 'muscle-gain';
  const calories = isWeightLoss ? 1800 : isMuscleGain ? 2800 : 2200;
  
  const protein = isMuscleGain ? 180 : isWeightLoss ? 140 : 120;
  const carbs = isWeightLoss ? 150 : isMuscleGain ? 300 : 220;
  const fats = isWeightLoss ? 60 : 80;

  const getSource = (type) => {
    if (diet === 'vegan') return type === 'protein' ? 'Tofu/Tempeh' : 'Plant-based';
    if (diet === 'veg') return type === 'protein' ? 'Paneer/Lentils' : 'Dairy';
    return type === 'protein' ? 'Chicken/Fish' : 'Mixed';
  };

  const pSource = getSource('protein');

  return {
    calories, protein, carbs, fats,
    meals: [
      {
        type: 'Breakfast', time: '8:00 AM',
        name: `${diet === 'vegan' ? 'Oatmeal & Plant Protein' : 'Eggs & Oatmeal'}`,
        calories: Math.round(calories * 0.25),
        protein: Math.round(protein * 0.25),
        carbs: Math.round(carbs * 0.3),
        fats: Math.round(fats * 0.2),
        items: ['Oats', diet === 'vegan' ? 'Plant Protein' : 'Eggs', 'Berries']
      },
      {
        type: 'Lunch', time: '1:00 PM',
        name: `${pSource} Power Bowl`,
        calories: Math.round(calories * 0.35),
        protein: Math.round(protein * 0.35),
        carbs: Math.round(carbs * 0.4),
        fats: Math.round(fats * 0.4),
        items: [pSource, 'Brown Rice', 'Mixed Veggies']
      },
      {
        type: 'Dinner', time: '7:00 PM',
        name: `Grilled ${pSource} & Greens`,
        calories: Math.round(calories * 0.3),
        protein: Math.round(protein * 0.3),
        carbs: Math.round(carbs * 0.2),
        fats: Math.round(fats * 0.3),
        items: [pSource, 'Sweet Potato', 'Broccoli', 'Olive Oil']
      },
      {
        type: 'Snack', time: '4:00 PM',
        name: `${diet === 'vegan' ? 'Nuts & Seeds' : 'Greek Yogurt & Almonds'}`,
        calories: Math.round(calories * 0.1),
        protein: Math.round(protein * 0.1),
        carbs: Math.round(carbs * 0.1),
        fats: Math.round(fats * 0.1),
        items: [diet === 'vegan' ? 'Mixed Nuts' : 'Greek Yogurt', 'Almonds']
      }
    ]
  };
};

export const generateMockWorkoutPlan = (goal, level, duration) => {
  const isWeightLoss = goal === 'weight-loss';
  const isBeginner = level === 'beginner';
  
  const reps = isWeightLoss ? '12-15' : '8-10';
  const sets = isBeginner ? 3 : 4;
  const rest = isWeightLoss ? '45s' : '90s';

  const exercises = isWeightLoss ? [
    { name: 'Jump Squats', sets, reps, rest, muscle: 'Legs', icon: '🦵' },
    { name: 'Burpees', sets, reps, rest, muscle: 'Full Body', icon: '🔥' },
    { name: 'Mountain Climbers', sets, reps, rest, muscle: 'Core', icon: '🏃' },
    { name: 'Kettlebell Swings', sets, reps, rest, muscle: 'Full Body', icon: '💪' },
    { name: 'Plank', sets: 3, reps: '60s', rest: '30s', muscle: 'Core', icon: '🧘' },
    { name: 'High Knees', sets, reps, rest, muscle: 'Cardio', icon: '🏃' },
  ] : [
    { name: 'Barbell Squats', sets, reps, rest, muscle: 'Legs', icon: '🦵' },
    { name: 'Bench Press', sets, reps, rest, muscle: 'Chest', icon: '🏋️' },
    { name: 'Deadlifts', sets, reps, rest, muscle: 'Back', icon: '💪' },
    { name: 'Overhead Press', sets, reps, rest, muscle: 'Shoulders', icon: '🙆' },
    { name: 'Barbell Rows', sets, reps, rest, muscle: 'Back', icon: '💪' },
    { name: 'Bicep Curls', sets, reps, rest, muscle: 'Arms', icon: '💪' },
  ];

  const numExercises = Math.min(exercises.length, Math.max(3, Math.floor(parseInt(duration) / 10)));

  return {
    name: `${level.charAt(0).toUpperCase() + level.slice(1)} ${goal.replace('-', ' ')} Routine`,
    duration: `${duration} min`,
    difficulty: level.charAt(0).toUpperCase() + level.slice(1),
    caloriesBurned: isWeightLoss ? parseInt(duration) * 9 : parseInt(duration) * 6,
    exercises: exercises.slice(0, numExercises)
  };
};
