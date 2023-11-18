import React from 'react';
import {
      SafeAreaView,
      ScrollView,
      StatusBar,
      StyleSheet,
      Text,
      useColorScheme,
      View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './src/screens/Splash';
import GetStarted from './src/screens/GetStarted';
import Home from './src/screens/Home';

const Stack = createStackNavigator();

function App() {

      return (
            <NavigationContainer>
                  <Stack.Navigator>
                        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
                        <Stack.Screen name="GetStarted" component={GetStarted} options={{ headerShown: false }} />
                        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                  </Stack.Navigator>
            </NavigationContainer>
      );
}

export default App;
