let Shopper = require("./Shopper");

var scout_prototype = new Shopper();
scout_prototype.addItemToList("camping knife");
scout_prototype.addItemToList("tents");
scout_prototype.addItemToList("sleeping bag");
scout_prototype.addItemToList("water bottle");
scout_prototype.addItemToList("first aid kit");

module.exports = scout_prototype;
