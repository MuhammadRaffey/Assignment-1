// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

let favPizza: string[] = ["Fajjita", "Tikka", "Pepperoni"];
for (let i = 0; i < favPizza.length; i++) {
  console.log(`I like ${favPizza[i]} flavour of a Pizza.`);
}
console.log(
  "I've got quite a palate for pizzas! From savoring the zesty Fajita to relishing the smoky Tikka and diving into the classic Pepperoni, those pizzas truly make my taste buds dance with delight."
);
console.log("I really love pizza!");
