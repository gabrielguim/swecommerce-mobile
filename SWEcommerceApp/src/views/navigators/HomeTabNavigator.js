import React from 'react'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

import CartView from '../CartView'
import AdminView from '../AdminView'
import ProductStackNavigator from './ProductStackNavigator'

import Icon from 'react-native-vector-icons/Ionicons'

export default HomeTabNavigator = createMaterialBottomTabNavigator({
    Products: {
        screen: ProductStackNavigator,
        navigationOptions: {
            tabBarLabel: 'Products',
            tabBarIcon: ({tintColor}) => (
                <Icon name="md-list" color={tintColor} size={24} />
            )
        }
    },
    Cart: {
        screen: CartView,
        navigationOptions: {
            tabBarLabel: 'Cart',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="md-cart" color={tintColor} size={24} />
            )
        }
    },
    Admin: {
        screen: AdminView,
        navigationOptions: {
            tabBarLabel: 'Admin',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="ios-settings" color={tintColor} size={24} />
            )
        }
    }
}, {
    initialRouteName: 'Products',
    barStyle: { backgroundColor: '#960a0a' }
});