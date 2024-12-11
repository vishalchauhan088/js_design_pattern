class Shopper {
  constructor(name, items = []) {
    this.name = name;
    this.items = items;
  }

  addItemToList(item) {
    if (item) {
      this.items.push(item.trim());
    }
  }
}

module.exports = Shopper;
