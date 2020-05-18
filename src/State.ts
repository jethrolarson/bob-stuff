import { CounterState } from "./components/Counter/counterState";
import { Location } from "./entities/Location";

export type State = CounterState & {
  loading: boolean;
  location: Location;
  hasSpy: boolean;
  hasLorekeeper: boolean;
};
