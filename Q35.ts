// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

let animals: string[] = ["dog", "cat", "horse"];

for (let index = 0; index < animals.length; index++) {
  const element = animals[index];
  // console.log(element);
  if (element == "dog" || element == "horse") {
    console.log(`${element} would make a great pet.`);
  } else {
    console.log(`${element} are nice too.`);
  }
}
console.log("Dog and Horse would make a great pet.");
