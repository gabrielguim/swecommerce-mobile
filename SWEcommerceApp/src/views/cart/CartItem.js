import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

class CartItem extends Component {
    render() {               
        let item = this.props.product
        let product = item.product

        let promoText = product.promotion
                            ? (this.props.productKey.item.includes('promo') ? product.promotion.name : '-')
                            : '-'       

        return (
            <View style={styles.container}>
                <View style={styles.itemContainer}>
                    <View style={styles.rowContainer}>
                        <Text style={styles.productAmount}>{item.amount} × </Text>
                        <Text style={styles.productName}>{product.name}</Text>
                    </View>
                    <View style={styles.rightContainer}>
                        <Text style={styles.promotionText}>{promoText}</Text>
                        <Text style={styles.priceText}>R$ {item.totalPrice}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

export default CartItem

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 18,
        paddingHorizontal: 6,
        paddingVertical: 4,
        margin: 8,
        elevation: 4,
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 4
    },
    productAmount: {
        fontSize: 14,
        alignSelf: 'center'
    },
    productName: {
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'flex-end',
        bottom: 0
    },
    itemContainer: {
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    rowContainer: {
        flexDirection: 'row',
    },
    rightContainer: {
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    promotionText: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: '#960a0a',
        borderRadius: 32,
        color: 'white'
    },
    priceText: {
        fontSize: 22,
        fontWeight: 'bold'
    }
})