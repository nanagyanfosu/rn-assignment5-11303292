import React from 'react';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import Settings from './Settings';


const Tab = createBottomTabNavigator();
function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Tab.Screen name="Settings" component={Settings} options={{headerShown: false}} />
      </Tab.Navigator>
      </NavigationContainer>
  );
}

export default App;
