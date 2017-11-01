
import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';

export default class Import2Exprot extends Component{
    render(){
        return <View>
            <Text>Import2Exprot</Text>
        </View>
    }
}

//module.exports = Import2Exprot;


var nameOne = '变量';
var nameTwo = "变量2";

export function sum(a,b) {
    return a+b;
}

//  function sum(a,b) {
//     return a+b;
// }

export {nameOne,nameTwo};





