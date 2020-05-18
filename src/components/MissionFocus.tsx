import { h } from "preact";
import { style } from "typestyle";
import { Location } from "../entities/Location";
import { connect } from "redux-zero/preact";
import { BoundActions } from "redux-zero/types/Actions";
import actions from "../actions";
import { State } from "../State";
import { MissionType } from "../entities/MissionType";
import { COM } from "./Role";

interface MapState {
  location: Location;
}

const mapToProps = ({ location }: State): MapState => ({ location });

namespace s {
  export const GameMap = style({});
  export const map = style({
    maxWidth: "100%",
  });
}

const opts: { [k in Location]: MissionType[] } = {
  "Western Front": ["assault", "recon"],
  Plainsworth: ["assault", "recon", "religious", "supply"],
  "Long Road": ["assault", "recon"],
  "Barrak Mines": ["assault", "recon", "supply"],
  "Gallows Pass": ["assault", "recon", "religious"],
  "Duresh Forest": ["assault", "recon", "religious", "supply"],
  "Sunstrider Camp": ["assault", "recon", "religious"],
  Westlake: ["assault", "recon", "religious", "supply"],
  Eastlake: ["assault", "recon", "religious", "supply"],
  "Talgon Forest": ["assault", "religious"],
  "Fort Calisco": ["assault", "recon", "religious", "supply"],
  "High Road": ["assault", "recon"],
  "The Maw": ["assault", "religious"],
  "Skydagger Keep": [],
};

export default connect(
  mapToProps,
  actions
)(({ location }: MapState & BoundActions<State, typeof actions>) => {
  return (
    <span>
      <COM />
      Choose mission focus:{" "}
      <span>
        <b>{opts[location].join(opts[location].length == 2 ? " or " : ", ")}</b>{" "}
        ({location})
      </span>
    </span>
  );
});
