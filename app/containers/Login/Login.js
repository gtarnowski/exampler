// External Libs
import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Text, KeyboardAvoidingView } from "react-native";

// External components and styles

import Form from "../../components/Form";
import Logo from "../../components/Logo";
import { Row, Button, LinkButton } from "../../ui";
import { heading, container } from "../../styles";

// Local imports
import { submitLogin } from "./actions";
import { loginOptions, LoginModel } from "./formModels";

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
        <Text style={heading}>LOGIN</Text>
      </Row>
      <Form
        ref={ref => (formRef = ref)}
        type={LoginModel}
        options={loginOptions}
      />
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
