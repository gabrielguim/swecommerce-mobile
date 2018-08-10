import React, { Component } from 'react'
import {
    View,
    FlatList,
    StyleSheet
} from 'react-native'

import { connect } from 'react-redux'
import { getPromotions } from '../../actions/PromotionAction'

import AdminPromotionItem from './AdminPromotionItem'

class AdminPromotionListView extends Component {

    componentDidMount() {
        this.props.getPromotions();        
    }

    render() {        
        return(
            <View style={styles.container}>
                <FlatList
                    style={styles.list}
                    data={this.props.promotions}
                    renderItem={(promotion) => <AdminPromotionItem promotion={promotion} navigation={this.props.navigation} />}
                    keyExtractor={(item) => 'id-' + item.id }
                />
            </View>
        )
    }
}

function mapStateToProps(state) {        
    return {
        promotions: state.PromotionReducer.promotions
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getPromotions: () => dispatch(getPromotions())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPromotionListView)

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    list: {
        marginTop: 4
    }
})