// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

// "Thriller" by Michael Jackson
// "The Dark Side of the Moon" by Pink Floyd
// "Abbey Road" by The Beatles

function make_album(artistName: string, albumTitle: string) {
  return { "Artist Name": artistName, "Album Title": albumTitle };
}

let funCall1 = make_album("Michael Jackson", "Thriller");
let funCall2 = make_album("Pink Floyd", "The Dark Side of the Moon");
let funCall3 = make_album("The Beatles", "Abbey Road");

console.log(funCall1);
console.log(funCall2);
console.log(funCall3);

export {};
