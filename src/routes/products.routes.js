import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ProductScreen from "../pages/sections/products/products"

const ProductStack = createStackNavigator();


const ProductRoutes =() => {
    return (
        <ProductStack.Navigator>
            <ProductStack.Screen 
                name="Produtos"
                component={ProductScreen}
            />
        </ProductStack.Navigator>
    );
}

export default ProductRoutes;