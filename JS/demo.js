// Task 1 (or zero.... technically)
var myName = "Jack";

var myAge = 32;

var isHappy = true;

// Task 2
var taskTwo = 32 + 8;

console.log(taskTwo);

// Task 3
var mySurname = "Berry";

var fullName = myName + mySurname;
console.log(fullName);

// Task 4
if (myAge > 32) {
  console.log("The person is older than Jack");
} else {
  console.log("The person is the same age or younger than Jack");
}

// Task 5
if (myAge > 32) {
  console.log("The person is older than Jack");
} else if (myAge == 32) {
  console.log("The person is the same age as Jack");
} else {
  console.log("The person is younger");
}

// Task 6

if (myAge > 32 && isHappy == true) {
  console.log("There is hope!");
} else {
  console.log("Filler text for second option");
}

// Task 7

for (let index = 0; index < 10; index++) {
  console.log("I am counting to " + index);
}

// Task 8

switch (myAge) {
  case 16:
    console.log("You can legally buy a redbull");
    break;
  case 17:
    console.log("You can legally learn to drive");
    break;
  case 18:
    console.log("You can legally buy alochol");
    break;
  default:
    console.log("Filler text again");
    break;
}
