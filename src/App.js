import React from 'react';
import 'react-native-gesture-handler';
import  Router from "./router";
import { NavigationContainer } from '@react-navigation/native';


const App = () => {
  return(
    <NavigationContainer>
    <Router/>
    </NavigationContainer>
  );

};

export default App;
