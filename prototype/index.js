const Shopper = require("./Shopper");

const scout_prototype = require("./scout_prototype");

// let alex = new Shopper("alex");

// // these items are must to be included in every shopper list
// alex.addItemToList("camping knife");
// alex.addItemToList("tents");
// alex.addItemToList("sleeping bag");
// alex.addItemToList("water bottle");
// alex.addItemToList("first aid kit");
// alex.addItemToList("map");

// this item is optional

//alex.addItemToList("slingshot");

let alex = scout_prototype.clone(); // common property are already in scout_prototype object
alex.name = "Alex";
alex.addItemToList("slingshot");

// const vishal = new Shopper("vishal");

// vishal.addItemToList("camping knife");
// vishal.addItemToList("tents");
// vishal.addItemToList("sleeping bag");
// vishal.addItemToList("water bottle");
// vishal.addItemToList("first aid kit");
// vishal.addItemToList("map");

// vishal.addItemToList("reading light");

let vishal = scout_prototype.clone();
vishal.name = "Vishal";
vishal.addItemToList("reading light");

// logs

console.log(
  `${alex.name} has ${alex.items.length} items in their list : ${alex.items}`
);

console.log(
  `${vishal.name} has ${vishal.items.length} items in their list : ${vishal.items}`
);
