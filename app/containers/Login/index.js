import React, { Component } from "react";
import { Text, View } from "react-native";

import { heading, container } from "../../styles";
import { Button, LinkButton, Row } from "../../ui";
import Logo from '../../components/Logo'

class LoginHomeScreen extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    const { navigation } = this.props;

    const onRedirectToRegister = () => navigation.navigate("Register");
    const onRedirectToLogin = () => navigation.navigate("Login");

    return (
      <View style={container}>
        <Logo />
        <Row>
          <Text style={heading}>EXAMPLER</Text>
        </Row>

        {/*<Form type={LoginModel} options={options} stylesheet={formStyles}/>*/}

        <Row>
          <Button onPress={onRedirectToLogin} title="LOGIN" color="white" />
        </Row>
        <Row>
          <LinkButton
            onPress={onRedirectToRegister}
            title="Do not have an account?"
          />
        </Row>
      </View>
    );
  }
}

export Login from "./Login";
export Register from "./Register";
export default LoginHomeScreen;
