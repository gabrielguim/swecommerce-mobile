import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Platform, 
    StatusBar,
    TouchableOpacity
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconBadge from 'react-native-icon-badge';
import { connect } from 'react-redux';

class CustomHeader extends Component {
    render() {
        return (
            <View style={styles.navBar}>
                <Text style={styles.navBarText}>SW e-commerce</Text>
                <View style={styles.rightNav}>
                    <TouchableOpacity>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                            <IconBadge
                                MainElement={<Icon style={styles.navItem} color={'white'} name="shopping-cart" size={28} />}
                                BadgeElement={<Text style={{ color: 'white' }}>{this.props.cart.length}</Text>}
                                IconBadgeStyle={styles.iconBadge}
                                Hidden={this.props.cart.length == 0}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

function mapStateToProps(state) {    
    return {
        cart: state.CartReducer.cart
    }
}

export default connect(mapStateToProps)(CustomHeader)

const styles = StyleSheet.create({
    navBar: {
        height: 80,
        backgroundColor: 'white',
        elevation: 4,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight + 20,
        paddingBottom: 20,
        backgroundColor: "#960a0a"
    },
    navBarText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'  
    },
    rightNav: {
        flexDirection: 'row'
    },
    navItem: {
        padding: 8
    },
    iconBadge: {
        width: 18,
        height: 18,
        backgroundColor: 'red'
    }
})
