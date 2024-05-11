import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Page Import Here 
import Home from '@screens/Home';
import Login from '@screens/Login';
import Main from '@screens/Main';
import Settings from '@screens/Settings';
import Notify from '../screens/notify/Notify';
import Loading from '@screens/Loading';

import Step1Register from '@screens/register/Step1Register';
import Step2Register from '@screens/register/Step2Register';
import Step3Register from '@screens/register/Step3Register';
import Step4Register from '@screens/register/Step4Register';
import Step5Register from '@screens/register/Step5Register';
import Step6Register from '@screens/register/Step6Register';
import Product from '@screens/product/Product'
import { getToken } from '@components/AuthStorage'


const Stack: any = createNativeStackNavigator();

function Routes(): React.JSX.Element {

  const [initialRoute, setInitialRoute] = React.useState<string>('');

  React.useEffect(() => {
    async function checkToken() {
      const token = await getToken();
      setInitialRoute(token ? 'Main' : 'Home');
    }

    checkToken();
  }, []);

  return (
    initialRoute !== '' ? (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={initialRoute}>
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
          <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
          <Stack.Screen name="Notify" component={Notify} options={{ headerShown: false }} />

          <Stack.Screen name="Step1Register" component={Step1Register} options={{ headerShown: false }} />
          <Stack.Screen name="Step2Register" component={Step2Register} options={{ headerShown: false }} />
          <Stack.Screen name="Step3Register" component={Step3Register} options={{ headerShown: false }} />
          <Stack.Screen name="Step4Register" component={Step4Register} options={{ headerShown: false }} />
          <Stack.Screen name="Step5Register" component={Step5Register} options={{ headerShown: false }} />
          <Stack.Screen name="Step6Register" component={Step6Register} options={{ headerShown: false }} />

          <Stack.Screen name="Loading" component={Loading} options={{ headerShown: false }} />

          <Stack.Screen name="Product" component={Product} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    ) : <Loading />
  );
}

export default Routes;
