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

import { deletePromotion } from '../../actions/PromotionAction'

class AdminPrmotionItem extends Component {
    render() {
        let promotion = this.props.promotion.item

        return (
            <View style={styles.container}>
                <View style={styles.itemContainer}>
                    <View style={styles.rowContainer}>
                        <Text style={styles.promotionName}>{promotion.name}</Text>
                    </View>
                    <View style={styles.rowContainer}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => this.props.navigation.navigate('AdminCreatePromotion', { promotion: promotion })}>
                            <Icon name="edit" size={24} />
                            <Text style={styles.buttonText}>Editar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                Alert.alert(
                                    'Remover Promoção',
                                    'Tem certeza que deseja remover a Promoção ' + promotion.name,
                                    [
                                        { text: 'Não', onPress: () => { }, style: 'cancel' },
                                        { text: 'Sim', onPress: () => this.props.deletePromotion(promotion) },
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
        deletePromotion: (promotion) => dispatch(deletePromotion(promotion))
    }
}

export default connect(null, mapDispatchToProps)(AdminPrmotionItem)

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
    promotionName: {
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'flex-end',
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
    rowContainer: {
        flexDirection: 'row',
    },
    rightContainer: {
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    buttonText: {
        fontSize: 12
    }
})