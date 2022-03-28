import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import {
  useFonts as useLato,
  Lato_400Regular,
  Lato_700Bold,
} from '@expo-google-fonts/lato';

import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme/index';
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurant.screen';
import { Text } from 'react-native';
import { SafeArea } from './src/components/utility/safe-area.components';

const Tab = createBottomTabNavigator();

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);
const Map = () => (
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>
);

export default function App() {
  const [oswaldLoaded] = useOswald({ Oswald_400Regular });
  const [latoLoaded] = useLato({ Lato_400Regular, Lato_700Bold });

  if (!oswaldLoaded || !latoLoaded) return null;

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ color, size }) => {
                let iconName;

                if (route.name === 'Restaurants') {
                  iconName = 'md-restaurant';
                } else if (route.name === 'Settings') {
                  iconName = 'md-settings';
                } else if (route.name === 'Map') {
                  iconName = 'md-map';
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: 'tomato',
              inactiveTintColor: 'gray',
            }}>
            <Tab.Screen name='Restaurants' component={RestaurantsScreen} />
            <Tab.Screen name='Map' component={Map} />
            <Tab.Screen name='Settings' component={Settings} />
          </Tab.Navigator>
        </NavigationContainer>
        <ExpoStatusBar style='auto' />
      </ThemeProvider>
    </>
  );
}
