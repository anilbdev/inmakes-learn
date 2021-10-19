import React, { Component } from 'react'
import {View,Text,StyleSheet} from 'react-native'



class Settings extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.settingsText}>Hi this is Settings page</Text>

            </View>
        )
    }
}

export default Settings;

const styles =StyleSheet.create({
        container:{
            flex:1,
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:'red'
        },
        settingsText:{
            fontSize:28,
            fontWeight:'bold',
            color:'#ffffff'
        }
})
