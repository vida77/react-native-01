
import React, { Component } from 'react';
import {
    Text
} from  'react-native'

/* 方式一：ES6通过class来定义 */
export default class HelloWordComponect extends Component{
   render(){
       return <Text style={{fontSize:20,color:'red'}}> HelloWord Componect </Text>
   }
}

/*  方式二：ES5通过class来定义, react-native已经弃用
var HelloWordComponect = React.createClass({
    render(){
        return <Text style={{fontSize:20,color:'red'}}> HelloWord Componect </Text>
    }
});
module.exports = HelloWordComponect;
*/

/***
 *  方式三：函数式
 *  无状态，不能使用this
 *  但是可以通过传参进行赋值
 */
// function HelloWordComponect(props){
//     return <Text style={{fontSize:20,color:'red'}}> Hello React-Native {props.name}  </Text>
// }
// module.exports = HelloWordComponect;