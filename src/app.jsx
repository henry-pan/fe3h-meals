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
    if (sharedMeals.length === 0) return <li>None!</li>;
    return sharedMeals.map(i => <li key={i}>{i}</li>);
  }


  mapChars(arr) {
    const picked = this.state.selectedChars.length >= 2;
    return arr.map(i => 
      <div className={(!this.state.selectedChars.includes(i) && picked) ? "character disabled" : "character"} key={i}>
        <label>
          <input type="checkbox"
            onChange={() => this.handleCheckbox(i)}
            disabled={!this.state.selectedChars.includes(i) && picked}/>
          {i}
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
        </header>
        <section className="character-tables-container">
          <div className="character-table">
            <h3 id="be"><img className="faction-banner" src="img/be.png" />Black Eagles</h3>
            {this.mapChars(eagles)}
          </div>
          <div className="character-table">
            <h3 id="bl"><img className="faction-banner" src="img/bl.png" />Blue Lions</h3>
            {this.mapChars(lions)}
          </div>
          <div className="character-table">
            <h3 id="gd"><img className="faction-banner" src="img/gd.png" />Golden Deer</h3>
            {this.mapChars(deer)}
          </div>
          <div className="character-table">
            <h3 id="church"><img className="faction-banner" src="img/church.png" />Church of Seiros</h3>
            {this.mapChars(church)}
          </div>
          <div className="character-table">
            <h3 id="aw"><img className="faction-banner" src="img/aw.png" />Ashen Wolves</h3>
            {this.mapChars(dlc)}
          </div>
        </section>
        {mealSection}
      </div>
    )
  }
}

export default App;
