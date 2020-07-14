import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductRoutes from './products.routes';
const DashboardStack = createBottomTabNavigator();


const DashBoardRoutes =() => {
    return (
        <DashboardStack.Navigator>
            <DashboardStack.Screen name="Produtos" component={ProductRoutes} />
        </DashboardStack.Navigator>
    );
}

export default DashBoardRoutes;