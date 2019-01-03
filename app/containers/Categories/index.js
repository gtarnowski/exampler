// External libs
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import { upperFirst } from "lodash";
import { ListView, StyleSheet } from "react-native";
import EmptyListing from "../../components/EmptyListing";
import Loader from "../../components/Loader";

// Local imports
import ItemComponent from "./ItemComponent";
import { searchCategoryItems } from "./actions";
import { colors } from "../../styles";
import {
  makeSelectCategory,
  makeSelectCategoryItems,
  makeSelectErrorState,
  makeSelectLoadingState
} from "./selectors";

class Categories extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${upperFirst(navigation.state.params.categoryName)}`,
    headerTintColor: colors.background
  });

  componentWillMount() {
    const { items } = this.props;
    if (!items || !items.length) {
      this.props.searchCategoryItems();
    }
  }

  render() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    const { items, loading } = this.props;

    if (loading) return <Loader />;
    if (!items.length) return <EmptyListing />;

    return (
      <ListView
        style={container}
        dataSource={ds.cloneWithRows(items)}
        renderRow={item => <ItemComponent {...item} {...this.props} />}
      />
    );
  }
}

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

const { container } = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    paddingHorizontal: 16
  }
});

export default compose(withConnect)(Categories);
