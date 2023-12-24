// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

const favPlaces: string[] = ["Muree", "Kashmir", "Italy", "Turkey", "America"];
console.log(favPlaces);

// Sorting in ascending order (original array remains unchanged)
const aStoredFavPlaces = [...favPlaces].sort();
console.log(aStoredFavPlaces, "Alphabetically Sorted");
console.log(favPlaces, "orignal Array Remains unchanged"); // Original array remains unchanged

// Sorting in reverse order
const rSortedFavPlaces = [...favPlaces].sort((a, b) => b.localeCompare(a));
console.log(rSortedFavPlaces, "Reverse Alphabetically Storted");
console.log(favPlaces, "orignal Array Remains unchanged"); // Original array remains unchanged

//Reverseing order of Orignal array
favPlaces.sort((a, b) => b.localeCompare(a));
console.log(favPlaces, "orignal Array revered"); // Original array revered

//Again reversing it to normal
favPlaces.sort((a, b) => a.localeCompare(b));
console.log(favPlaces, "orignal Array Reversed to Normal"); // Original array revered back to normal

export {};
