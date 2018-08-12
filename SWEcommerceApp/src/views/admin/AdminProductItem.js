import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Alert
} from 'react-native'

import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialIcons';

import { deleteProduct } from '../../actions/ProductAction'

class AdminProductItem extends Component {
    render() {        
        let product = this.props.product.item
        let splittedPrice = parseFloat(product.price).toFixed(2).split(".")        
        
        product["int"] = splittedPrice[0]
        product["cent"] = splittedPrice[1] ? splittedPrice[1] : '00'        

        return(
            <View style={styles.container}>
                <View style={styles.itemContainer}>
                    <View style={styles.columnContainer}>
                        <View style={styles.rowContainer}>
                            <Text style={styles.productName}>{product.name}</Text>
                            <Text style={styles.productName}> - (R$ {product.int},{product.cent})</Text>
                        </View>
                        <Text style={styles.promotionName}>{product.promotion ? product.promotion.name : '-'}</Text>
                    </View>
                    <View style={styles.rowContainer}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => this.props.navigation.navigate('AdminCreateProduct', { product: product, title: "Editar Produto" })}>
                            <Icon name="edit" size={24} />
                            <Text style={styles.buttonText}>Editar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                Alert.alert(
                                    'Remover Produto',
                                    'Tem certeza que deseja remover "' + product.name + '"?',
                                    [
                                        { text: 'Não', onPress: () => { }, style: 'cancel' },
                                        { text: 'Sim', onPress: () => this.props.deleteProduct(product) },
                                    ]
                                )
                            }}>
                            <Icon name="delete" size={24} />
                            <Text style={styles.buttonText}>Remover</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        deleteProduct: (product) => dispatch(deleteProduct(product))
    }
}

export default connect(null, mapDispatchToProps)(AdminProductItem)

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 12,
        paddingHorizontal: 6,
        paddingVertical: 4,
        margin: 8,
        elevation: 4,
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 4
    },
    productName: {
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        bottom: 0
    },
    promotionName: {
        fontSize: 14,
        alignSelf: 'flex-start',
        bottom: 0
    },
    itemContainer: {
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 8
    },
    columnContainer: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        flexDirection: 'column'
    },
    rowContainer: {
        flexDirection: 'row'
    },
    buttonText: {
        fontSize: 12
    }
})