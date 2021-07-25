import React from "react";
import { characters } from "./data.js";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedChars: []
    }
  }

  handleCheckbox(char) {
    const newChars = [...this.state.selectedChars];
    if (newChars.includes(char)) {
      const index = newChars.indexOf(char);
      newChars.splice(index, 1);
    } else {
      newChars.push(char);
    }
    this.setState({ selectedChars: [...newChars] });
  }

  findMeals(char1, char2) {
    const mealHash = {};
    const sharedMeals = [];
    characters[char1].forEach(meal => mealHash[meal] = true);
    characters[char2].forEach(meal => {
      if (mealHash[meal]) sharedMeals.push(meal);
    });
    return sharedMeals.map(i => 
      <li key={i}>
        {i}
      </li>
    );
  }

  mapChars(arr) {
    return arr.map(i => 
      <div key={i}>
        <label>
          <input type="checkbox"
            onChange={() => this.handleCheckbox(i)}
            disabled={!this.state.selectedChars.includes(i) && this.state.selectedChars.length >= 2}/>
          {i}
        </label>
      </div>
    )
  }

  render() {
    const eagles=["Edelgard","Hubert","Ferdinand","Linhardt","Caspar","Bernadetta","Dorothea","Petra"];
    const lions=["Dimitri","Dedue","Felix","Ashe","Sylvain","Mercedes","Annette","Ingrid"];
    const deer=["Claude","Lorenz","Raphael","Ignatz","Lysithea","Marianne","Hilda","Leonie"];
    const church=["Seteth","Flayn","Hanneman","Manuela","Gilbert","Alois","Catherine","Shamir","Cyril"];
    const dlc=["Jeritza","Anna","Yuri","Balthus","Constance","Hapi"];

    let meals;
    if (this.state.selectedChars.length === 2){
      meals = this.findMeals(this.state.selectedChars[0], this.state.selectedChars[1]);
    }

    return (
      <>
      <h1>Shared Meal Finder</h1>
      <div className="character-tables">
        <div>
          <h3>Black Eagles</h3>
          {this.mapChars(eagles)}
        </div>
        <div>
          <h3>Blue Lions</h3>
          {this.mapChars(lions)}
        </div>
        <div>
          <h3>Golden Deer</h3>
          {this.mapChars(deer)}
        </div>
        <div>
          <h3>Church of Seiros</h3>
          {this.mapChars(church)}
        </div>
        <div>
          <h3>Ashen Wolves / DLC</h3>
          {this.mapChars(dlc)}
        </div>
      </div>
      <h2>Meals:</h2>
      <ul>
        {meals}
      </ul>
      </>
    )
  }
}

export default App;