import React from 'react';
import { 
  View, 
  StyleSheet 
} from "react-native";

import { createStore } from 'redux'
import { Provider } from 'react-redux' 
import HomeNavigator from './src/views/navigators/HomeNavigator'
import reducer from './src/reducers/reducer';

const store = createStore(reducer)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <HomeNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});