import { State } from "./State";
import { Location } from "./entities/Location";

export default () => ({
  decrement: (state: State) => ({ count: state.count - 1 }),
  increment: (state: State) => ({ count: state.count + 1 }),

  setLocation: (state: State, location: Location): State => ({
    ...state,
    location,
  }),

  setHasSpy: (state: State, hasSpy: boolean): State => ({ ...state, hasSpy }),
  setHasLorekeeper: (state: State, hasLorekeeper: boolean): State => ({
    ...state,
    hasLorekeeper,
  }),
});
