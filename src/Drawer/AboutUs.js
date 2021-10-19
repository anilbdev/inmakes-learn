import React, { Component } from 'react'
import {View,Text,StyleSheet} from 'react-native'



class AboutUs extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.aboutUsText}>Hi this is About Us page</Text>

            </View>
        )
    }
}

export default AboutUs

const styles =StyleSheet.create({
        container:{
            flex:1,
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:'yellow'
        },
        aboutUsText:{
            fontSize:28,
            fontWeight:'bold',
            color:'#ffffff'
        }
})
