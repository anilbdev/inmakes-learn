import React, { Component } from 'react'
import {View,Text,StyleSheet} from 'react-native'



class Order extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.homeText}>Hi this is Order page</Text>

            </View>
        )
    }
}

export default Order

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
