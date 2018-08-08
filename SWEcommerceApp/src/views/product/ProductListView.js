import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

import { Card, ListItem, Button, Icon } from 'react-native-elements'

export default class ProductListView extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Text>ProductList View</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})