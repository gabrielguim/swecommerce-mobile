import React from 'react'
import { createStackNavigator } from 'react-navigation'
import { Header } from 'react-navigation'
import HomeTabNavigator from './HomeTabNavigator'
import CustomHeader from './CustomHeader'

const HomeNavigator = createStackNavigator({
    HomeTabNavigator: {
        screen: HomeTabNavigator,
        navigationOptions: (headerOptions) => ({
            header: (headerOptions) =>
                Object.values(headerOptions.descriptors)[0].navigation.state.index != 1
                    ? null
                    : <Header {...headerOptions} />
            ,

            headerRight: (<CustomHeader headerOptions={headerOptions.navigation} />),
            title: 'SW E-commerce'
        })
    }
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: 'white',
            elevation: 3
        },
        headerTitleStyle: {
            color: 'black',
            zIndex: 1,
            fontSize: 20,
            lineHeight: 23,
        },
        animationEnabled: true
    }
});

export default HomeNavigator