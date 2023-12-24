/*No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed. */

let commonUserNames: string[] = ["admin", "Eric", "Raffey"];
let username: string = "Raffey";
for (let index = 0; index <= commonUserNames.length; index++) {
  commonUserNames.pop();
  console.log(index);
}
// commonUserNames.pop();
console.log(commonUserNames.length);

if (commonUserNames.length != 0) {
  for (let i = 0; i < commonUserNames.length; i++) {
    if (username === "admin") {
      console.log("Hello admin, would you like to see a status report?");
    } else if (commonUserNames.includes(username)) {
      console.log(`Hello ${username}, thank you for logging in again.`);
    } else {
      console.log("No users found");
    }
  }
} else {
  console.log("Add some users Please");
}
export {};
