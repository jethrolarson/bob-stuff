import { h, render } from "preact";
import { Provider } from "redux-zero/preact";
import { style } from "typestyle";

import store from "./store";

import Counter from "./components/Counter/Counter";
import MissionPhase from "./components/MissionPhase";
import CampaignPhase from "./components/CampaignPhase";
import GameMap from "./components/GameMap";

const page = style({
  display: "grid",
  gridTemplateColumns: "1fr 840px 1fr",
  gridColumnGap: 20,
  width: "1800px",
  margin: "0 auto",
  background: "#fff",
  padding: 20,
});

const App = () => (
  <Provider store={store}>
    <div class={page}>
      <div>
        <MissionPhase />
      </div>
      <GameMap />
      <CampaignPhase />
    </div>
    <Counter />
  </Provider>
);

const root = document.getElementById("root");
root && render(<App />, root);
