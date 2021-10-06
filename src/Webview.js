import React,{Component} from "react";
import {
    View
} from 'react-native';
import { WebView } from 'react-native-webview';

class Webview extends Component{
    render(){
        return(
            <WebView source={{ uri: 'https://google.com' }} />
        )
    }
}

export default Webview;