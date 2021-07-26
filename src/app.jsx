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
    characters[char1]["meals"].forEach(meal => mealHash[meal] = true);
    characters[char2]["meals"].forEach(meal => { if (mealHash[meal]) sharedMeals.push(meal)} );
    if (sharedMeals.length === 0) return <li>None!</li>;
    return sharedMeals.map(i => <li key={i}>{i}</li>);
  }


  mapChars(arr) {
    const { selectedChars } = this.state;
    const isPicked = selectedChars.length >= 2;
    const isFirstPick = selectedChars[0] && !selectedChars[1]; // Hides supports after picking second character

    return arr.map(i => 
      <div className={(!selectedChars.includes(i) && isPicked) ? "character disabled" : "character"} key={i}>
        <label>
          <input type="checkbox"
            onChange={() => this.handleCheckbox(i)}
            disabled={!selectedChars.includes(i) && isPicked}/>
          {i}
          {isFirstPick && characters[selectedChars[0]]["supports"].includes(i) && <img className="support-icon" src="img/support.png" />}
        </label>
      </div>
    );
  }


  render() {
    const eagles=["Edelgard","Hubert","Ferdinand","Linhardt","Caspar","Bernadetta","Dorothea","Petra"];
    const lions=["Dimitri","Dedue","Felix","Ashe","Sylvain","Mercedes","Annette","Ingrid"];
    const deer=["Claude","Lorenz","Raphael","Ignatz","Lysithea","Marianne","Hilda","Leonie"];
    const church=["Seteth","Flayn","Hanneman","Manuela","Gilbert","Alois","Catherine","Shamir","Cyril", "Jeritza", "Anna"];
    const dlc=["Yuri","Balthus","Constance","Hapi"];

    let mealSection;
    if (this.state.selectedChars.length === 2){
      let meals;
      meals = this.findMeals(this.state.selectedChars[0], this.state.selectedChars[1]);
      mealSection = (
        <section className="meals">
          <h2>{this.state.selectedChars[0]} and {this.state.selectedChars[1]} both like:</h2>
          <ul>{meals}</ul>
        </section>
      );
    }

    return (
      <div className="content">
        <header>
          <h1><img src="img/meal.png" />Shared Meal Finder</h1>
          <p>Click on two characters to determine which meals they both like.</p>
          <p>After clicking on the first character, an icon will appear on all characters they can support.</p>
        </header>
        <section className="character-tables-container">
          <div className="character-table">
            <h3 id="be"><span className="faction-banner" id="banner-be" />Black Eagles</h3>
            {this.mapChars(eagles)}
          </div>
          <div className="character-table">
            <h3 id="bl"><span className="faction-banner" id="banner-bl" />Blue Lions</h3>
            {this.mapChars(lions)}
          </div>
          <div className="character-table">
            <h3 id="gd"><span className="faction-banner" id="banner-gd" />Golden Deer</h3>
            {this.mapChars(deer)}
          </div>
          <div className="character-table">
            <h3 id="church"><span className="faction-banner" id="banner-church" />Church of Seiros</h3>
            {this.mapChars(church)}
          </div>
          <div className="character-table">
            <h3 id="aw"><span className="faction-banner" id="banner-aw" />Ashen Wolves</h3>
            {this.mapChars(dlc)}
          </div>
        </section>
        {mealSection}
      </div>
    )
  }
}

export default App;
