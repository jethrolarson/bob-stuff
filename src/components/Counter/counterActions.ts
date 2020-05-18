import { CounterState } from "./counterState";

export default () => ({
    decrement: (state: CounterState) => ({ count: state.count - 1 }),
    increment: (state: CounterState) => ({ count: state.count + 1 })
});