import React from "react";
import { Text, KeyboardAvoidingView} from "react-native";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import Logo from '../../components/Logo'
import { submitLogin } from './actions'
import { Row, TextInput, Button, LinkButton } from "../../ui";
import { heading, container } from "../../styles";


import Form from '../../components/Form'
const TXT_REGISTER = "REGISTER";

const Register = ({ navigation: { navigate } }) => {
  const onRedirectToLogin = () => navigate("Login");
  return (
    <KeyboardAvoidingView style={container} behavior="padding" enabled>
      <Logo />
      <Row>
        <Text style={heading}>{TXT_REGISTER}</Text>
      </Row>
      <Row>
        <TextInput placeholder="Username" textContentType="username" />
      </Row>
      <Row>
        <TextInput placeholder="Password" textContentType="password" />
      </Row>
      <Row>
        <TextInput placeholder="Repeat Password" textContentType="password" />
      </Row>

      <Row>
        <Button title="Submit" onPress={() => {}} />
      </Row>
      <Row>
        <LinkButton
          title="You already have a login?"
          onPress={onRedirectToLogin}
        />
      </Row>
    </KeyboardAvoidingView>
  );
};

const mapStateToProps = createStructuredSelector({

})

const mapDispatchToProps = dispatch => ({
  onSubmitLogin: payload => dispatch(submitLogin(payload)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Register);
