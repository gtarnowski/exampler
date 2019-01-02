import { fromJS } from "immutable";
import { createReducer } from "redux-act";
import {
  savePlanets,
  saveStarships,
  saveSpecies,
  saveVehicles,
  categorySet,
  setError,
  setLoading
} from "./actions";

export const initialState = fromJS({
  planets: [],
  starships: [],
  species: [],
  vehicles: [],
  category: null,
  loading: false,
  error: false
});

export const methods = {
  [savePlanets]: (state, payload) => state.set("planets", payload),
  [saveStarships]: (state, payload) => state.set("starships", payload),
  [saveSpecies]: (state, payload) => state.set("species", payload),
  [saveVehicles]: (state, payload) => state.set("vehicles", payload),
  [categorySet]: (state, payload) => state.set("category", payload),
  [setLoading]: (state, payload) => state.set("loading", payload),
  [setError]: (state, payload) => state.set("error", payload)
};

export default createReducer(methods, initialState);
