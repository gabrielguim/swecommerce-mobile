import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

export default class AdminView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.sectionHeader}>Produto</Text>
                <TouchableOpacity 
                    style={styles.item}
                    onPress={() => this.props.navigation.navigate('AdminProductListView')}>
                    <Text style={styles.title}>Ver Produtos</Text>
                    <Text style={styles.subtitle}>Edite e Remova os Produtos</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.item}
                    onPress={() => this.props.navigation.navigate('AdminCreateProduct')}>
                    <Text style={styles.title}>Criar Produto</Text>
                    <Text style={styles.subtitle}>Adicione um novo produto à lista</Text>
                </TouchableOpacity>

                <Text style={styles.sectionHeader}>Promoção</Text>
                <TouchableOpacity
                    style={styles.item}
                    onPress={() => this.props.navigation.navigate('AdminPromotionListView')}>
                    <Text style={styles.title}>Ver Promoções</Text>
                    <Text style={styles.subtitle}>Edite e Remova as Promoções</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.item}
                    onPress={() => this.props.navigation.navigate('AdminCreatePromotion')}>
                    <Text style={styles.title}>Criar Promoção</Text>
                    <Text style={styles.subtitle}>Adicione uma nova promoção à lista</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    sectionHeader: {
        margin: 12,
        fontSize: 22,
        fontWeight: 'bold',
        color: '#960a0a'
    },
    item: {
        paddingHorizontal: 14,
        paddingVertical: 12,
        elevation: 2,
        backgroundColor: 'white',
    },
    title: {
        color: 'black',
        fontSize: 18
    },
    subtitle: {
        color: '#717171',
        fontSize: 14,
        fontWeight: 'bold'
    }
})