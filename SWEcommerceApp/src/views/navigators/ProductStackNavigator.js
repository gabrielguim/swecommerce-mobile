import React from 'react'
import { createStackNavigator } from 'react-navigation'

import ProductListView from '../product/ProductListView'
import ProductDetail from '../product/ProductDetail'
import CustomHeader from './CustomHeader';

export default ProductStackNavigator = createStackNavigator({
  ProductListView: {
    screen: ProductListView, 
    navigationOptions: { 
      headerRight: (<CustomHeader />), 
      title: 'Products'
    }
  },
  ProductDetail: {
    screen: ProductDetail,
    navigationOptions: {
      headerRight: (<CustomHeader />), 
      title: 'Product Details'
    }
  }
});
