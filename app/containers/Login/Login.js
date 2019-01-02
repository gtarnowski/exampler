import React from "react";
import t from "tcomb-form-native";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { compose } from "redux";
import { Text, KeyboardAvoidingView } from "react-native";

import { Row, Button, LinkButton } from "../../ui";
import { heading, container } from "../../styles";
import Form from '../../components/Form'
import Logo from '../../components/Logo'
import { submitLogin } from "./actions";

const TXT_LOGIN = "LOGIN";


const LoginModel = t.struct({
  username: t.String,
  password: t.String
});

const options = {
  fields: {
    username: {
      placeholder: "Username"
    },
    password: {
      placeholder: "Password"
    }
  }
};

const Login = ({ navigation: { navigate }, onSubmitLogin }) => {
  let formRef = null;
  const onRedirectToLogin = () => navigate("Register");
  const onSubmit = () => {
    if (!formRef) return;

    const payload = formRef.getValue();

    if (payload) {
      onSubmitLogin(payload);
    }
  };

  return (
    <KeyboardAvoidingView style={container} behavior="padding" enabled>
      <Logo />
      <Row>
        <Text style={heading}>{TXT_LOGIN}</Text>
      </Row>
      <Form ref={ref => (formRef = ref)} type={LoginModel} options={options} />
      <Row>
        <Button title="Submit" onPress={onSubmit} />
      </Row>
      <Row>
        <LinkButton
          title="Do not have an account?"
          onPress={onRedirectToLogin}
        />
      </Row>
    </KeyboardAvoidingView>
  );
};

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = dispatch => ({
  onSubmitLogin: payload => dispatch(submitLogin(payload))
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(Login);
