import { h } from "preact";
import { style, classes } from "typestyle";
import { hsl, url } from "csx";
namespace s {
  export const role = style({
    "-webkit-mask-image": url("stamp.png"),
    "-webkit-mask-size": "39px 20px",
    fontSize: "13px",
    padding: "1px 5px 0",
    marginRight: "3px",
    color: "#fff",
    width: "30px",
    verticalAlign: "baseline",
    display: "inline-block",
    textAlign: "center",
    textTransform: "uppercase",
    cursor: "help",
  });
  export const roles = {
    com: style({
      backgroundColor: hsl(28, 1, 0.4).toString(),
    }),
    mar: style({
      backgroundColor: hsl(0, 1, 0.35).toString(),
    }),
    qm: style({
      background: hsl(290, 0.7, 0.3).toString(),
    }),
    spy: style({
      background: hsl(0, 0, 0.1).toString(),
    }),
    lk: style({
      background: hsl(130, 0.6, 0.26).toString(),
    }),

    gm: style({
      background: hsl(220, 0.6, 0.3).toString(),
    }),

    all: style({
      background: "#ccc",
      color: "#000",
    }),
  };
}

type Role = "com" | "qm" | "mar" | "lk" | "spy" | "all" | "gm";

const roles: { [k in Role]: string } = {
  com: "Commander",
  qm: "Quartermaster",
  mar: "Marshal",
  lk: "Lorekeeper",
  spy: "Spymaster",
  all: "All players",
  gm: "Gamemaster",
};
const Role = ({ role }: { role: Role }) => (
  <b title={roles[role]} class={classes(s.role, s.roles[role])}>
    {role}
  </b>
);

export const COM = () => Role({ role: "com" });
export const MAR = () => Role({ role: "mar" });
export const QM = () => Role({ role: "qm" });
export const LK = () => Role({ role: "lk" });
export const SPY = () => Role({ role: "spy" });
export const ALL = () => Role({ role: "all" });
export const GM = () => Role({ role: "gm" });
