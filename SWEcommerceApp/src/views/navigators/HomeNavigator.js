import React from 'react'
import { createStackNavigator } from 'react-navigation'
import HomeTabNavigator from './HomeTabNavigator'
import CustomHeader from './CustomHeader'

const HomeNavigator = createStackNavigator({
    HomeTabNavigator: {
        screen: HomeTabNavigator,
        navigationOptions: {
            header: () => <CustomHeader />,
            headerTitle: "SW e-commerce"      
        }
    }
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: "#960a0a"
        },
        headerTitleStyle: {
            color: "#fff",
            zIndex: 1,
            fontSize: 20,
            lineHeight: 23,
        },
        animationEnabled: true
    }
});

export default HomeNavigator