import React from "react";
import Welcome from "./screens/welcome";
import LoginScreen from "./screens/login";
import SignupScreen from "./screens/signup";
import CartScreen from "./screens/cart.js"
import ProfileScreen from "./screens/profile";
import HomeScreen from "./screens/home";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ImagePickerComponent from "./admin/addProduct";
const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />

        <Stack.Screen name="Cart" component={CartScreen} options={{ headerShown: false }} />


        {/* <Stack.Screen name='ImageScreen' component={ProductDisplayScreen} options={{headerShown:false}}/> */}
        <Stack.Screen name='AddProduct' component={ImagePickerComponent} options={{headerShown:false}}/>


        {/* <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default RootNavigator;   