import { h, Fragment } from "preact";
import { ALL, COM, MAR, SPY, GM, QM, LK } from "./Role";
import { Expando } from "./Expando";
import MissionFocus from "./MissionFocus";
import { connect } from "redux-zero/preact";
import { BoundActions } from "redux-zero/types/Actions";
import { State } from "../State";
import actions from "../actions";

type MissionPhaseState = Pick<State, "hasSpy" | "hasLorekeeper">;
const mapToProps = ({ hasSpy, hasLorekeeper }: State): MissionPhaseState => ({
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
  }: MissionPhaseState & BoundActions<State, typeof actions>) => {
    return (
      <section class="missionPhase">
        <h2 id="MissionPhase">Mission Phase</h2>

        <h3>Mission Generation</h3>
        <ul>
          <li>
            <MissionFocus />
          </li>
          {hasSpy && (
            <Fragment>
              <li>
                <SPY />
                You may ask for all special missions to be revealed for the
                location if the "Research" long term assignment is complete.
              </li>
              <li>
                <SPY />
                You may ask gm to boost rewards if "Augment" long term
                assignment is complete
              </li>
            </Fragment>
          )}
          <li>
            <GM />
            Generate missions.
          </li>
        </ul>
        <h3>Mission Prep</h3>
        <ol>
          <li>
            <GM />
            Present the available missions.
          </li>
          <li>
            <COM />
            You may spend an intel to replace a mission with special mission of
            the <GM />
            ’s choice.
          </li>
          <li>
            <COM />
            Ask the <GM /> questions based on current intel.
            {hasSpy && (
              <div>
                Ask an additional question if <SPY />
                used "interrogate".
              </div>
            )}
          </li>
          <li>
            <COM />
            Pick the primary and secondary mission.
          </li>
          <li>
            <MAR />
            Assign a squad and up to two Specialists to each mission and decide
            who’s in charge.
          </li>
          <li>
            <ALL />
            Take up your character and reset their armor and skill uses.
          </li>
          <li>
            <ALL />
            Choose your character's load and utility items.
          </li>
          <li>
            <Expando
              label={
                <Fragment>
                  <QM />
                  You may expend materiel to make missions more successful.
                </Fragment>
              }
            >
              <Fragment>
                Spend materiel based on the mission type to grant +1d to the
                engagement roll. All legionnaires on that mission equip that
                material for free.
                <table>
                  <tr>
                    <th>assault</th>
                    <td>black shot</td>
                  </tr>
                  <tr>
                    <th>recon</th>
                    <td>horses</td>
                  </tr>
                  <tr>
                    <th>religious</th>
                    <td>religious supplies</td>
                  </tr>
                  <tr>
                    <th>supply</th>
                    <td>food</td>
                  </tr>
                </table>
              </Fragment>
            </Expando>
          </li>
          <li>
            <COM />
            You may spend intel to add +1d to the engagement roll for a mission.
          </li>
          <li>
            <MAR />
            Assemble the dice pool and make the engagement roll for the primary
            mission.
          </li>
        </ol>
        <h3>Resolve Missions</h3>
        <ol>
          <li>
            <ALL />
            Play out the primary mission.
          </li>
          <li>
            <MAR />
            Ensure surviving legionnaires gain xp as per their playbooks.
          </li>
          <li>
            <MAR />
            Make engagement roll to resolve secondary mission.
          </li>
        </ol>
        <h3>Mission penalties/rewards</h3>
        <small>Any mission not taken is automatically failed</small>
        <ol>
          <li>
            <MAR />
            Decide secondary mission's outcome and give any surviving
            specialists 2 xp.
          </li>
          <li>
            <ALL /> Update sheets with rewards/penalties from missions.
            <table>
              <tr>
                <td>
                  <COM />
                </td>
                <td>Pressure, time, and intel</td>
              </tr>
              <tr>
                <td>
                  <QM />
                </td>
                <td>
                  Supply and assets. If no supply then <MAR />
                  -1 morale instead
                </td>
              </tr>
              <tr>
                <td>
                  <MAR />
                </td>
                <td>
                  Morale, bonus XP. Update roster with troops gained. Subtract 1
                  morale for each Legionnaire death.
                </td>
              </tr>
              {hasLorekeeper && (
                <tr>
                  <td>
                    <LK />
                  </td>
                  <td>Record every Legionnaire who died.</td>
                </tr>
              )}
              <tr>
                <td>{hasLorekeeper ? <LK /> : <GM />}</td>
                <td>Log changes to endgame points on Skydagger Keep sheet</td>
              </tr>
            </table>
          </li>
        </ol>
        <a href="#CampaignPhase" class="goto">
          Go to Campaign Phase
        </a>
      </section>
    );
  }
);
