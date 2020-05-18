import { h, FunctionComponent, VNode } from "preact";

import { useState } from "preact/hooks";
import { style, classes } from "typestyle";

namespace s {
  export const content = style({
    display: "none",
  });
  export const open = style({
    display: "inline-block",
  });
  export const toggle = style({
    appearance: "none",
    "-webkit-appearance": "none",
    border: "none",
    background: "transparent",
    $nest: {
      "&:focus": {
        outline: "none",
        color: "red",
      },
    },
  });
}

export const Expando: FunctionComponent<{
  label: VNode<any>;
  children: VNode<any>;
}> = ({ label, children }) => {
  const [isOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!isOpen);
  return (
    <div>
      <div>
        {label}
        <button class={s.toggle} aria-label="expand" onClick={toggle}>
          {isOpen ? "▲" : "▼"}
        </button>
      </div>
      <div class={classes(s.content, isOpen ? s.open : undefined)}>
        {children}
      </div>
    </div>
  );
};
