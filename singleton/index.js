const logger = require("./Logger");
const Shopper = require("./Shopper");
const Store = require("./Store");

// const logger = new Logger().getInstance();

logger.log(`Starting app....`);

const alex = new Shopper("alex", 500);
const shop = new Store("supplies", [
  {
    item: "downhill skis",
    qty: 5,
    price: 750,
  },
  {
    item: "knit hat",
    qty: 20,
    price: 5,
  },
]);

logger.log("finished config....");
console.log(`${logger.count} logs total `);
logger.logs.map((log) => {
  console.log(`       ${log.message}   `);
});
