import Showcase from "./Showcase";
import BaseStats from "./BaseStats";
import "./App.css";

const App = () => {
  //Declares an object containing the Pokemon's six stats.
  const stats = {
    hp: 45,
    attack: 49,
    defense: 49,
    spAttack: 65,
    spDef: 65,
    speed: 45,
  };
  //Displays an alert message containing the Pokemon's special stats.
  const handleClick = () => {
    alert(`Special Stats\n\tSpecial Attack: ${stats.spAttack}\n\tSpecial Defense: ${stats.spDef}`);
  }

  return (
    <div className="main-wrapper background">
      {/*Renders the Showcase component first.*/}
      <Showcase />
      {/*Passes `stats` and `handleClick` to the BaseStats component.*/}
      <BaseStats stats={stats} clicker={handleClick} />
    </div>
  );
};

export default App;
