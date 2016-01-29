function Pizza (toppings, size) {
  this.size = ["Small", "Medium", "Large", "Galaxy-sized"];
  this.sauces = ["Vegan Cheese", "Carmelized Onions", "Peppers", "Pineapple", "Jalapeno", "Tempeh", "Olives", "Mushrooms", "Onions"];
  this.order = [];
}

Word.prototype.pizzaSizer = function() {

}

Word.prototype.toppingSelector = function() {
  if (this.size )
}

Word.prototype.costCalc = function() {}

Word.prototype.finalOrder = function() {
  var order = this.toppingSelector() + this.pizzaSizer() + this.costCalc();
}
