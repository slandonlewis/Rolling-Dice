// Put your code here

// List of names
const names = [
  "Nashville", "Hong Kong", "The back yard", "Earth",
  "London", "The mall", "Ryman Auditorium", "The Great Wall of China"
];

// Logs each name
console.log("All Pace Names");

for (const name of names) {
  console.log(name);
}

// Filter names to create list containing name that start with "The"
console.log("'The' Place Names");
const theNames = names.map(name => `The ${name}`);
console.log(theNames);