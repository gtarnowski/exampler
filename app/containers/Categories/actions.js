import { createAction } from "redux-act";

export const savePlanets = createAction("CATEGORIES_SAVE_PLANETS");
export const saveStarships = createAction("CATEGORIES_SAVE_STARSHIPS");
export const saveSpecies = createAction("CATEGORIES_SAVE_SPECIES");
export const saveVehicles = createAction("CATEGORIES_SAVE_VEHICLES");

export const categorySet = createAction("CATEGORIES_CATEGORY_SET");
export const searchCategoryItems = createAction(
  "CATEGORIES_SEARCH_CATEGORY_ITEMS"
);

export const setLoading = createAction("CATEGORIES_SET_LOADING");
export const setError = createAction("CATEGORIES_SET_ERROR");
