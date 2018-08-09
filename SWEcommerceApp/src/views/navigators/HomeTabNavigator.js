import React from 'react'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

import CartView from '../cart/CartView'
import AdminView from '../AdminView'
import ProductStackNavigator from './ProductStackNavigator'

import Icon from 'react-native-vector-icons/Ionicons'

export default HomeTabNavigator = createMaterialBottomTabNavigator({
    Products: {
        screen: ProductStackNavigator,
        navigationOptions: {
            tabBarLabel: 'Produtos',
            tabBarIcon: ({tintColor}) => (
                <Icon name="md-list" color={tintColor} size={24} />
            )
        }
    },
    Cart: {
        screen: CartView,
        navigationOptions: {
            tabBarLabel: 'Carrinho',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="md-cart" color={tintColor} size={24} />
            )
        }
    },
    Admin: {
        screen: AdminView,
        navigationOptions: {
            tabBarLabel: 'Opções',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="ios-settings" color={tintColor} size={24} />
            )
        }
    }
}, {
    initialRouteName: 'Products',
    barStyle: { backgroundColor: '#960a0a' }
});