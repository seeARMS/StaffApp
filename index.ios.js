/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import HomeScene from './app/scenes/Home'
import LoginScene from './app/scenes/Login'

export default class HyreStaff extends Component {
  render() {
    return (
        <Navigator
          initialRoute={{ title: 'Home', index: 0}}
          renderScene={(route, navigator) => {
            switch (route.title) {
              case 'Home':
                return <HomeScene 
                        go={this.onGo.bind(this, route, navigator)} 
                        back={this.onBack.bind(this, route, navigator)} />
              case 'Login':
                return <LoginScene go={this.onGo.bind(this, route, navigator)} 
                        back={this.onBack.bind(this, route, navigator)} />
              case 'Dashboard':
                return <DashboardScene go={this.onGo.bind(this, route, navigator)}
                        back={this.onBack.bind(this, route, navigator)} />

            }
          }} 
          />
    );
  }
  onGo (route, navigator, title) {
    const nextIndex = route.index + 1
    navigator.push({
      title,
      index: nextIndex
    })
   
  }
  onBack (route, navigator) {
    if (route.index > 0) {
      navigator.pop()
    }
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

AppRegistry.registerComponent('hyrestaff', () => HyreStaff);
