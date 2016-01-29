function Pizza (size, cost) {
  this.size = size;
  this.sauces = ["Vegan Cheese", "Carmelized Onions", "Peppers", "Pineapple", "Jalapeno", "Tempeh", "Olives", "Mushrooms", "Onions"];
  this.cost = cost;
  this.order = [];
}

Pizza.prototype.pizzaSizer = function() {
  console.log(this.size);
  if (this.size === "Small") {
    return this.cost = 10;
  }
  else if (this.size === "Medium") {
    return this.cost = 14;
  }
  else if (this.size === "Large") {
    return this.cost = 16;
  }
  else if (this.size === "Galaxy-sized") {
    return this.cost = 20;
  }
}

Pizza.prototype.toppingSelector = function() {
  for (var i =0; i < this.orderLength; i++) {

  }
}

Pizza.prototype.costCalc = function() {

}

Pizza.prototype.finalOrder = function() {
  var order = this.toppingSelector() + this.pizzaSizer() + this.costCalc();
}
