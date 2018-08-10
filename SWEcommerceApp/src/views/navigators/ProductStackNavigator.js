import React from 'react'
import { createStackNavigator } from 'react-navigation'

import ProductListView from '../product/ProductListView'
import ProductDetail from '../product/ProductDetail'
import CustomHeader from './CustomHeader';

export default ProductStackNavigator = createStackNavigator({
  ProductListView: {
    screen: ProductListView, 
    navigationOptions: (headerOptions) => ({
      headerRight: (<CustomHeader headerOptions={headerOptions.navigation} />),
      title: 'Produtos'
    })
  },
  ProductDetail: {
    screen: ProductDetail,
    navigationOptions: (headerOptions) => ({
      headerRight: (<CustomHeader headerOptions={headerOptions.navigation} />),
      title: 'Detalhes do Produto'
    })
  }
});
