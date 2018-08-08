import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

export default class AdminView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>AdminView</Text>
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