// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

function carInfo(model: string, manufacturer: string, ...restofinfo: string[]) {
  let cInfo: { [key: string]: string } = {
    Model: model,
    Manufacturer: manufacturer,
  };
  for (let i = 0; i < restofinfo.length; i += 2) {
    const key = restofinfo[i];
    const value = restofinfo[i + 1];
    cInfo[key] = value;
  }

  return cInfo;
}

let car = carInfo("Civic", "Honda", "color", "red", "year", "2023");
console.log(car);
