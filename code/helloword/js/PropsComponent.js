
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Text,
    View
} from 'react-native';

export default class PropsComponect extends Component{
    static defaultProps={
        name:'我是默认属性',
        age:5,
        sex:'男'
    }

    static propTypes={
        age:PropTypes.number,
        name:PropTypes.string,
        sex:PropTypes.string.isRequired
    };
    render(){
        return <View>
            <Text>{this.props.name},性别：{this.props.sex}</Text>
        </View>
    }
}