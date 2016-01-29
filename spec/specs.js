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
  it ("will allow a user to choose the size of the pizza and output cost", function() {
    var testPizza = new Pizza("large");
    expect(testPizza.pizzaSizer()).to.equal(16);
  });
  it("will allow a user to a topping for the desired pizza and output cost", function() {
    var testPizza = new Pizza("large", "Mushroom");
    expect(testPizza.toppingSelector()).to.equal(2);
  });
  // it ("will separate multiple toppings into an array", functio)
  it("will allow a user to select multiple toppings and output cost", function() {
    var testPizza = new Pizza("large", "Mushroom Pepper Tempeh");
    expect(testPizza.toppingSelector()).to.equal(6);
  });
  it("will return a pizza based on size and topping selections", function() {
    var testPizza = new Pizza("small", "Tomato Pepper Daiya");
    expect(testPizza.finalOrder()).to.equal(16);
  });
  it("will calculate the cost of the pizza based on size and toppings", function() {
    var testPizza = new Pizza("galaxy-sized", "Tempeh, Onion, Olive, Potato");
    expect(testPizza.finalOrder()).to.equal(28);
  });
});
