//Accepts the name of a stat, plus its value, and returns both as a table row.
const StatsTable = (statName, statValue) => {
  return (
    <tr>
      <td>{statName}</td>
      <td>{statValue}</td>
    </tr>
  );
};

export default StatsTable;
