import React, { Component } from 'react'
import {View,Text,StyleSheet} from 'react-native'



class Cart extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.homeText}>Hi this is Cart page</Text>

            </View>
        )
    }
}

export default Cart

const styles =StyleSheet.create({
        container:{
            flex:1,
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:'blue'
        },
        homeText:{
            fontSize:28,
            fontWeight:'bold',
            color:'#ffffff'
        }
})