// Run `node data_raw.js > data.json` in terminal to generate data json.

const characters = {
  // Black Eagles
  "Edelgard": { "meals": [], "supports": [] },
  "Hubert": { "meals": [], "supports": [] },
  "Ferdinand": { "meals": [], "supports": [] },
  "Linhardt": { "meals": [], "supports": [] },
  "Caspar": { "meals": [], "supports": [] },
  "Bernadetta": { "meals": [], "supports": [] },
  "Dorothea": { "meals": [], "supports": [] },
  "Petra": { "meals": [], "supports": [] },
  
  // Blue Lions
  "Dimitri": { "meals": [], "supports": [] },
  "Dedue": { "meals": [], "supports": [] },
  "Felix": { "meals": [], "supports": [] },
  "Ashe": { "meals": [], "supports": [] },
  "Sylvain": { "meals": [], "supports": [] },
  "Mercedes": { "meals": [], "supports": [] },
  "Annette": { "meals": [], "supports": [] },
  "Ingrid": { "meals": [], "supports": [] },

  // Golden Deer
  "Claude": { "meals": [], "supports": [] },
  "Lorenz": { "meals": [], "supports": [] },
  "Raphael": { "meals": [], "supports": [] },
  "Ignatz": { "meals": [], "supports": [] },
  "Lysithea": { "meals": [], "supports": [] },
  "Marianne": { "meals": [], "supports": [] },
  "Hilda": { "meals": [], "supports": [] },
  "Leonie": { "meals": [], "supports": [] },

  // Church of Seiros
  "Seteth": { "meals": [], "supports": [] },
  "Flayn": { "meals": [], "supports": [] },
  "Hanneman": { "meals": [], "supports": [] },
  "Manuela": { "meals": [], "supports": [] },
  "Gilbert": { "meals": [], "supports": [] },
  "Alois": { "meals": [], "supports": [] },
  "Catherine": { "meals": [], "supports": [] },
  "Shamir": { "meals": [], "supports": [] },
  "Cyril": { "meals": [], "supports": [] },

  // DLC
  "Jeritza": { "meals": [], "supports": [] },
  "Anna": { "meals": [], "supports": [] },
  "Yuri": { "meals": [], "supports": [] },
  "Balthus": { "meals": [], "supports": [] },
  "Constance": { "meals": [], "supports": [] },
  "Hapi": { "meals": [], "supports": [] }
}

// Raw data obtained from Serenes Forest
const mealsRaw = {
  "Saghert and Cream":"Edelgard, Dimitri, Ferdinand, Linhardt, Bernadetta, Dorothea, Ashe, Mercedes, Annette, Lorenz, Ignatz, Lysithea, Marianne, Hilda, Flayn, Alois, Yuri, Constance, Jeritza",
  "Sweet Bun Trio":"Edelgard, Dimitri, Ferdinand, Linhardt, Caspar, Bernadetta, Ashe, Sylvain, Mercedes, Annette, Ingrid, Ignatz, Lysithea, Marianne, Hilda, Flayn, Alois, Yuri, Constance, Jeritza",
  "Pheasant Roast with Berry Sauce":"Claude, Ferdinand, Linhardt, Ashe, Sylvain, Mercedes, Annette, Ingrid, Raphael, Lysithea, Flayn, Alois, Shamir, Cyril, Yuri, Constance, Hapi, Jeritza, Anna",
  "Peach Sorbet":"Edelgard, Linhardt, Bernadetta, Dorothea, Ashe, Mercedes, Annette, Lysithea, Marianne, Hilda, Flayn, Hanneman, Alois, Shamir, Yuri, Constance, Jeritza, Anna",
  "Beast Meat Teppanyaki":"Claude, Caspar, Petra, Felix, Ingrid, Raphael, Leonie, Manuela, Gilbert, Catherine, Shamir, Cyril, Balthus, Hapi, Anna",
  "Pickled Rabbit Skewers":"Claude, Caspar, Petra, Felix, Ingrid, Raphael, Lysithea, Manuela, Gilbert, Catherine, Shamir, Cyril, Yuri, Balthus, Hapi, Anna",
  "Daphnel Stew":"Claude, Ferdinand, Linhardt, Caspar, Petra, Dedue, Felix, Ingrid, Lorenz, Raphael, Leonie, Seteth, Manuela, Shamir, Cyril, Yuri, Balthus, Hapi",
  "Gronder Meat Skewers":"Claude, Caspar, Petra, Felix, Ingrid, Raphael, Leonie, Manuela, Gilbert, Catherine, Shamir, Cyril, Balthus, Hapi, Jeritza",
  "Derdriu-Style Fried Pheasant":"Claude, Caspar, Bernadetta, Felix, Ingrid, Raphael, Lysithea, Hilda, Leonie, Seteth, Hanneman, Manuela, Gilbert, Catherine, Cyril, Balthus, Hapi, Anna",
  "Vegetable Pasta Salad":"Edelgard, Ferdinand, Caspar, Bernadetta, Dorothea, Ashe, Mercedes, Annette, Ingrid, Ignatz, Marianne, Seteth, Hanneman, Gilbert, Shamir, Cyril, Constance, Anna",
  "Onion Gratin Soup":"Edelgard, Dimitri, Claude, Ferdinand, Linhardt, Dorothea, Dedue, Mercedes, Annette, Lorenz, Marianne, Leonie, Flayn, Alois, Catherine, Yuri, Hapi, Jeritza",
  "Country-Style Red Turnip Plate":"Claude, Caspar, Bernadetta, Dorothea, Petra, Raphael, Hilda, Flayn, Gilbert, Catherine, Shamir, Yuri, Hapi",
  "Vegetable Stir-Fry":"Edelgard, Claude, Ferdinand, Caspar, Bernadetta, Dorothea, Petra, Dedue, Annette, Ignatz, Marianne, Leonie, Manuela, Gilbert, Shamir, Cyril, Yuri, Hapi",
  "Grilled Herring":"Ferdinand, Petra, Dedue, Mercedes, Annette, Ingrid, Leonie, Seteth, Flayn, Gilbert, Alois, Catherine, Yuri, Jeritza",
  "Fish and Bean Soup":"Edelgard, Linhardt, Dedue, Ashe, Sylvain, Mercedes, Annette, Lorenz, Raphael, Ignatz, Marianne, Hilda, Leonie, Flayn, Manuela, Alois, Cyril, Yuri, Hapi, Jeritza",
  "Fruit and Herring Tart":"Ferdinand, Bernadetta, Dedue, Sylvain, Mercedes, Annette, Ingrid, Lorenz, Ignatz, Marianne, Leonie, Seteth, Flayn, Alois, Catherine, Constance",
  "Fisherman’s Bounty":"Ferdinand, Petra, Dedue, Ingrid, Raphael, Ignatz, Marianne, Hilda, Leonie, Flayn, Manuela, Gilbert, Alois, Catherine, Yuri, Balthus, Hapi, Jeritza",
  "Fish Sandwich":"Edelgard, Ferdinand, Petra, Dedue, Ashe, Sylvain, Ingrid, Raphael, Leonie, Seteth, Flayn, Manuela, Gilbert, Alois, Catherine, Yuri, Hapi",
  "Two-Fish Sauté":"Hubert, Bernadetta, Dedue, Felix, Sylvain, Mercedes, Annette, Lorenz, Ignatz, Lysithea, Marianne, Hilda, Leonie, Flayn, Hanneman, Manuela, Alois, Catherine, Cyril, Yuri, Constance, Jeritza",
  "Bourgeois Pike":"Claude, Ferdinand, Bernadetta, Dedue, Lorenz, Ignatz, Marianne, Leonie, Seteth, Flayn, Hanneman, Manuela, Alois, Catherine, Constance, Anna",
  "Sautéed Jerky":"Dimitri, Claude, Hubert, Caspar, Petra, Dedue, Felix, Raphael, Manuela, Shamir, Cyril, Yuri, Balthus, Hapi, Anna",
  "Spicy Fish and Turnip Stew":"Hubert, Petra, Dedue, Felix, Ashe, Sylvain, Annette, Ingrid, Leonie, Seteth, Manuela, Gilbert, Balthus, Hapi, Anna",
  "Sweet and Salty Whitefish Sauté":"Hubert, Dedue, Felix, Ashe, Sylvain, Annette, Ingrid, Leonie, Seteth, Manuela, Gilbert, Balthus, Hapi, Anna",
  "Super-Spicy Fish Dango":"Hubert, Petra, Dedue, Felix, Sylvain, Ingrid, Ignatz, Marianne, Leonie, Seteth, Hanneman, Manuela, Gilbert, Catherine, Shamir, Balthus, Hapi",
  "Sautéed Pheasant and Eggs":"Edelgard, Claude, Hubert, Ferdinand, Caspar, Felix, Sylvain, Raphael, Ignatz, Marianne, Seteth, Manuela, Gilbert, Shamir, Cyril, Constance, Hapi, Anna",
  "Garreg Mach Meat Pie":"Claude, Hubert, Linhardt, Caspar, Dorothea, Felix, Sylvain, Lorenz, Raphael, Ignatz, Hanneman, Manuela, Gilbert, Catherine, Balthus",
  "Cheesy Verona Stew":"Dimitri, Claude, Hubert, Bernadetta, Petra, Sylvain, Raphael, Marianne, Hilda, Leonie, Seteth, Flayn, Hanneman, Gilbert, Catherine, Balthus",
  "Pickled Seafood and Vegetables":"Hubert, Petra, Dedue, Annette, Raphael, Leonie, Seteth, Flayn, Hanneman, Gilbert, Alois, Catherine, Hapi, Anna",
  "Gautier Cheese Gratin":"Dimitri, Claude, Hubert, Linhardt, Dorothea, Felix, Raphael, Hilda, Hanneman, Catherine, Balthus",
  "Cabbage and Herring Stew":"Claude, Hubert, Lorenz, Ignatz, Marianne, Leonie, Flayn, Hanneman, Manuela, Gilbert, Catherine, Balthus, Hapi, Jeritza",
  "Small Fish Skewers":"Hapi, Jeritza",
  "Fried Crayfish":"Hapi, Jeritza, Anna"
}

const supportsRaw = {
  "Edelgard":"Hubert, Ferdinand, Linhardt, Caspar, Bernadetta, Dorothea, Petra, Lysithea, Hanneman, Manuela, Constance",
  "Hubert":"Edelgard, Ferdinand, Linhardt, Caspar, Bernadetta, Dorothea, Petra, Hanneman, Shamir",
  "Ferdinand":"Edelgard, Hubert, Linhardt, Caspar, Bernadetta, Dorothea, Petra, Mercedes, Lorenz, Marianne, Hilda, Flayn, Manuela, Constance",
  "Linhardt":"Edelgard, Hubert, Ferdinand, Caspar, Bernadetta, Dorothea, Petra, Annette, Lysithea, Marianne, Flayn, Hanneman, Catherine, Hapi",
  "Caspar":"Edelgard, Hubert, Ferdinand, Linhardt, Bernadetta, Dorothea, Petra, Ashe, Annette, Raphael, Hilda, Catherine, Shamir",
  "Bernadetta":"Edelgard, Hubert, Ferdinand, Linhardt, Caspar, Dorothea, Petra, Felix, Sylvain, Ingrid, Raphael, Leonie, Seteth, Alois, Jeritza, Yuri",
  "Dorothea":"Edelgard, Hubert, Ferdinand, Linhardt, Caspar, Bernadetta, Petra, Felix, Sylvain, Ingrid, Lorenz, Hanneman, Manuela, Yuri",
  "Petra":"Edelgard, Claude, Hubert, Ferdinand, Linhardt, Caspar, Bernadetta, Dorothea, Ashe, Ignatz, Alois, Shamir, Cyril",
  
  "Dimitri":"Dedue, Felix, Ashe, Sylvain, Mercedes, Annette, Ingrid, Raphael, Marianne, Flayn, Gilbert, Alois, Catherine, Hapi",
  "Dedue":"Dimitri, Felix, Ashe, Sylvain, Mercedes, Annette, Ingrid, Flayn, Gilbert, Shamir",
  "Felix":"Dimitri, Dedue, Bernadetta, Dorothea, Ashe, Sylvain, Mercedes, Annette, Ingrid, Lysithea, Leonie, Seteth, Flayn",
  "Ashe":"Dimitri, Caspar, Petra, Dedue, Felix, Sylvain, Mercedes, Annette, Ingrid, Marianne, Gilbert, Catherine, Cyril, Hapi",
  "Sylvain":"Dimitri, Bernadetta, Dorothea, Dedue, Felix, Ashe, Mercedes, Annette, Ingrid, Lorenz, Lysithea, Marianne, Hilda, Leonie, Flayn, Manuela",
  "Mercedes":"Dimitri, Ferdinand, Dedue, Felix, Ashe, Sylvain, Annette, Ingrid, Lorenz, Ignatz, Hilda, Alois, Cyril, Jeritza, Constance",
  "Annette":"Dimitri, Claude, Linhardt, Caspar, Dedue, Felix, Ashe, Sylvain, Mercedes, Ingrid, Lysithea, Hilda, Hanneman, Gilbert",
  "Ingrid":"Dimitri, Claude, Bernadetta, Dorothea, Dedue, Felix, Ashe, Sylvain, Mercedes, Annette, Raphael, Ignatz, Seteth, Catherine, Yuri",
  
  "Claude":"Petra, Annette, Ingrid, Lorenz, Raphael, Ignatz, Lysithea, Marainne, Hilda, Leonie, Flayn, Shamir, Cyril, Balthus",
  "Lorenz":"Claude, Ferdinand, Dorothea, Sylvain, Mercedes, Raphael, Ignatz, Lysithea, Marianne, Hilda, Leonie, Manuela, Catherine",
  "Raphael":"Dimitri, Claude, Caspar, Bernadetta, Ingrid, Lorenz, Ignatz, Lysithea, Marianne, Hilda, Leonie, Flayn, Shamir",
  "Ignatz":"Claude, Petra, Mercedes, Ingrid, Lorenz, Raphael, Lysithea, Marianne, Hilda, Leonie, Flayn, Shamir, Cyril",
  "Lysithea":"Edelgard, Claude, Linhardt, Felix, Sylvain, Annette, Lorenz, Raphael, Ignatz, Marianne, Hilda, Leonie, Hanneman, Catherine, Cyril, Balthus",
  "Marianne":"Dimitri, Claude, Ferdinand, Linhardt, Ashe, Sylvain, Lorenz, Raphael, Ignatz, Lysithea, Hilda, Leonie, Hanneman",
  "Hilda":"Claude, Ferdinand, Caspar, Sylvain, Mercedes, Annette, Lorenz, Raphael, Ignatz, Lysithea, Marianne, Leonie, Seteth, Cyril, Balthus",
  "Leonie":"Claude, Bernadetta, Felix, Sylvain, Lorenz, Raphael, Ignatz, Lysithea, Marianne, Hilda, Seteth, Alois, Catherine, Shamir",
  
  "Seteth":"Bernadetta, Felix, Ingrid, Hilda, Leonie, Flayn, Hanneman, Manuela, Catherine, Cyril",
  "Flayn":"Dimitri, Claude, Ferdinand, Linhardt, Dedue, Felix, Sylvain, Raphael, Ignatz, Seteth, Manuela",
  "Hanneman":"Edelgard, Hubert, Linhardt, Dorothea, Annette, Lysithea, Marianne, Seteth, Manuela, Gilbert, Alois",
  "Manuela":"Edelgard, Ferdinand, Dorothea, Sylvain, Lorenz, Seteth, Flayn, Hanneman, Gilbert, Alois, Cyril",
  "Gilbert":"Dimitri, Dedue, Ashe, Annette, Hanneman, Manuela, Alois, Catherine",
  "Alois":"Dimitri, Bernadetta, Petra, Mercedes, Leonie, Hanneman, Manuela, Gilbert, Catherine, Shamir",
  "Catherine":"Dimitri, Linhardt, Caspar, Ashe, Ingrid, Lorenz, Lysithea, Leonie, Seteth, Gilbert, Alois, Shamir",
  "Shamir":"Claude, Hubert, Caspar, Petra, Dedue, Raphael, Ignatz, Leonie, Alois, Catherine, Cyril",
  "Cyril":"Claude, Petra, Ashe, Mercedes, Ignatz, Lysithea, Hilda, Seteth, Manuela, Shamir",
  
  "Jeritza":"Bernadetta, Mercedes, Constance",
  "Yuri":"Bernadetta, Dorothea, Ingrid, Balthus, Constance, Hapi",
  "Balthus":"Claude, Lysithea, Hilda, Yuri, Constance, Hapi",
  "Constance":"Edelgard, Ferdinand, Mercedes, Jeritza, Yuri, Balthus, Hapi",
  "Hapi":"Dimitri, Linhardt, Ashe, Yuri, Balthus, Constance"
}

for (const meal in mealsRaw) {
  const likersArr = mealsRaw[meal].split(",").map(x => x.trim());
  likersArr.forEach(liker => {
    characters[liker]["meals"].push(`${meal}`);
  });
}

for (const character in supportsRaw) {
  const supportsArr = supportsRaw[character].split(",").map(x => x.trim());
  characters[character]["supports"] = supportsArr;
}

console.log(JSON.stringify(characters));
