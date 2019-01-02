import React from "react";
import { Constants } from "expo";

import {
  View,
  Text,
  ListView,
  ScrollView,
  ActivityIndicator,
  TouchableHighlight
} from "react-native";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { searchCategoryItems } from "./actions";
import {
  makeSelectCategory,
  makeSelectCategoryItems,
  makeSelectErrorState,
  makeSelectLoadingState
} from "./selectors";
import { Divider } from "../../ui";
import { colors, heading } from "../../styles";

const container = {
  backgroundColor: colors.background,
  paddingTop: 70,
  paddingHorizontal: 16
};

const loaderContainer = {
  justifyContent: "center",
  height: "100%",
  backgroundColor: colors.background
};

const text = {
  color: colors.snow
}

class Categories extends React.Component {
  componentWillMount() {
    this.props.searchCategoryItems();
  }

  render() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    const { items, loading, error, categoryName } = this.props;
    console.log("loading", loading);
    console.log("ITEMS", items.length);
    if (loading)
      return (
        <View style={loaderContainer}>
          <ActivityIndicator size={80} color={colors.snow} />
        </View>
      );

    if (!items.length)
      return (
        <ScrollView style={container}>
          <Text>List is empty</Text>
        </ScrollView>
      );

    return (
      <ScrollView style={container}>
        <Text style={heading}>{categoryName.toUpperCase()}</Text>
        <ListView
          dataSource={ds.cloneWithRows(items)}
          renderRow={item => <ItemComponent {...item} />}
        />
      </ScrollView>
    );
  }
}

const Planet = () => (
  <View
    style={{
      backgroundColor: colors.snow,
      height: 80,
      width: 80,
      borderRadius: 100
    }}
  />
);

const ItemComponent = ({ name, diameter, population }) => {
  const getPopulationString = () => {
    if (population === "unknown" || !population) return "Unknown";
    return population.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  };

  return (
    <TouchableHighlight onPress={() => {}}>
      <View
        style={{
          height: "auto",
          marginBottom: 16,
          flex: 1,
          flexDirection: "row",
          flexWrap: "nowrap"
        }}
      >
        <Planet />
        <View style={{ width: "100%", marginLeft: 16 }}>
          <Text
            style={{
              color: colors.snow,
              fontWeight: "900",
              fontSize: 16,
              paddingBottom: 8
            }}
          >
            {name}
          </Text>
          <Divider />
          <Text style={text}>Diameter: {diameter}</Text>
          <Text style={text}>
            Population: {getPopulationString()}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const mapStateToProps = createStructuredSelector({
  categoryName: makeSelectCategory(),
  items: makeSelectCategoryItems(),
  loading: makeSelectLoadingState(),
  error: makeSelectErrorState()
});

export const mapDispatchToProps = dispatch => ({
  searchCategoryItems: () => dispatch(searchCategoryItems())
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(Categories);
