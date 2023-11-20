`Name Cases: Store a person's name in a variable, and then print that person's name in lowercase, uppercase, and titlecase.`;
let myName = "rAFFey";
function toTitleCase(input: string) {
  let letter = input[0];
  let titleName = letter.toUpperCase() + input.slice(1).toLowerCase();
  return titleName;
}

console.log(`This is the Normal name in Variable "${myName}",`);
console.log(`This is to Upper Case "${myName.toUpperCase()}".`);
console.log(`This is to Lower Case "${myName.toLowerCase()}".`);
console.log(`This is to Title Case "${toTitleCase(myName)}".`);
export {};
