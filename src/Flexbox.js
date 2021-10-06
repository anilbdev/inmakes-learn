import React,{Component} from "react";
import {
    View,
    StyleSheet,Text,
    TouchableHighlight,
    TextInput

} from 'react-native'

class FlexContent extends Component{
    render(){
        return(
            <View>
                <Text style={styles.contentStyle}>HI my name is {this.props.name}</Text>
            </View>
        )
    }
}


export default class Flexbox extends Component{
    constructor(){
        super();
        this.state={
            main_text:'Hi',
            sub_text:'React'
        }
    }

    componentDidMount(){
        console.log("the username is",this.props.route.params.username);
    }

    updateText(){
        console.log('update method clicked');
        this.setState({
            main_text:'Hi(Hello updated)',
            sub_text:'Framewrok(React updated)'
            })
        }
    

    render(){
        return(
            <View style = {styles.container}>
                <Text style= {styles.text}>{this.state.main_text}</Text>
                <Text style= {styles.text}>{this.state.sub_text}</Text>
                <Text style= {styles.text}> Native</Text>
                <TouchableHighlight style={styles.button}
                    underlayColor ='red'
                    onPress={()=>this.updateText()}>
                    <Text style={styles.buttonText}>Update</Text>

                </TouchableHighlight>

                <FlexContent name={this.props.route.params.username}>

                </FlexContent>

                <TextInput style={styles.inputView} placeholder='enter something'>

                </TextInput>

                
               

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,  //total screen is divided into one,if flex:2 >> means entire screen divided into two
        backgroundColor: 'white',
        alignItems:'center',
        justifyContent:'center',
        //flexDirection:"row"
    },
    text:{
        color:'black',
        fontWeight:'bold'
        
    },
    button:{
        width:'60%',
        height:40,
        backgroundColor:'green',
        alignItems:"center",
        justifyContent:"center",
        borderRadius:5,
        marginTop:20   
    },
    buttonText:{
        fontSize:18,
        fontWeight:'bold',
        color:"white"

    },
    contentStyle:{
        color:'red',
        fontSize:30,
        marginTop:20
    },
    inputView:{
        width:'80%',
        height:45,
        borderWidth:1,
        borderRadius:5,
        borderColor:'#8BC34A',
        backgroundColor:'#fafafa',
        marginTop:20
    }
})