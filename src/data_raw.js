const characters = {
  // Black Eagles
  "Edelgard": [],
  "Hubert": [],
  "Ferdinand": [],
  "Linhardt": [],
  "Caspar": [],
  "Bernadetta": [],
  "Dorothea": [],
  "Petra": [],
  
  // Blue Lions
  "Dimitri": [],
  "Dedue": [],
  "Felix": [],
  "Ashe": [],
  "Sylvain": [],
  "Mercedes": [],
  "Annette": [],
  "Ingrid": [],

  // Golden Deer
  "Claude": [],
  "Lorenz": [],
  "Raphael": [],
  "Ignatz": [],
  "Lysithea": [],
  "Marianne": [],
  "Hilda": [],
  "Leonie": [],

  // Church of Seiros
  "Seteth": [],
  "Flayn": [],
  "Hanneman": [],
  "Manuela": [],
  "Gilbert": [],
  "Alois": [],
  "Catherine": [],
  "Shamir": [],
  "Cyril": [],

  // DLC
  "Jeritza": [],
  "Anna": [],
  "Yuri": [],
  "Balthus": [],
  "Constance": [],
  "Hapi": []
}

// Meal data obtained from Serenes Forest
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

for (const meal in mealsRaw) {
  const likersArr = mealsRaw[meal].split(",").map(x => x.trim());
  likersArr.forEach(liker => {
    characters[liker].push(`${meal}`);
  });
}
