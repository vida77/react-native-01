import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import PropTypes from 'prop-types';

export  default  class HelloWord extends Component{
    sum(a,b){
         return a+b;
    }
    static defaultProps = {
        name:'小红',
        age:18,
    };
    static propTypes = {
        name:PropTypes.string,
        age:PropTypes.number
    };

    render(){
        console.log('render')
        return <Text style={styles.text}>
            hello word , {this.props.name}
        </Text>
    }
    componentWillMount(){
        console.log('componentWillMount: render之前被调用')
    }
    componentDidMount(){
        console.log('componentDidMount: render之后被调用')
    }
    componentWillUnmount(){
        console.log('组件被卸载之后被调用')
    }
}

const styles = StyleSheet.create({
    text: {
       color:'red',
       fontSize:30
    }
});
