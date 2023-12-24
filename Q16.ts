// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

let guestList = ["Junaid", "Raza", "Abdul Sammad", "Rashid", "Nadeem", "Ali"];
guestList[2] = "Saqlain";
guestList.push("Sir Jahanzaib");
guestList.push("Sir Zia");
for (let i = 0; i < guestList.length; i++) {
  console.log(
    `"Hey ${guestList[i]}, dinner at our place tonight! Delicious food and good vibes await. See you soon!"`
  );
}
console.log("Abdul Sammad was not able to make it.");
console.log("Hello guys! I found a Bigger Table, Now more space is Available.");
export {};
