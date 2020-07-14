import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from "../pages/sections/users/login"

const UserStack = createStackNavigator();


const UserRoutes =() => {
    return (
        <UserStack.Navigator>
            <UserStack.Screen 
                name="Login"
                component={LoginScreen}
                options={{headerShown:false}}
            />
        </UserStack.Navigator>
    );
}

export default UserRoutes;