// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function great_magicians(magNames: string[]) {
  for (let index = 0; index < magNames.length; index++) {
    magNames[index] = "Great " + magNames[index];
  }
}

function show_magicians(magNames: string[]) {
  for (let index = 0; index < magNames.length; index++) {
    const element = magNames[index];
    console.log(element);
  }
}

let magArray: string[] = [
  "David Copperfield",
  "Penn Jillette",
  "Teller ",
  "Dynamo",
  "Criss Angel",
];

great_magicians(magArray);
show_magicians(magArray);
