// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

function make_shirt(size: string, text: string): string {
  return `A T-shirt with Size:${size} and Text "${text}" was made`;
}
let myShirt = make_shirt("M", "Muhammad Raffey");
console.log(myShirt);
export {};
