import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserRoutes from './routes/user.routes';
import DashboardScreen from './routes/dashboard.routes';

export default function App() {
    const isAuth = false;
    if(isAuth){
        return (
            <NavigationContainer>
              <DashboardScreen/>
            </NavigationContainer>
          );
    }
    else{
        return (
            <NavigationContainer>
                <UserRoutes/>
            </NavigationContainer>
        );
    }
    
  }