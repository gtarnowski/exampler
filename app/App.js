import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { makeSelectUser } from "./containers/Login/selectors";
import AppContainer from "./navigation/AppContainer";
import Login from "./containers/Login";

const App = ({ user }) => (user ? <AppContainer /> : <Login />);

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser()
});

export default connect(mapStateToProps)(App);
