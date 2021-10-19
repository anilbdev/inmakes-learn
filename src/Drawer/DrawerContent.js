import React, { Component } from 'react'
import{View,StyleSheet,Image,Text} from 'react-native'



class DrawerContent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.profileContainer}>
                    <View style={styles.profileIcon}>
                    <Image style={styles.profileImage}
                        source={require('../../assets/logo.png')}></Image>
                    </View>
                    <View style={styles.infoView}>
                        <Text style={styles.nameText}>Freya</Text>
                        <Text style={styles.emailText}>Freya@gmail.com</Text>
                        <Text>1234567890</Text>
                    </View>
                </View>
                <Text style={styles.menu}
                    onPress={()=>{this.props.navigation.navigate('Home')}}>Home</Text>
                <Text style={styles.menu}
                     onPress={()=>{this.props.navigation.navigate('Profile')}}>Profile</Text>
                <Text style={styles.menu}
                    onPress={()=>{this.props.navigation.navigate('AboutUs')}}>About Us</Text>
                <Text style={styles.menu}
                    onPress={()=>{this.props.navigation.navigate('Settings')}}>Settings</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    menu:{
        fontSize:18,
        marginTop:10,
        marginLeft:10,
        color:'#369',
        fontWeight:'bold'

    },
    profileContainer:{
        height:'20%',
        width:'100%',
        backgroundColor:'red',
        flexDirection:'row',
        alignItems:'center'
    },
    profileIcon:{
        height:100,
        width:100,
        backgroundColor:'#bbbbbb',
        borderRadius:50,
        marginLeft:10,
        marginTop:10
    },
    infoView:{
        marginLeft:10,

    },
    profileImage:{
        height:'100%',
        width:'100%'
    },
    nameText:{
        color:'#360',
        fontWeight:'bold',
        marginBottom:5

    },
    emailText:{
        fontWeight:'bold'
    }
})

export default DrawerContent;
