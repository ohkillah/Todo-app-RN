import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {BottomTabsNavigator} from "./BottomTabsNavigator";
import {LoginPage} from "../components/LoginPage";

const {Navigator, Screen} = createStackNavigator();

export const AppNavigator = () => {

  return (
    <NavigationContainer>
      <Navigator>
            <Screen options={{headerShown: false}} name={'TabsNavigation'} component={BottomTabsNavigator}/>
            <Screen options={{headerShown: false}} name={'Login'} component={LoginPage}/>
      </Navigator>
    </NavigationContainer>
  )
};
