import { createSelector } from "reselect";
import { fromJS } from "immutable";

const selectCategoriesDomain = state => fromJS(state.categories);

const makeSelectCategory = () =>
  createSelector(
    selectCategoriesDomain,
    state => state && state.get("category")
  );

const makeSelectCategoryItems = () =>
  createSelector(selectCategoriesDomain, makeSelectCategory, state => {
    const categoryName = state.get("category");
    return state && state.get(categoryName);
  });

const makeSelectLoadingState = () =>
  createSelector(
    selectCategoriesDomain,
    state => state && state.get("loading")
  );

const makeSelectErrorState = () =>
  createSelector(selectCategoriesDomain, state => state && state.get("error"));

export {
  makeSelectLoadingState,
  makeSelectErrorState,
  makeSelectCategory,
  makeSelectCategoryItems
};
