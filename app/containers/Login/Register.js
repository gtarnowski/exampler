// External Libs
import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Text, KeyboardAvoidingView } from "react-native";

// External components and styles
import Logo from "../../components/Logo";
import Form from "../../components/Form";
import { Row, Button, LinkButton } from "../../ui";
import { heading, container } from "../../styles";

// Local imports
import { submitLogin } from "./actions";
import { registerOptions, RegisterModel } from "./formModels";

const Register = ({ navigation: { navigate }, onSubmitLogin }) => {
  let formRef = null;
  const onRedirectToLogin = () => navigate("Login");
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
        <Text style={heading}>REGISTER</Text>
      </Row>

      <Form
        ref={ref => (formRef = ref)}
        type={RegisterModel}
        options={registerOptions}
      />

      <Row>
        <Button title="Submit" onPress={onSubmit} />
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

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = dispatch => ({
  onSubmitLogin: payload => dispatch(submitLogin(payload))
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(Register);
