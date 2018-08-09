import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Text
} from 'react-native'

import { connect } from 'react-redux'
import { getCart, clearCart } from '../../actions/CartAction'
import CarItem from './CartItem'
import Icon from 'react-native-vector-icons/MaterialIcons';

class CartView extends Component {

    componentDidMount() {
        this.props.getCart()
    }

    render() {
        
        if (this.props.cart.length === 0) {
            return (
                <View style={styles.emptyContainer}>
                    <TouchableOpacity
                        style={styles.emptyButton}
                        onPress={() => { this.props.navigation.navigate('Products') }}>
                        <Icon name="mood-bad" size={25} />
                        <Text style={styles.emptyTitle}>Ops! Nada no Carrinho</Text>
                        <Text style={styles.emptyTitle}>Veja nossa lista de Produtos!</Text>
                    </TouchableOpacity>
                </View>
            )
        } else {
            var totalCart = 0
            Object.values(this.props.groupedCart).forEach(item => {
                totalCart += parseFloat(item.totalPrice)
            });

            return (
                <View style={styles.container}>
                    <FlatList
                        style={styles.list}
                        data={Object.keys(this.props.groupedCart)}
                        renderItem={(key) => <CarItem product={this.props.groupedCart[key.item]} productKey={key} />}
                        keyExtractor={(key) => key}
                    />
                    <View style={styles.tabBar}>
                        <TouchableOpacity
                            style={styles.tabItem}
                            onPress={() => { this.props.clearCart() }}>
                            <Icon name="remove-shopping-cart" size={25} />
                            <Text style={styles.tabTitle}>Limpar Carrinho</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.tabItem}>
                            <Icon name="attach-money" size={25} />
                            <Text style={styles.tabTitle}>Total: R$ {totalCart}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }
    }
}

function mapStateToProps(state) {              
    return {
        cart: state.CartReducer.cart,
        groupedCart: state.CartReducer.groupedCart
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getCart: () => dispatch(getCart()),
        clearCart: () => dispatch(clearCart())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartView)

const styles = StyleSheet.create({
    emptyContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        flex: 1
    },
    list: {
        marginTop: 4
    },
    tabBar: {
        backgroundColor: 'white',
        height: 60,
        borderTopWidth: 0.5,
        borderColor: '#E5E5E5',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    tabItem: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    emptyButton: {
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
        borderRadius: 4,
        paddingVertical: 12,
        paddingHorizontal: 24,
        backgroundColor: 'white'
    },
    emptyTitle: {
        fontSize: 18,
        color: '#3c3c3c',
        paddingTop: 4
    },
    tabTitle: {
        fontSize: 14,
        color: '#3c3c3c',
        paddingTop: 4
    }
})