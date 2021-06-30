import React, { ReactNode } from 'react';

import { AuthProvider } from './auth';

interface AppProviderProps {
  children: ReactNode;
}

export default function AppProvider({ children } : AppProviderProps) {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}