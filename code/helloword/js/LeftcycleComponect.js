
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class LeftcycleComponect extends Component{
    constructor(props){
        super(props);
        this.state = {
            count:0
        };
    }
    componentWillMount(){
        console.log('componentWillMount:组件在装载之前被调用')
    }
    componentDidMount(){
        console.log('componentDidMount: render之后被调用');
    }
    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps: Props将要改变时被调用')
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log('shouldComponentUpdate: State改变时被调用');
        // 返回true就更新组件，返回false就什么都不处理
        return true;
    }
    componentWillUpdate(nextProps,nextState){
       /* 如果组件状态或者属性改变，并且上面的 shouldComponentUpdate(...) 返回为 true，
        就会开始准更新组件
       */
       console.log('componentWillUpdate: State即将改变时被调用，之后执行render方法');
    }
    componentDidUpdate(prevProps,prevState){
        console.log('componentDidUpdate: State改变之后render组件完成之后被调用');
    }
    componentWillUnmount(){
        console.log('componentWillUnmount: 组件被卸载之前被调用');
    }
    render(){
        console.log('render时被调用');
        return (
            <View>
                <Text style={styles.textStyle} onPress={()=>{
                    this.setState({
                        count:this.state.count+1
                    });
                }}>
                    点击{this.props.name}啊
                </Text>
                <Text>
                    被点击了：{this.state.count}次数
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textStyle:{
        fontSize:20,
        textAlign:'center',
        color:'green'
    }
});