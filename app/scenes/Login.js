import React, { Component } from 'react'

const hyrestaffGreen = '#00A3A0'

import {
  View,
  TextInput,
  Text,
  Button
} from 'react-native'

import { login } from '../api'

class Login extends Component {
  constructor (props) {
    super(props)

    this.state = { email: '', password: '' }
  }
  onLogin () {
    const credentials = { email: this.state.email, password: this.state.password }

    login(credentials)
      .then(() => {
        // successfully logged in
        this.state.go('Dashboard')
      })
      .catch(() => {
        // render an alert or something that there was an error
      })
  }
  render () {
    return (
      <View style={{padding: 10}}>
        <Text>Login To HyreStaff</Text>

        <Text>Email</Text>
        <TextInput
          style={{height: 40}}
          placeholder="Email"
          onChangeText={(email) => this.setState({ email })} />

        <Text>Password</Text>
        <TextInput
          style={{height: 40}}
          placeholder="Password"
          onChangeText={(password) => this.setState({ password })} />

        <Button 
          onPress={this.onLogin.bind(this)}
          title="Login"
          color={hyrestaffGreen}
          accessibilityLabel="Login"
          />

      </View>
    )
  }
}

export default Login
