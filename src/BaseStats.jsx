import "./BaseStats.css";
import StatsTable from "./StatsTable.jsx";

//Displays the Pokemon's stats as a table using destructured properties.
const BaseStats = ({ stats: { hp, attack, defense, speed }, clicker}) => {
  return (
    <div className="base-stats">
      <h1>Base Stats</h1>
      {/*Creates a button that displays the Pokemon's special stats when clicked.*/}
      <button className="sp-stats" onClick={() => clicker()}>
        Check Special Stats
      </button>
      {/*Creates a table to display the Pokemon's stats, then calls `StatsTable` for each of the destructured values from `stats`.*/}
      <table className="base-stats-table">
        <tbody>
          {StatsTable("Hit Points", hp)}
          {StatsTable("Attack", attack)}
          {StatsTable("Defense", defense)}
          {StatsTable("Speed", speed)}
        </tbody>
      </table>
    </div>
  );
};

export default BaseStats;
