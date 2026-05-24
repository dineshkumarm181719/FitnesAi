'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { DEMO_USER, DEMO_BMI_HISTORY, DEMO_WEIGHT_DATA } from '@/lib/constants';

const UserContext = createContext(undefined);

const DEFAULT_FITNESS = {
  bmiHistory: DEMO_BMI_HISTORY,
  weightData: DEMO_WEIGHT_DATA,
  waterIntake: 5,
  steps: 6847,
  sleepHours: 7.5,
  workoutsCompleted: 18,
  streak: 5,
};

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [fitnessData, setFitnessData] = useState(DEFAULT_FITNESS);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem('fitgenie-user');
    const savedFitness = localStorage.getItem('fitgenie-fitness');

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    if (savedFitness) {
      setFitnessData(JSON.parse(savedFitness));
    }

    setIsLoaded(true);
  }, []);

  const updateUser = (data) => {
    const updated = { ...(user ?? {}), ...data };
    setUser(updated);
    localStorage.setItem('fitgenie-user', JSON.stringify(updated));
  };

  const updateFitnessData = (data) => {
    const updated = { ...fitnessData, ...data };
    setFitnessData(updated);
    localStorage.setItem('fitgenie-fitness', JSON.stringify(updated));
  };

  const logout = () => {
    localStorage.removeItem('fitgenie-user');
    localStorage.removeItem('fitgenie-fitness');
    setUser(null);
    setFitnessData(DEFAULT_FITNESS);
  };

  return (
    <UserContext.Provider value={{ user, updateUser, fitnessData, updateFitnessData, logout, isLoaded }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const ctx = useContext(UserContext);
  if (ctx === undefined) {
    return { user: null, updateUser: () => {}, fitnessData: DEFAULT_FITNESS, updateFitnessData: () => {}, logout: () => {}, isLoaded: true };
  }
  return ctx;
}
