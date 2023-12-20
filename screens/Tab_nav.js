// Import necessary components and modules
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';

// Create a bottom tab navigator
const Tab = createBottomTabNavigator();

// Main component
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {/* Screen 1 */}
        <Tab.Screen name="Screen1" component={Screen1} options={{ tabBarLabel: 'Screen 1' }} />

        {/* Screen 2 */}
        <Tab.Screen name="Screen2" component={Screen2} options={{ tabBarLabel: 'Screen 2' }} />

        {/* Screen 3 */}
        <Tab.Screen name="Screen3" component={Screen3} options={{ tabBarLabel: 'Screen 3' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
