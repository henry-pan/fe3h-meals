import React from "react";
import { characters } from "./data.js";

class App extends React.Component {
  constructor(props){
    super(props);
  }

  mapChars(arr) {
    return Object.keys(arr).map(i => 
      <div key={i}>
        <label>
          <input type="checkbox" />
          {i}
        </label>
      </div>
    )
  }

  render() {
    return (
      <>
      <h1>Shared Meal Finder</h1>
      <div>
        {this.mapChars(characters)}
      </div>
      </>
    )
  }
}

export default App;