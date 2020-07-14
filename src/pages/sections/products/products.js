import React, {Component} from 'react';
import {View, Text} from 'react-native';


export default class ProductsScreen extends Component {

    static navigationOptions={
        title:'Produtos'
    }
    render(){
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Lista de Produtos!</Text>
            </View>
        );
    }
}
