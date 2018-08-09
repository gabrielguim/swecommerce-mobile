import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions
} from 'react-native'

import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialIcons';

import { addToCart } from '../../actions/CartAction'

class ProductDetail extends Component {
    render() {
        let product = this.props.navigation.getParam('product')
        let splittedPrice = String(product.price).split(".")

        product["int"] = splittedPrice[0]
        product["cent"] = splittedPrice[1] ? splittedPrice[1] : '00'

        return (
            <View style={styles.container}>
                <View style={styles.productContainer}>
                    <Text style={styles.title}>{product.name}</Text>
                    <Text style={styles.promotionText}>{product.promotion ? product.promotion.name : '-'}</Text>
                    <View style={styles.priceContainer}>
                        <Text style={styles.price}>R$ {product.int},</Text>
                        <Text style={styles.priceCent}>{product.cent}</Text>
                    </View>
                    <View style={styles.buttons}>
                        <TouchableOpacity
                            style={styles.buttonAdd}
                            onPress={() => this.props.addToCart(product)}>
                            <Icon name="add-shopping-cart" color={'white'} size={25} />
                            <Text style={styles.buttonAddText}>Adicionar ao Carrinho</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (product) => dispatch(addToCart(product))
    }
}

export default connect(null, mapDispatchToProps)(ProductDetail)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    productContainer: {
        height: Dimensions.get('window').height / 2,
        width: Dimensions.get('window').width / 1.5,
        marginHorizontal: 18,
        paddingHorizontal: 6,
        paddingVertical: 4,
        margin: 8,
        elevation: 4,
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 4
    },
    title: {
        marginTop: 6,
        fontSize: 32,
        fontWeight: 'bold',
        color: '#960a0a',
        alignSelf: 'center'
    },
    priceContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 12,
    },
    price: {
        fontSize: 42,
        alignSelf: 'flex-end'
    },
    priceCent: {
        fontSize: 32,
        bottom: 2,
        alignSelf: 'flex-end'
    },
    promotionText: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: '#960a0a',
        borderRadius: 32,
        color: 'white'
    },
    buttons: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    buttonAdd: {
        flex: 1,
        margin: 4,
        padding: 12,
        borderRadius: 4,
        alignItems: 'center',
        backgroundColor: '#b70707'
    },
    buttonAddText: {
        color: 'white',
        fontSize: 14
    },
    buttonSee: {
        flex: 1,
        margin: 4,
        padding: 12,
        borderRadius: 4,
        alignItems: 'center',
        backgroundColor: '#1748b2'
    },
    buttonSeeText: {
        color: 'white',
        fontSize: 14
    }
})