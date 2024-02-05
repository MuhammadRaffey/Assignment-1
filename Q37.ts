// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt(size = "Large", text = "I love TypeScript"): string {
  return `A T-shirt with Size:${size} and Text "${text}" was made`;
}
let myShirt1 = make_shirt();
let myShirt2 = make_shirt("M");
let myShirt3 = make_shirt("M", "Muhammad Raffey");
console.log(myShirt1);
console.log(myShirt2);
console.log(myShirt3);
