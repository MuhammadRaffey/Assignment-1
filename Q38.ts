// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

function describe_city(cityName: string, countryName = "Pakistan") {
  return `${cityName} is in ${countryName}`;
}

let funCall1 = describe_city("Lahore");
let funCall2 = describe_city("Karachi");
let funCall3 = describe_city("New York", "America");

console.log(funCall1);
console.log(funCall2);
console.log(funCall3);

export {};
