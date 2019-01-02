import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";
import { compose } from "redux";

import { colors, heading, container } from "../styles";
import { categorySet } from "../containers/Categories/actions";
import { createStructuredSelector } from "reselect";

const style = {
  backgroundColor: colors.backgroundLighter,
  width: "40%",
  height: 100,
  justifyContent: "center",
  margin: 10
};

const viewStyle = {
  alignSelf: "center",
  alignContent: "center",
  alignItems: "center"
};

const textStyle = {
  color: colors.snow,
  fontWeight: "600",
  fontSize: 17
};

const Tile = props => {
  const {
    name,
    iconComponent: Icon,
    iconName,
    navigation: { navigate },
    onCategorySet
  } = props;

  const onRedirectToCategory = name => {
    const categoryName = name.toLowerCase();
    onCategorySet(categoryName);
    navigate("Categories", { categoryName });
  };

  return (
    <TouchableHighlight
      style={style}
      onPress={() => onRedirectToCategory(name)}
    >
      <View style={viewStyle}>
        <Icon name={iconName} size={50} color={colors.snow} />
        <Text style={textStyle}>{name.toUpperCase()}</Text>
      </View>
    </TouchableHighlight>
  );
};

const mapStateToProps = createStructuredSelector({});

export const mapDispatchToProps = dispatch => ({
  onCategorySet: categoryName => dispatch(categorySet(categoryName))
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  withConnect,
  withNavigation
)(Tile);
