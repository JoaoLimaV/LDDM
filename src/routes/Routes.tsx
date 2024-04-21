import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Page Import Here 
import Home from '../screens/Home';
import Login from '../screens/Login';
import Main from '../screens/Main';
import Step1Register from '../screens/register/Step1Register';
import Step2Register from '../screens/register/Step2Register';
import Step3Register from '../screens/register/Step3Register';
import Step4Register from '../screens/register/Step4Register';
import Step5Register from '../screens/register/Step5Register';
import Step6Register from '../screens/register/Step6Register';
import Product from '../screens/Product/Product'


const Stack: any = createNativeStackNavigator();

function Routes(): React.JSX.Element {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="Main" component={Main} options={{ headerShown: false }}/>

        <Stack.Screen name="Step1Register" component={Step1Register} options={{ headerShown: false }}/>
        <Stack.Screen name="Step2Register" component={Step2Register} options={{ headerShown: false }}/>
        <Stack.Screen name="Step3Register" component={Step3Register} options={{ headerShown: false }}/>
        <Stack.Screen name="Step4Register" component={Step4Register} options={{ headerShown: false }}/>
        <Stack.Screen name="Step5Register" component={Step5Register} options={{ headerShown: false }}/>
        <Stack.Screen name="Step6Register" component={Step6Register} options={{ headerShown: false }}/>

        <Stack.Screen name="Product" component={Product} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
