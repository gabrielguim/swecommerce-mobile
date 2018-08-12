import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Switch,
    TouchableOpacity,
    ScrollView
} from 'react-native'

import { getPromotions, createPromotion, updatePromotion } from '../../actions/PromotionAction'
import { getProducts } from '../../actions/ProductAction'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialIcons'

const delay = (ms) => new Promise(resolve =>
    setTimeout(resolve, ms)
);

class AdminCreatePromotion extends Component {

    state = {
        promotionName: '',
        promotionType: 'AMOUNT',
        promotionBool: false,
        promotionValue: '',
        promotionCondition: ''
    }

    componentDidMount() {
        this.promotion = this.props.navigation.getParam('promotion')        
        this.setState({
            promotionName: this.promotion ? this.promotion.name : '',
            promotionType: this.promotion ? this.promotion.type : 'AMOUNT',
            promotionBool: this.promotion ? (this.promotion.type === 'AMOUNT' ? false : true) : false,
            promotionValue: this.promotion ? this.promotion.value.toString() : '',
            promotionCondition: this.promotion ? this.promotion.condition.toString() : '',
            placeholderValue: this.promotion ? (this.promotion.type === 'AMOUNT' ? 'Valor pago na promoção (ao total)*' : 'Porcentagem da promoção*') : 'Valor pago na promoção (ao total)*',
        })
    }

    validatePromotion() {
        const isEdition = this.props.navigation.getParam('promotion') ? true : false
        const promotion = {
            type: this.state.promotionType,
            name: this.state.promotionName,
            value: parseInt(this.state.promotionValue),
            condition: parseInt(this.state.promotionCondition)
        }

        if ((!promotion.name || !promotion.value || !promotion.condition) ||
            (promotion.value === 0 || promotion.condition === 0 || promotion.name.trim().length === 0)) {
            alert("Os campos informados são inválidos!")
        } else {
            if (isEdition) {
                promotion["id"] = this.props.navigation.getParam('promotion').id

                delay(1000).then(() => { this.props.getProducts() })
                this.props.updatePromotion(promotion, this.props.navigation)
            } else {
                var ids = []
                this.props.promotions.forEach(promotion => {
                    ids.push(promotion.id)
                });

                promotion["id"] = Math.max(...ids) + 1

                this.props.createPromotion(promotion, this.props.navigation)                            
            }
        }
    }

    render() {
        this.props.getPromotions()

        return (
            <ScrollView style={styles.container}>
                <View style={styles.container}>
                    <Text style={styles.title}>{this.props.navigation.getParam('title', 'Criar Promoção')}</Text>
                    <Text style={styles.subtitle}>* Obrigatório</Text>
                    <Text style={styles.subtitle}>Escolha o tipo de promoção que você deseja.</Text>
                    <View style={styles.switchView}>
                        <Text>Quantidade</Text>
                        <Switch
                            style={styles.switchField}
                            onValueChange={(value) => this.setState({
                                promotionType: value ? 'PERCENTAGE' : 'AMOUNT',
                                promotionBool: value,
                                placeholderValue: value ? 'Valor pago na promoção (ao total)*' : 'Porcentagem da promoção*'
                            })}
                            value={this.state.promotionBool} />
                        <Text>Porcentagem</Text>
                    </View>
                    <View style={styles.textFieldIcon}>
                        <Icon style={styles.textIcon} size={24} name="format-quote" />
                        <TextInput
                            style={styles.textField}
                            underlineColorAndroid="transparent"
                            onChangeText={(text) => this.setState({ promotionName: text })}
                            value={this.state.promotionName}
                            placeholder={'Nome da Promoção*'} />
                    </View>
                    <View style={styles.textFieldIcon}>
                        <Icon style={styles.textIcon} size={24} name="shopping-cart" />
                        <TextInput
                            style={styles.textField}
                            underlineColorAndroid="transparent"
                            onChangeText={(text) => this.setState({ promotionCondition: text })}
                            value={this.state.promotionCondition}
                            keyboardType='numeric'
                            placeholder={'Quantidade de Produtos*'} />
                    </View>
                    <View style={styles.textFieldIcon}>
                        <Icon style={styles.textIcon} size={24} name={this.state.promotionBool ? 'money-off' : 'attach-money'} />
                        <TextInput
                            style={styles.textField}
                            underlineColorAndroid="transparent"
                            onChangeText={(text) => this.setState({ promotionValue: text })}
                            value={this.state.promotionValue}
                            keyboardType='numeric'
                            placeholder={this.state.placeholderValue} />
                    </View>

                    <TouchableOpacity
                        style={styles.submitButton}
                        onPress={() => this.validatePromotion()}>
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
        promotions: state.ProductReducer.promotions
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getPromotions: () => dispatch(getPromotions()),
        getProducts: () => dispatch(getProducts()),
        createPromotion: (promotion, navigation) => { dispatch(createPromotion(promotion)), navigation.pop() },
        updatePromotion: (promotion, navigation) => { dispatch(updatePromotion(promotion)), navigation.pop() }        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminCreatePromotion)

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    switchView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8,
        paddingVertical: 16,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'white'
    },
    switchField: {
        marginHorizontal: 8
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