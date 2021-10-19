import React, { Component } from 'react'
import {View,Text,StyleSheet} from 'react-native'



class Search extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.homeText}>Hi this is Search page</Text>

            </View>
        )
    }
}

export default Search

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
