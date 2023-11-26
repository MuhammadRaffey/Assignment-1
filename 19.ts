/*
Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
*/

let guestList = ["Junaid", "Raza", "Abdul Sammad", "Rashid", "Nadeem"];
let count: number = 0;
for (let i = 0; i < guestList.length; i++) {
  console.log(
    `"Hey ${guestList[i]}, dinner at our place tonight! Delicious food and good vibes await. See you soon!"`
  );
  count += 1;
}
console.log(`I am inviting ${count} people `);

export {};
