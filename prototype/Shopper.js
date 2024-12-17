class Shopper {
  constructor(name = "", items = []) {
    this.name = name;
    this.items = items;
  }

  addItemToList(item) {
    if (item) {
      this.items.push(item.trim());
    }
  }
  clone() {
    let proto = Object.getPrototypeOf(this);
    let cloned = Object.create(proto);

    cloned.name = this.name;
    cloned.items = [...this.items];

    return cloned;
  }
  // set name(value) {
  //   this.name = value;
  // }

  // get name() {
  //   return this.name;
  // }

  // get shoppingList() {
  //   return this.shoppingList.join(",");
  // }
}

module.exports = Shopper;
