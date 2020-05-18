import createStore from "redux-zero";
import { State } from "./State";

const initialState: State = {
  count: 1,
  loading: true,
  location: "Western Front",
  hasSpy: false,
  hasLorekeeper: false,
};
const store = createStore(initialState);

export default store;
