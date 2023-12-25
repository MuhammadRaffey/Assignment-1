/*No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed. */

let commonUserNames: string[] = ["admin", "Eric", "Raffey", "Junaid", "Raza"];
commonUserNames.splice(0, commonUserNames.length);
// console.log(commonUserNames);

if (commonUserNames.length != 0) {
  for (let i = 0; i < commonUserNames.length; i++) {
    let username = commonUserNames[i];
    if (username.toLowerCase() === "admin") {
      console.log("Hello admin, would you like to see a status report?");
    } else {
      console.log(`Hello ${username}, thank you for logging in again.`);
    }
  }
} else {
  console.log("We need to find some users!");
}

export {};
