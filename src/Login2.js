import React,{Component} from "react";
import {TextAnimationFadeIn} from 'react-native-text-effects'
import{
    View,
    ImageBackground,
    StyleSheet,
    Image,
    TextInput,
    TouchableHighlight,
    Text

} from 'react-native'

class LoginScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                 <ImageBackground source={require('../assets/bg.jpg')}
                 style={styles.backgroud_image}>
                     <Image source={require('../assets/logoplate.png')}
                     style={styles.logo}></Image>
                     <TextAnimationFadeIn value={"Welcome"} delay={100} duration={1000} style={styles.textWelcome} />
                     <TextInput style={styles.textinput} placeholder='Username'></TextInput>
                     <TextInput style={styles.textinput} placeholder='Password'></TextInput>
                     <TouchableHighlight style={styles.buttonView}>
                        <Text style={styles.buttonText}>Sign in</Text>

                     </TouchableHighlight>


                </ImageBackground>
               
            </View>
        )
    }

}

export default LoginScreen;


const styles = StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
        backgroundColor:'red'
    },
    backgroud_image:{
        width:'100%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center' 
    },
    logo:{
        height:100,
        width:100,
        marginBottom:10
    },
    textinput:{
        width:'80%',
        height:45,
        borderWidth:1,
        borderRadius:5,
        borderColor:'#8BC34A',
        backgroundColor:'#fafafa',
        marginTop:20
    },
    buttonView:{
    width:'50%',
    height:40,
    backgroundColor:'green',
    borderRadius:10,
    marginTop:30,
    alignItems:'center',
    justifyContent:'center'

    },
    buttonText:{
        color:"#fff",
        fontWeight:'bold'
    },
    textWelcome:{
        color:'#000',
        fontSize:30
        
    }
    
})