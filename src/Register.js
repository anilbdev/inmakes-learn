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

class RegisterScreen extends Component{

    constructor(){
        super();
        this.state={
            message:""};
    }
    updateText(){
        console.log('update method clicked');
        this.setState({
            message:"Welcome"})
    }

    render(){
        return(
            <View style={styles.container}>
                 <ImageBackground source={require('../assets/bg.jpg')}
                 style={styles.backgroud_image}>
                     <Image source={require('../assets/logoplate.png')}
                     style={styles.logo}></Image>
                     <View style={styles.SectionStyle}>

                        <Image source={require('../assets/username.png')} style={styles.ImageStyle} />

                        <TextInput
                        style={{flex:1}}
                        placeholder="Enter Your Name Here"
                        underlineColorAndroid="transparent"
                        />

                    </View>
                    <View style={styles.SectionStyle}>

                        <Image source={require('../assets/email.png')} style={styles.ImageStyle} />

                        <TextInput
                        style={{flex:1}}
                        placeholder="Enter Your Email Here"
                        underlineColorAndroid="transparent"
                        />

                    </View>
                     
                     <View style={styles.mobileinput}>
                        <TextInput style={styles.mobile1} value='+91'></TextInput>
                        <TextInput style={styles.mobile2} placeholder='Enter your Mobile Number'></TextInput>
                     </View>
                     <View style={styles.SectionStyle}>

                        <Image source={require('../assets/password.png')} style={styles.ImageStyle} />

                        <TextInput
                        style={{flex:1}}
                        placeholder="Enter a Password"
                        underlineColorAndroid="transparent"
                        />

                    </View>
                     
                     <Text style={styles.textRegistered}> {this.state.message}</Text>
                     
                     <TouchableHighlight style={styles.buttonView}
                     underlayColor ='red'
                     onPress={()=>this.updateText()}>
                        <Text style={styles.buttonText}>Register</Text>

                     </TouchableHighlight>


                </ImageBackground>
               
            </View>
        )
    }

}

export default RegisterScreen;


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
    buttonView:{
    width:'50%',
    height:40,
    backgroundColor:'#2491ba',
    borderRadius:10,
    marginTop:30,
    alignItems:'center',
    justifyContent:'center'

    },
    buttonText:{
        color:"#fff",
        fontWeight:'bold'
    },
    textRegistered:{
        color:'red',
        fontSize:30,
        marginTop:20
        
    },
    mobileinput:{
        flexDirection:'row',
        width:'80%'

    },
    mobile1:{
        width:'15%',
        height:45,
        borderWidth:1,
        borderRadius:5,
        borderColor:'#8BC34A',
        backgroundColor:'#fafafa',
        marginTop:20,
        marginRight:'5%'
    },
    mobile2:{
        width:'80%',
        height:45,
        borderWidth:1,
        borderRadius:5,
        borderColor:'#8BC34A',
        backgroundColor:'#fafafa',
        marginTop:20
    },
    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: .5,
        borderColor: '#000',
        height: 40,
        borderRadius: 5 ,
        margin: 10,
        width:'80%'
    },
     
    ImageStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode : 'stretch',
        alignItems: 'center',
        tintColor: '#a6aba7' 
    }
    
})