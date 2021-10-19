import React,{Component} from "react";
//import { createStackNavigator } from "@react-navigation/stack";
//import 'react-native-gesture-handler';

import{
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  TextInput,
  TouchableHighlight
}from 'react-native'

 //Login is the name given to the class
export default class Login extends Component{    
constructor(){
  super();
  this.state={
    name:null
  }
}

updateValue(username){
  //console.log(username);
  this.setState({
    name:username
  })
}

  render(){
    return(
      <View style = {styles.container}>
        <ImageBackground source= {require('../assets/bg.jpg')}  
        style= {styles.background_image}>
          <Image source= {require('../assets/logo.png')} style= {styles.logo}>

          </Image>
          <Text style = {styles.textView}>Welcome to React Native Journey</Text>
          <TextInput 
            style={styles.inputView} 
            placeholder='Username'
            placeholderTextColor='grey' 
            maxLength={10}
            onChangeText={(username)=>this.updateValue(username)}
            >
            
          </TextInput>
          <TextInput style={styles.inputView} placeholder='Password'placeholderTextColor='grey' secureTextEntry={true}></TextInput>
          <TouchableHighlight style = {styles.buttonView}
          underlayColor ='transparent'
          onPress = {()=>this.props.navigation.navigate('Tab',{username:this.state.name})}
          >
            <Text style = {styles.buttonText}>Login</Text>
          </TouchableHighlight>

          
          

         
        </ImageBackground>

      </View>
    )
  }


}  

const styles = StyleSheet.create({
  container : {
    height:'100%',
    width :'100%',
    backgroundColor:'#ffffff'
  },
  background_image: {
    height:'100%',
    width:'100%',
    alignItems:"center",
    justifyContent:'center'
  },
  logo:{
    height:100,
    width:100,
    marginBottom:20
    
  },
  textView:{
    fontSize:20,
    fontWeight:'bold',
    //marginTop:20
  },
  inputView:{
    width:'80%',
    height:45,
    borderWidth:1,
    borderRadius:5,
    borderColor:'#8BC34A',
    backgroundColor:'#fafafa',
    marginTop:20

  },
  buttonView:{
    width:'60%',
    height:50,
    backgroundColor:'green',
    borderRadius:10,
    marginTop:30,
    alignItems:'center',
    justifyContent:'center'
  },
  buttonText:{
    fontSize:22,
    fontWeight:'bold',
    color:'white'
  }

})