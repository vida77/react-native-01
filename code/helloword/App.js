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
import HelloWordComponect from './js/HelloWordComponect'
import LeftcycleComponect from './js/LeftcycleComponect';

import Import2Exprot,{nameOne,nameTwo,sum} from  './js/import2export';
import PropsComponent from  './js/PropsComponent';
import StateComponect from  './js/StateComponect';
import RefComponect from  './js/RefComponect';

export default class App extends Component<{}> {
  constructor(props){
     super(props);
     this.state = {
         remove:false,
         size:0
     };
  }
  render() {
    let view = this.state.remove?null:<LeftcycleComponect name='张三'/>;
    let text = this.state.remove?'装载':'卸载';
    let person = {
        name:'小红',
        age:16,
        sex:'女'
    };
    return (
      <View style={styles.container}>

           <RefComponect ref={reftest=>this.reftest=reftest}/>

            <Text style={styles.refStyle} onPress={()=>{
                this.setState({
                    size:this.refs.refTest.getSize(),
                    size2:this.reftest.getSize()
                });
            }}>点击获取ref汽车大小: {this.state.size} , reftest2:{this.state.size2}</Text>
            <RefComponect ref="refTest"/>
            <StateComponect/>
            <Text
               style={{color:'green',fontSize:30}}
               onPress={()=>{
                   this.setState({
                       remove:!this.state.remove
                   });
               }}
            >{text}
            </Text>
            {view}
            <Text style={{color:"#ff0000"}}>
                {nameOne},{nameTwo}。 2+3={sum(2,3)}
            </Text>

          {/*<PropsComponent*/}
              {/*name='张三是属性'*/}
              {/*sex='女'*/}
          {/*/>*/}
          {/*<PropsComponent*/}
            {/*name={person.name}*/}
            {/*sex={person.sex}*/}
          {/*/>*/}
          <PropsComponent
              {...person}
          />

      </View>
    );
  }
}

const styles = StyleSheet.create({
    refStyle:{
        margin:30
    },
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
