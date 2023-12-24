/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/

let favorite_fruits: string[] = ["Apple", "Mango", "Orange"];

if (favorite_fruits.includes("Mango")) {
  console.log("Mango is my Fav Fruit.");
}
if (favorite_fruits.includes("Apple")) {
  console.log("An Apple a Day Keeps The Doc Away.");
}
if (favorite_fruits.includes("Orange")) {
  console.log("Orange is good for Health.");
}
if (favorite_fruits.includes("Grapes")) {
  console.log("Grapes are Nice");
}
if (favorite_fruits.includes("Kiwi")) {
  console.log("Kiwi is Nice too.");
}
export {};
