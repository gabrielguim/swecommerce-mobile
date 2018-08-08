import { createStackNavigator } from 'react-navigation'

import ProductListView from '../product/ProductListView'
import ProductDetail from '../product/ProductDetail'

export default ProductStackNavigator = createStackNavigator({
  ProductListView: {
    screen: ProductListView, 
    navigationOptions: {  
      header: null,
      title: 'Products'
    }
  },
  ProductDetail: {
    screen: ProductDetail,
    navigationOptions: {
      header: null,
      title: 'Product Details'
    }
  }
});
