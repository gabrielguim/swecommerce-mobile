import { createStackNavigator } from 'react-navigation'

import AdminView from '../admin/AdminView'
import AdminCreateProduct from '../admin/AdminCreateProduct'
import AdminCreatePromotion from '../admin/AdminCreatePromotion'
import AdminProductListView from '../admin/AdminProductListView'
import AdminPromotionListView from '../admin/AdminPromotionListView'

export default AdminStackNavigator = createStackNavigator({
  AdminView: {
    screen: AdminView, 
    navigationOptions: { 
      title: 'Opções'
    }
  },
  AdminProductListView: {
    screen: AdminProductListView,
    navigationOptions: {
      title: 'Produtos'
    }
  },
  AdminCreateProduct: {
    screen: AdminCreateProduct,
    navigationOptions: ({navigation}) => ({
      title: navigation.getParam('title', 'Criar Produto')
    })
  },
  AdminPromotionListView: {
    screen: AdminPromotionListView,
    navigationOptions: {
      title: 'Promoções'
    }
  },
  AdminCreatePromotion: {
    screen: AdminCreatePromotion,
    navigationOptions: ({ navigation }) => ({
      title: navigation.getParam('title', 'Criar Promoção')
    })
  }
  
});
