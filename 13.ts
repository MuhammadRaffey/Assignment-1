`Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”`;

let fav_transport = ["CD 70", "Toyota Supra", "Tesla Model S"];
for (let i = 0; i < fav_transport.length; i++) {
  if (fav_transport[i] === "CD 70") {
    console.log(`I already own a ${fav_transport[i]}`);
  } else {
    console.log(`I would like to own a ${fav_transport[i]}`);
  }
}
export {};
