// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

function great_magicians(magNames: string[]) {
  for (let index = 0; index < magNames.length; index++) {
    magNames[index] = "Great " + magNames[index];
    console.log(magNames[index]);
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

great_magicians([...magArray]);
console.log("Orignal Array is Unchanged.");
show_magicians(magArray);
