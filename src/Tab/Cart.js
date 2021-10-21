import React, { Component } from 'react'
import {View,Text,StyleSheet,ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'



class Cart extends Component {
    constructor(){
        console.log("constructor called");
        super()
        this.state={headerText:null}
    }

    static getDerivedStateFromProps(){
        console.log("get drived state from props called");
        return null
    }

    componentDidMount(){
        console.log("component called-did mount");
    }

    render() {
        console.log("Render called");
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollConatiner}>
                    <View style={styles.scrollChildView}>
                        <View style={styles.headerCard}>
                            <Text style={{fontSize:16,fontWeight:'bold',marginTop:10}}>{this.state.headerText}</Text>
                        </View>
                        <View style={styles.baseLineCard}>
                            <View style={styles.textHolder}>
                                <Icon name='edit' size={16} color={'black'}/>
                                <Text style={{fontSize:16,marginLeft:10}}>Mounting</Text>
                            </View>
                            <View style={styles.textHolder}>
                                <Icon name='edit' size={16} color={'black'}/>
                                <Text style={{fontSize:16,marginLeft:10}}>Updating</Text>
                            </View>
                            <View style={styles.textHolder}>
                                <Icon name='edit' size={16} color={'black'}/>
                                <Text style={{fontSize:16,marginLeft:10}}>Unmounting</Text>
                            </View>
                        </View>
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
            backgroundColor:'#ffffff',
            elevation:4,
            marginTop:30
        },
        baseLineCard:{
            width:'95%',
            padding:15,
            backgroundColor:'#ffffff',
            marginTop:30
        },
        textHolder:{
            marginTop:20,
            flexDirection:'row',
            alignItems:'center'
        }
})
