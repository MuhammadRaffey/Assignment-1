// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

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

show_magicians(magArray);
