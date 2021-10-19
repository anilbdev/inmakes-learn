import React, { Component } from 'react'
import {View,Text,StyleSheet,ActivityIndicator} from 'react-native'



class Categoty extends Component {

    constructor(){
        super()
        this.state={
            loader:false
        }

    }

    componentDidMount(){
        this.getData()
    }

    getData(){
        fetch('https://api.sampleapis.com/coffee/hot')
        .then((response)=>response.json())
        .then((response)=>{
            console.log('Your response is: ',response);
        })
        .catch((error)=>{
            console.log('Eroor is :',error);
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size={50} color='grey' animating={true}/>
                <Text style={styles.homeText}>Hi this is Categoty page</Text>

            </View>
        )
    }
}

export default Categoty

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
