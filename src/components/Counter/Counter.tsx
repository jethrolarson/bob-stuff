import { h } from "preact";
import { connect } from "redux-zero/preact";
import { BoundActions } from "redux-zero/types/Actions";
import actions from "../../actions";
import { State } from "../../State";
import { CounterState } from "./counterState";

const mapToProps = ({ count }: State): CounterState => ({ count });

export default connect(
  mapToProps,
  actions
)(
  ({
    count,
    increment,
    decrement,
  }: CounterState & BoundActions<State, typeof actions>) => (
    <div>
      <h1>{count} </h1>
      <div>
        <button onClick={decrement}> decrement </button>
        <button onClick={increment}> increment </button>
      </div>
    </div>
  )
);
