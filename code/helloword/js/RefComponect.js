
import React, { Component } from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';

export default class RefComponect extends Component{
    constructor(props){
        super(props);
        this.state = {
            size:20
        }
    }
    getSize(){
        return this.state.size;
    }
    render(){
        return <View>
            <Text
                onPress={()=>{
                    this.setState({
                        size:this.state.size+10
                    });
                }}
                style={{color:'red'}}>
                RefComponect单击变大state：{this.state.size}
            </Text>
            <Image source={{uri: 'http://pic4.nipic.com/20091103/3178344_123934130958_2.jpg'}}
                   style={{width: this.state.size*2, height: this.state.size}} />
        </View>
    }
}