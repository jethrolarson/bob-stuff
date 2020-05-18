import { h, Fragment } from "preact";
import { COM, LK, QM, MAR, SPY, GM } from "./Role";
import { style } from "typestyle";
import { connect } from "redux-zero/preact";
import { BoundActions } from "redux-zero/types/Actions";
import { State } from "../State";
import actions from "../actions";
import { Expando } from "./Expando";

namespace s {
  export const morale2actions = style({
    width: 300,
  });
}

type CampaignPhaseState = Pick<State, "hasSpy" | "hasLorekeeper">;

const mapToProps = ({ hasSpy, hasLorekeeper }: State): CampaignPhaseState => ({
  hasSpy,
  hasLorekeeper,
});

export default connect(
  mapToProps,
  actions
)(
  ({
    hasSpy,
    hasLorekeeper,
  }: CampaignPhaseState & BoundActions<State, typeof actions>) => {
    return (
      <section class="campaignPhase">
        <h2 id="CampaignPhase">Campaign Phase</h2>
        <h3>Back At Camp Scene</h3>
        <ol>
          <li>
            {hasLorekeeper ? <LK /> : <GM />} Select and lead a Back At Camp
            scene based on the current morale.
          </li>
        </ol>
        <h3>Time Passes</h3>
        <ol>
          <li>
            <COM />
            Add +1 time and +1 pressure
          </li>
          <li>
            <QM />
            Spend 1 food. If no food then <MAR /> reduce morale by 2
          </li>
          {hasLorekeeper && (
            <li>
              <LK /> Tell Tale of the Legion (optional)
            </li>
          )}
        </ol>
        <h3>Campaign Actions</h3>
        <ol>
          <li>
            <Expando
              label={
                <Fragment>
                  <QM />
                  Spend Campaign Actions
                </Fragment>
              }
            >
              <Fragment>
                <img
                  class={s.morale2actions}
                  src="https://i.imgur.com/HATDqs7.png"
                />
                <div>
                  <small>Additional Actions cost 1 supply</small>
                </div>
                <table>
                  <tr>
                    <th>Acquire Asset </th>
                    <td>
                      <small>Roll location’s asset rating</small>
                      <ul>
                        <li>
                          Normal: black shot, food, horses, religious supplies,
                          or supply carts.
                        </li>
                        <li>
                          Depending on location: Laborers, siege weapons, and
                          alchemicals.
                        </li>
                        <li>Rare: Alchemists and Mercies.</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <th>Liberty</th>
                    <td>
                      <MAR /> -3 stress for all characters. +2 to morale.
                    </td>
                  </tr>
                  <tr>
                    <th>Recruit</th>
                    <td>
                      <MAR /> Gain up to 5 Rookies
                    </td>
                  </tr>
                  <tr>
                    <th>R&amp;R: </th>
                    <td>
                      <MAR /> mark 1 healing tick per character. Boost: +1 tick
                    </td>
                  </tr>
                  <tr>
                    <th>Long Term Project</th>
                    <td>
                      Start/advance a project developed in concert with the
                      <GM />.
                    </td>
                  </tr>
                </table>
              </Fragment>
            </Expando>
          </li>
          <li>
            <QM />
            Update status of Alchemists, Laborers, and Mercies
          </li>
          {hasSpy && (
            <Fragment>
              <li>
                <Expando
                  label={
                    <Fragment>
                      <SPY /> Dispatch spies
                    </Fragment>
                  }
                >
                  <table>
                    <tr>
                      <th>Interrogate</th>
                      <td>
                        Ask any intel question from any list when missions are
                        presented
                      </td>
                    </tr>
                    <tr>
                      <th>Blackmail</th>
                      <td>
                        +1d to the <QM />
                        ’s acquire assets roll.
                      </td>
                    </tr>
                    <tr>
                      <th>Help</th>
                      <td>
                        +1d to one of
                        <QM />
                        ’s long-term project rolls
                      </td>
                    </tr>
                    <tr>
                      <th>Recover</th>
                      <td>Spy removes their wounded condition</td>
                    </tr>
                    <tr>
                      <th>Long-Term Assignment</th>
                      <td>
                        Augment missions, expand network, lay trap, recruit,
                        research
                      </td>
                    </tr>
                  </table>
                </Expando>
              </li>
            </Fragment>
          )}
        </ol>
        <h3>The Legion Advances (optional)</h3>
        <ol>
          <li>
            <COM />
            Decide if the Legion advances and to where.
            {/* expando show options based on current location */}
          </li>
          <li>
            <QM />
            You may spend horses to reduce pressure.
          </li>
          <li>
            <COM />
            Roll pressure and use the result to add time.
            {/* Expando show result table */}
          </li>
          <li>
            <COM />
            Reset pressure to zero.
          </li>
        </ol>
        <h3></h3>

        <a href="#MissionPhase" class="goto">
          Go to Mission Phase.
        </a>
      </section>
    );
  }
);
