/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import HelloWord from './js/HelloWord';

export default class App extends Component {
  state = {
      text:'99999',
      sumText:''
  };
  constructor(props){
     super(props);
     // this.state = {
     //   remove:false,
     // }
  }
  render() {
      // let view = this.state.remove?null:<HelloWord name='张三' age={16}/>;
      // let text = this.state.remove?'装载':'卸载';
      let params = {
          name:'888',
          age:11,
          sex:'男',

      };
    return (
      <View style={styles.container}>

        <HelloWord ref='testRef' {...params} />
        <Text onPress={()=>{
            this.setState({
                sumText:this.refs.testRef.sum(2,9)
            });
        }}>
         点击我
        </Text>
        <Text>{this.state.sumText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
