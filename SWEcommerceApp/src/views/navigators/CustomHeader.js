import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconBadge from 'react-native-icon-badge';
import { connect } from 'react-redux';

class CustomHeader extends Component {
    render() {       
        return (
            <TouchableOpacity>
                <View style={styles.badge}>
                    <IconBadge
                        MainElement={<Icon style={styles.navItem} color={'#960a0a'} name="shopping-cart" size={28} />}
                        BadgeElement={<Text style={styles.badgeText}>{this.props.cart.length}</Text>}
                        IconBadgeStyle={styles.iconBadge}
                        Hidden={this.props.cart.length == 0}
                    />
                </View>
            </TouchableOpacity>
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
    badge: {
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'center'
    },
    badgeText: {
        color: 'white'
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
