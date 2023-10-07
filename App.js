import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Home from './src/BottomTab/Home';
import Profile from './src/BottomTab/Profile';
import Details from './src/Stack/Details';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator(){
  return(
    <Tab.Navigator>
      <Tab.Screen name="Home" component={StackNavigator} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}

function StackNavigator(){
  return(
    <Stack.Navigator>
      <Stack.Screen name='HomeScreen' component={Home} />
      <Stack.Screen name='Details' component={Details} />
    </Stack.Navigator>
  )
}
export default function App(){
  return(
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  )
}