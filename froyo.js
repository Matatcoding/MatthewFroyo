const userInput = prompt(
  "Please enter froyo flavors separated by commas.",
  "Vanilla,Vanilla,Vanilla,Strawberry,Coffee,Coffee"
);

const choices = userInput.split(",");

console.log(choices);

const flavors = (choices) => {
  const count = {};
  for (const flav of choices) {
    if (count[flav]) {
      count[flav] += 1;
    } else {
      count[flav] = 1;
    }
  }
  return count;
};

console.table(flavors(choices));
