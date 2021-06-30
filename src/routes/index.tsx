import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from '../hooks/auth';

import LoadAnimation from '../components/LoadAnimation';

import AppRoutes from './app.stack.routes';
import AppTabRoutes from './app.tab.routes';
import AuthRoutes from './auth.routes';

export default function Routes(){
  const { user, loading } = useAuth();

  return (
    // loading ? <LoadAnimation /> :
    <NavigationContainer>
      { user.id ? <AppTabRoutes /> : <AuthRoutes /> }
    </NavigationContainer>
  );
}