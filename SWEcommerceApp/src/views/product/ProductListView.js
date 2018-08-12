import React, { Component } from 'react'
import {
    View,
    FlatList,
    StyleSheet
} from 'react-native'

import { connect } from 'react-redux'
import { getProducts } from '../../actions/ProductAction'

import ProductItem from './ProductItem'

class ProductListView extends Component {

    componentDidMount() {
        this.props.getProducts();        
    }

    render() {               
        return(
            <View style={styles.container}>
                <FlatList
                    style={styles.list}
                    data={this.props.products}
                    renderItem={(product) => <ProductItem product={product} navigation={this.props.navigation} />}
                    keyExtractor={(item) => 'id-' + item.id }
                />
            </View>
        )
    }
}

function mapStateToProps(state) {    
    return {
        products: state.ProductReducer.products
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getProducts : () => dispatch(getProducts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListView)

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    list: {
        marginTop: 4
    }
})