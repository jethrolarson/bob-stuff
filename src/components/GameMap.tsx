import { h, Fragment } from "preact";
import { style, classes } from "typestyle";
import { locations, Location } from "../entities/Location";
import { connect } from "redux-zero/preact";
import { BoundActions } from "redux-zero/types/Actions";
import actions from "../actions";
import { State } from "../State";
import Field from "./Field";
import { SPY, LK, ALL, MAR, QM, GM, COM } from "./Role";

type MapState = Pick<State, "location" | "hasSpy" | "hasLorekeeper">;

const mapToProps = ({ location, hasSpy, hasLorekeeper }: State): MapState => ({
  location,
  hasSpy,
  hasLorekeeper,
});

namespace s {
  export const GameMap = style({
    position: "relative",
  });
  export const map = style({
    maxWidth: "100%",
    border: "3px solid #000",
  });

  export const key = style({
    position: "absolute",
    right: 4,
    top: -20,
    border: "1px solid #bbb",
    borderTopWidth: 0,
    padding: "6px 10px 10px",
    background: "#eee",
    boxShadow: "1px 1px 4px rgba(0, 0, 0, 0.4)",
    zIndex: 1,
    $nest: {
      h4: {
        margin: 0,
        textAlign: "center",
      },
    },
  });

  export const frame = style({
    position: "relative",
  });

  export const Loc = style({
    position: "absolute",
    width: 51,
    height: 56,
    "-webkit-appearance": "none",
    backgroundColor: "transparent",
    backgroundImage: 'url("static/selection.png")',
    backgroundSize: "51px 43px",
    border: "none",
    backgroundRepeat: "no-repeat",
    opacity: 0,
    cursor: "pointer",
    outline: "none",
    $nest: {
      "&:hover": {
        opacity: 0.8,
      },
      "&:focus": {
        opacity: 0.6,
      },
    },
  });
  export const selected = style({
    opacity: 0.8,
  });
}

const Key = connect(
  mapToProps,
  actions
)(
  ({
    setHasSpy,
    hasSpy,
    hasLorekeeper,
    setHasLorekeeper,
  }: MapState & BoundActions<State, typeof actions>) => (
    <aside class={s.key}>
      <dl>
        <div>
          <ALL />
          All players
        </div>
        <div>
          <GM />
          Gamemaster
        </div>
        <div>
          <COM />
          Commander
        </div>
        <div>
          <MAR />
          Marshal
        </div>
        <div>
          <QM />
          Quartermaster
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              checked={hasLorekeeper}
              onChange={({ currentTarget }) =>
                setHasLorekeeper(currentTarget.checked)
              }
            />{" "}
            <LK />
            Lorekeeper
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={hasSpy}
              onChange={({ currentTarget }) => setHasSpy(currentTarget.checked)}
            />{" "}
            <SPY />
            Spymaster
          </label>
        </div>
      </dl>
    </aside>
  )
);

const LocationSelect = connect(
  mapToProps,
  actions
)(
  ({
    location,
    setLocation,
  }: MapState & BoundActions<State, typeof actions>) => (
    <menu>
      <Field>
        <label>
          Select Location{" "}
          <select
            value={location}
            onChange={(e) => setLocation(e.currentTarget.value as Location)}
          >
            {locations.map((l) => (
              <option value={l}>{l}</option>
            ))}
          </select>
        </label>
      </Field>
    </menu>
  )
);

const Loc = connect(
  mapToProps,
  actions
)(
  ({
    loc,
    top,
    left,
    location,
    setLocation,
  }: MapState &
    BoundActions<State, typeof actions> & {
      loc: Location;
      top: number;
      left: number;
    }) => (
    <button
      class={classes(s.Loc, loc === location && s.selected)}
      style={{ top, left }}
      title={loc}
      onClick={() => setLocation(loc)}
    >
      {" "}
    </button>
  )
);

export default () => (
  <section class={s.GameMap}>
    <Key />
    <h1>Game Progression and Responsibilities</h1>
    <div class={s.frame}>
      <Loc loc="Western Front" left={103} top={408} />
      <Loc loc="Plainsworth" left={153} top={336} />
      <Loc loc="Sunstrider Camp" left={229} top={301} />
      <Loc loc="Long Road" left={190} top={183} />
      <Loc loc="Barrak Mines" left={178} top={87.5} />
      <Loc loc="Gallows Pass" left={253} top={27} />
      <Loc loc="Duresh Forest" left={341} top={198} />
      <Loc loc="Talgon Forest" left={440.3} top={155.5} />
      <Loc loc="Westlake" left={337.5} top={382} />
      <Loc loc="Eastlake" left={447.5} top={393.5} />
      <Loc loc="Fort Calisco" left={539.4} top={198} />
      <Loc loc="High Road" left={655} top={118.5} />
      <Loc loc="The Maw" left={685} top={198} />
      <Loc loc="Skydagger Keep" left={738.5} top={123.5} />

      <img class={s.map} src="static/map.jpg" />
    </div>
  </section>
);
