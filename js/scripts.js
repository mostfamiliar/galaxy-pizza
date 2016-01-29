function Pizza (size, toppingChoice, cost) {
  this.size = size;
  this.toppings = ["Vegan Cheese", "Carmelized Onions", "Peppers", "Pineapple", "Jalapeno", "Tempeh", "Olives", "Mushrooms", "Onions"];
  // this.sauces = sauces;
  // this.toppings = toppings;
  // this.cheese = cheese;
  this.toppingChoice = toppingChoice;
  this.cost = 0;
  this.order = [];
}

Pizza.prototype.pizzaSizer = function() {
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
  // for (var i =0; i < this.orderLength; i++) {
  //   newOrder[i] ==
    console.log(this.toppingChoice);
    this.toppingChoice = this.toppingChoice.split(" ");
    console.log(this.toppingChoice);
    var toppingLength = this.toppingChoice.length;
    console.log(toppingLength);
    // console.log(this.toppings);
    // var toppingsArr = (this.toppings).split(" ");
    // console.log(splitToppings);
    // newOrder.push(this.sauces + " " + toppingsArr + " " + this.cheese);

    for (var i = 0; i < toppingLength; i++) {
    if (toppingArr === this.toppings[i]) {
      this.cost = this.cost + 2;
    }
  }
    // console.log(newOrder);
    // newOrder.forEach(function(blank) {
    //       costTest = costTest + 2;
    // });
    return this.cost;
}

Pizza.prototype.costCalc = function() {

}

Pizza.prototype.finalOrder = function() {
  var order = this.toppingSelector() + this.pizzaSizer() + this.costCalc();
}
