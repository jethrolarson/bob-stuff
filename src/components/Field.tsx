import { h, VNode } from "preact";
import { style } from "typestyle";

export default ({ children }: { children: VNode }) => (
  <div class={style()}>{children}</div>
);
