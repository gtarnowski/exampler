import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { makeSelectUser } from "./containers/Login/selectors";
import { AppContainer, LoginAppContainer } from "./navigation/Navigator";

const App = ({ user }) => (user ? <AppContainer /> : <LoginAppContainer />);

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser()
});

export default connect(mapStateToProps)(App);
