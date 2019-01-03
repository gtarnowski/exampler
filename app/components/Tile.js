import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";
import { compose } from "redux";

import { colors, wrapper } from "../styles";
import { categorySet } from "../containers/Categories/actions";
import { createStructuredSelector } from "reselect";

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
      style={container}
      onPress={() => onRedirectToCategory(name)}
    >
      <View style={wrapper}>
        <Icon name={iconName} size={50} color={colors.snow} />
        <Text style={text}>{name.toUpperCase()}</Text>
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

const { container, text } = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundLighter,
    width: "40%",
    height: 100,
    justifyContent: "center",
    margin: 10,
    borderRadius: 3
  },
  text: {
    color: colors.snow,
    fontWeight: "600",
    fontSize: 17
  }
});

export default compose(
  withConnect,
  withNavigation
)(Tile);
