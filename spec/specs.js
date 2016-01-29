// describe('Word', function() {
//     it("will produce a random word", function() {
//       var testRandom = new Word("Monkey");
//         expect(testRandom.hangman()).to.be.a("string");
//     });
//
//     it("will gather the length of word", function() {
//       var testSplit = new Word("Monkey");
//       expect(testSplit.wordLengthCalc("Monkey")).to.equal(6);
//     });
// });

describe('Pizza', function() {
  it("will allow a user to choose toppings for the desired pizza", function() {
    var testPizza = new Pizza("Mushroom");
    expect(testPizza.toppingSelector()).to.equal("Mushroom");
  });
  it ("will allow a user to choose the size of the pizza", function() {
    var testPizza = new Pizza("Large");
    expect(testPizza.pizzaSizer()).to.equal(16);
  });
  it("will return a pizza based on size and topping selections", function() {
    var testPizza = new Pizza("Small", "Tempeh", "Tomato Sauce", "Daiya");
    expect(testPizza.finalOrder()).to.equal(["Small", "Tempeh", "Tomato Sauce", "Daiya"]);
  });
  it("will calculate the cost of the pizza based on size and toppings", function() {
    var testPizza = new Pizza("Small", "Tempeh", "Tomato Sauce", "Daiya");
    expect(testPizza.costCalc()).to.equal(14);
  });
});
