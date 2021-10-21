import React, { Component } from 'react'
import {View,Text,StyleSheet,ActivityIndicator,FlatList} from 'react-native'
import axios from 'axios'



class Categoty extends Component {

    constructor(){
        super()
        this.state={
            loader:false,
            DATA:[]
        }

    }

    componentDidMount(){
       // this.getData()
    }

    getData(){
        this.setState({loader:true})
        fetch('https://api.sampleapis.com/coffee/hot')
        .then((response)=>response.json())
        .then((response)=>{
            if(response.length > 0){
                this.setState({DATA:response})
            }
            this.setState({loader:false})
            
        })
        .catch((error)=>{
            this.setState({loader:false})
            console.log('Eroor is :',error);
        })
    }

    getAxiosData(){
        this.setState({loader:true})
        axios.get('https://api.sampleapis.com/coffee/hot')
        .then((response)=>{
            this.setState({loader:false,DATA:response.data})
            console.log('2');
            console.log('axios response : ',response.data)})
            
        .catch((error)=>{
            this.setState({loader:false})
            console.log('axios error is :',error)})
    }

    render() {
        const renderItem=({item})=>(
            
            <View style={styles.itemContainer}>
                <Text>{item.title}</Text>
                <Text style={styles.itemDesc}>{item.description}</Text>
                
            </View>
        )

        return (
            <View style={styles.container}>
                <ActivityIndicator size={50} color='grey' animating={this.state.loader}/>
                <Text style={styles.homeText}
                    onPress={()=>this.getAxiosData()}>Hi this is Category List</Text>
                <FlatList style={{width:'95%',marginTop:10}}
                    data={this.state.DATA}
                    renderItem={renderItem}
                />
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
            backgroundColor:'#eeeeee'
        },
        homeText:{
            fontSize:28,
            fontWeight:'bold',
            color:'black'
        },
        itemContainer:{
            width:'100%',          
            padding:10,
            backgroundColor:'#ffffff',
            elevation:4,
            marginBottom:10          

        },
        itemDesc:{
            fontSize:14,
            color:'#369',
            fontWeight:'bold',
            marginTop:10
        }
})
