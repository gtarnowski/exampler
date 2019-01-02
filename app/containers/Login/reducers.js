import { fromJS } from "immutable";
import { createReducer } from "redux-act";
import { saveUser } from "./actions";

export const initialState = fromJS({
  user: null,
});

export const methods = {
  [saveUser]: (state, payload) => state.set("user", payload)
};

export default createReducer(methods, initialState);
