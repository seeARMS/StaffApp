import React, { Component, PropTypes } from 'react'

const hyrestaffGreen = '#00A3A0'
const hyrestaffBgColor = '#CAE5E1'

import {
  View,
  Text,
  TouchableHighlight,
  Button,
  Image
} from 'react-native'

class HomeScene extends Component {
  onPressLogin () {
    this.props.go('Login')
  }
  render () {
    console.log(this.props)
    return (
      <View style={{ 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: hyrestaffBgColor
      }}>
        <Image 
          style={{width:100, height: 100}}
          source={require('../../assets/logo.png')} />
        <Button 
          onPress={this.onPressLogin.bind(this)}
          title="Login"
          color={hyrestaffGreen}
          accessibilityLabel="Login"
          />
      </View>
    )
  }  
}

HomeScene.propTypes = {
  go: PropTypes.func.isRequired
}

export default HomeScene
