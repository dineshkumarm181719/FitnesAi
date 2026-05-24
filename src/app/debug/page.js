'use client';

import { useEffect, useState } from 'react';

export default function DebugPage() {
  const [config, setConfig] = useState({});
  const [firebaseStatus, setFirebaseStatus] = useState('Checking...');

  useEffect(() => {
    // Show environment variables on client
    const envConfig = {
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ? 'Set' : 'Missing',
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    };
    setConfig(envConfig);

    // Try to import and initialize Firebase
    try {
      import('@/lib/firebase').then(({ auth }) => {
        if (auth) {
          setFirebaseStatus('✅ Firebase initialized successfully');
        } else {
          setFirebaseStatus('❌ Firebase auth object is null');
        }
      }).catch(err => {
        setFirebaseStatus(`❌ Error: ${err.message}`);
      });
    } catch (err) {
      setFirebaseStatus(`❌ Error: ${err.message}`);
    }
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Firebase Debug</h1>
      <div className="bg-gray-100 p-4 rounded mb-4">
        <h2 className="font-bold mb-2">Environment Variables:</h2>
        <pre className="text-sm">{JSON.stringify(config, null, 2)}</pre>
      </div>
      <div className="bg-gray-100 p-4 rounded">
        <h2 className="font-bold mb-2">Firebase Status:</h2>
        <p className="text-sm">{firebaseStatus}</p>
      </div>
    </div>
  );
}
