import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';

import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

import { theme } from './src/infrastructure/theme';
import { RestaurantsContextProvider } from './src/services/restaurants/restaurants.context';
import { FavouritesContextProvider } from './src/services/favourites/favourites.context';

import { Navigation } from './src/infrastructure/navigation';
import { ThemeProvider } from 'styled-components';
import { LocationContextProvider } from './src/services/location/location.context';
import { AuthenticationContextProvider } from './src/services/authentication/authentication.context';

const firebaseConfig = {
  apiKey: 'AIzaSyBTfRejJ70dv-g9QjASrEx360bJn7r0nBw',
  authDomain: 'mealstogo-60b66.firebaseapp.com',
  projectId: 'mealstogo-60b66',
  storageBucket: 'mealstogo-60b66.appspot.com',
  messagingSenderId: '9398358858',
  appId: '1:9398358858:web:93467145e1df24575527b3',
};

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style='auto' />
    </>
  );
}
