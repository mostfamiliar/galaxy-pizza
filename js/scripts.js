function Pizza (size, toppingChoice, cost, toppingCost, finalCost) {
  this.size = size;
  this.toppings = ["Vegan Cheese", "Carmelized Onions", "Peppers", "Pineapple", "Jalapeno", "Tempeh", "Olives", "Mushrooms", "Onions"];
  // this.sauces = sauces;
  // this.toppings = toppings;
  // this.cheese = cheese;
  this.toppingChoice = toppingChoice;
  this.cost = cost;
  this.toppingCost = toppingCost;
  this.finalCost = finalCost;
}

Pizza.prototype.pizzaSizer = function() {
  if (this.size === "small") {
    return this.cost = 10;
  }
  else if (this.size === "medium") {
    return this.cost = 14;
  }
  else if (this.size === "large") {
    return this.cost = 16;
  }
  else if (this.size === "galaxy-sized") {
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
  this.toppingCost = cost;
  return this.toppingCost;
}

Pizza.prototype.finalOrder = function() {
  var sizeCost = this.pizzaSizer();
  console.log(sizeCost);
  var toppingCost = this.toppingSelector();
  console.log(toppingCost);
  return this.finalCost = sizeCost + toppingCost;
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
  // var newSelections = newPizza.toppingSelector();
  // for (var i = 0; i < newToppingList.length; i++) {
  //   var test = newToppingList[i];
  //   var $test = $("<li>").text(test).hide().delay(100*i).fadeIn(300);
  //   $(".ingredient-list").append("<label class='checkbox-inline'><input type='checkbox' id='$'>" + test + "</label>");
  //       // $(".ingredient-list").empty().append("<label class='checkbox-inline'><input type='checkbox' id='[i]'>" + "<li>" + newToppingList.join("</li><li>") + "</label>");
  //       // $(".test").append(".checkbox-inline");
  //     };

    //function to disable other checkboxes on size when one is selected!!!!

    $(".btn").click(function() {
      $(".pizza-cat").show().fadeOut(5000);
    });




    $("form#pizza-size").submit(function(event) {
      event.preventDefault();
      var smallChecked = $("input#small").prop('checked');
      var mediumChecked = $("input#medium").prop('checked');
      var largeChecked = $("input#large").prop('checked');
      var galaxyChecked = $("input#galaxy").prop('checked');

      if (smallChecked === true) {
        this.size = "small";
        var receipt = newPizza.pizzaSizer();
      } else if (mediumChecked === true) {
        this.size = "medium";
        var receipt = newPizza.pizzaSizer();
      } else if (largeChecked === true) {
        this.size = "large";
        var receipt = newPizza.pizzaSizer();
      } else if (galaxyChecked === true) {
        this.size = "galaxy-sized";
        var receipt = newPizza.pizzaSizer();
      } else {
        console.log("We got problems");
      }
     //

     $('.toppings-list input:checkbox:checked').each(function () {
        newPizza.toppingChoice = $(this).attr('id');
        newPizza.toppingSelector();
      });

      // newPizza.finalOrder();


     $(".hidden-receipt").show();
     $(".size-output").append(this.size + " ");
     $(".toppings-output").append(" " + newPizza.toppingChoice + " ");
     $(".cost-output").append(this.cost + " ");

    });





});
