// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value that’s returned.

function city_country(cityName: string, countryName: string) {
  return `${cityName}, ${countryName}`;
}

let funCall1 = city_country("Lahore", "Pakistan");
let funCall2 = city_country("Dubai", "UAE");
let funCall3 = city_country("New York", "America");

console.log(funCall1);
console.log(funCall2);
console.log(funCall3);

export {};
