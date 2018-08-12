import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Picker,
    TouchableOpacity,
    ScrollView
} from 'react-native'

import { createProduct, updateProduct } from '../../actions/ProductAction'
import { getPromotions } from '../../actions/PromotionAction'
import { getProducts } from '../../actions/ProductAction'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialIcons'

class AdminCreateProduct extends Component {

    state = {
        selectedPromotion: { name: '-' },
        promotionName: '-',
        productName: '',
        productPrice: '',
    }

    componentDidMount() {
        this.props.getPromotions()
        this.props.getProducts()
        
        this.product = this.props.navigation.getParam('product')

        this.promo = this.product ? (this.product.promotion ? this.product.promotion : undefined) : undefined
        this.setState({
            productName: this.product ? this.product.name : '',
            productPrice: this.product ? this.product.price : '',
            promotionName: this.promo ? this.promo.name : '-',
            selectedPromotion: this.promo ? this.promo : {}
        })
    }

    validateProduct() {
        const isEdition = this.props.navigation.getParam('product') ? true : false
        const product = {
            name: this.state.productName,
            price: this.state.productPrice 
                ? parseFloat(this.state.productPrice.replace(",", ".")) 
                : undefined,
        }

        if ((!product.name || !product.price) || 
            (product.price === 0 || product.name.trim().length === 0)) {
            alert("Os campos informados são inválidos!")
        } else {
            product.price = product.price.toFixed(2)
            
            if (this.state.selectedPromotion) 
                product["promotion"] = this.state.selectedPromotion

            if (isEdition) {
                product["id"] = this.props.navigation.getParam('product').id
                this.props.updateProduct(product, this.props.navigation)
            } else {
                var ids = []
                this.props.products.forEach(product => {
                    ids.push(product.id)
                });
                product["id"] = Math.max(...ids) + 1

                this.props.createProduct(product, this.props.navigation)
            }
        }
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.container}>
                    <Text style={styles.title}>{this.props.navigation.getParam('title', 'Criar Produto')}</Text>
                    <Text style={styles.subtitle}>* Obrigatório</Text>
                    <View style={styles.textFieldIcon}>
                        <Icon style={styles.textIcon} size={24} name="format-quote" />
                        <TextInput
                            style={styles.textField}
                            underlineColorAndroid="transparent"
                            onChangeText={(text) => this.setState({ productName: text })}
                            value={this.state.productName}
                            placeholder={'Nome do Produto*'} />
                    </View>
                    <View style={styles.textFieldIcon}>
                        <Icon style={styles.textIcon} size={24} name="attach-money" />
                        <TextInput
                            style={styles.textField}
                            underlineColorAndroid="transparent"
                            onChangeText={(text) => this.setState({ productPrice: text })}
                            value={this.state.productPrice}
                            keyboardType='numeric'
                            placeholder={'Preço do Produto*'} />
                    </View>
                    <View style={styles.textFieldIcon}>
                        <Icon style={styles.textIcon} size={24} name="whatshot" />
                        <Picker
                            selectedValue={this.state.promotionName}
                            style={styles.pickerField}
                            onValueChange={(itemValue, itemIndex) => this.setState({
                                selectedPromotion: itemIndex === 0 ? undefined : this.props.promotions[itemIndex - 1],
                                promotionName: itemValue
                            })}>
                            <Picker.Item label="Nenhuma Promoção" value="-" />
                            {
                                this.props.promotions.map((promotion) => (
                                    <Picker.Item
                                        key={promotion.id}
                                        label={promotion.name}
                                        value={promotion.name} />
                                ))
                            }
                        </Picker>
                    </View>
                    <TouchableOpacity
                        style={styles.submitButton}
                        onPress={() => this.validateProduct()}>
                        <Text style={styles.submitButtonText}>Confirmar</Text>
                        <Icon name="add" color={'white'} size={25} />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

function mapStateToProps(state) {
    return {
        promotions: state.ProductReducer.promotions,
        products: state.ProductReducer.products
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getPromotions: () => dispatch(getPromotions()),
        getProducts: () => dispatch(getProducts()),
        createProduct: (product, navigation) => { dispatch(createProduct(product)), navigation.pop() },       
        updateProduct: (product, navigation) => { dispatch(updateProduct(product)), navigation.pop() }         
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminCreateProduct)

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    submitButton: {
        flexDirection: 'row',
        paddingVertical: 16,
        paddingHorizontal: 12,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#960a0a'
    },
    submitButtonText: {
        marginLeft: 8,
        color: 'white',
        fontSize: 18
    },
    title: {
        margin: 12,
        fontSize: 22,
        fontWeight: 'bold',
        color: '#960a0a',
        alignSelf: 'center'
    },
    subtitle: {
        margin: 12,
        fontSize: 16,
        color: '#960a0a',
        alignSelf: 'center'
    },
    textFieldIcon: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'white'
    },
    textIcon: {
        paddingVertical: 22,
        marginLeft: 8,
        padding: 10,
    },
    textField: {
        flex: 1,
        marginVertical: 8
    },
    pickerField: {
        flex: 1
    }
})