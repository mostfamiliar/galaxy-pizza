function Pizza (size, toppingChoice, cost, toppingList) {
  this.size = size;
  this.toppings = ["Vegan Cheese", "Carmelized Onions", "Peppers", "Pineapple", "Jalapeno", "Tempeh", "Olives", "Mushrooms", "Onions"];
  // this.sauces = sauces;
  // this.toppings = toppings;
  // this.cheese = cheese;
  this.toppingChoice = toppingChoice;
  this.cost = 0;
  this.toppingList = toppingList;
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
  var cost = 0;
  this.toppingChoice = this.toppingChoice.split(" ");
  var toppingLength = this.toppingChoice.length;
  this.toppingChoice.forEach(function(blank) {
        cost = cost + 2;
  });
  return cost;
}

Pizza.prototype.finalOrder = function() {
  var sizeCost = this.pizzaSizer();
  var toppingCost = this.toppingSelector();
  var finalCost = sizeCost + toppingCost;
  return finalCost;
}

//   for (var i = 0; i < toppingLength; i++) {
//   if (this.toppingChoice === this.toppings[i]) {
//     this.cost = this.cost + 2;
//   }
// }

// console.log(this.toppings);
// var toppingsArr = (this.toppings).split(" ");
// console.log(splitToppings);
// newOrder.push(this.sauces + " " + toppingsArr + " " + this.cheese);


$(document).ready(function() {
  var newPizza = new Pizza();
  var newToppingList = newPizza.toppings;
  console.log(newToppingList);
  for (var i = 0; i < newToppingList.length; i++) {
        $(".ingredient-list").empty().append("<li>" + newToppingList.join("</li><li>"));
      }
});
