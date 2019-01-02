import React from "react";

import { Button, TextInput, Text, View, Heading } from "@shoutem/ui";
import { StyleSheet } from "react-native";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import { submitLogin } from "./actions";
import { makeSelectUser } from "./selectors";

const Row = ({ children }) => <View style={row}>{children}</View>;

const Login = ({ onSubmit }) => (   
  <View style={container}>
    <Row>
      <Heading styleName="bold h-center" style={heading}>
        LOGIN
      </Heading>
    </Row>
    <Row>
      <TextInput placeholder="Username" />
    </Row>
    <Row>
      <TextInput placeholder="Password" secureTextEntry />
    </Row>
    <Row>
      <Button onPress={onSubmit}>
        <Text>LOGIN</Text>
      </Button>
    </Row>
  </View>
);

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser()
});

const mapDispatchToProps = dispatch => ({
  onSubmit: payload => dispatch(submitLogin(payload))
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const { container, row, heading } = StyleSheet.create({
    container: {
        backgroundColor: "transparent",
        padding: 16,
        alignContent: "center",
        justifyContent: "center",
        flex: 1,
    },
    row: {
        padding: 16
    },
    heading: {
        color: "white",
    }
});

export default compose(withConnect)(Login);
