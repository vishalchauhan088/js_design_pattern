const logger = require("./Logger");

// const logger = new Logger().getInstance();

class Shopper {
  constructor(name, money = 0) {
    this.name = name;
    this.money = money;
    logger.log(`New Shopper: ${this.name} has ${money}in their account. `);
  }
}

module.exports = Shopper;
