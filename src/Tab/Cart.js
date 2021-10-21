import React, { Component } from 'react'
import {View,Text,StyleSheet,ScrollView} from 'react-native'



class Cart extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollConatiner}>
                    <View style={styles.scrollChildView}>
                        <View style={styles.headerCard}></View>
                    </View>

                </ScrollView>

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
            backgroundColor:'#eeeeee'
        },
        scrollConatiner:{
            width:'100%',
            height:'100%'
        },
        scrollChildView:{
            width:'100%',
            alignItems:'center',
            justifyContent:'center'

        },
        headerCard:{
            width:'95%',
            height:200,
            alignItems:'center',
            backgroundColor:'#ffffff'
        }
})
