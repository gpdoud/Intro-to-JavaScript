// *** Intro to JavaScript II *** //

Guests introduce themselves
Introduce me
Logistics (restrooms)

// creating number variables
var age = 29;
var GPA = 3.5;

// creating string variables
var name = "Greg";
var job = 'Boot camp instructor';

// arrays
var testScores = [100, 98, 92, 90, 95];
for(var test of testScores) {
  console.log(test);
}
// calculating the average of the array items
var total = 0;
for(var test of testScores) {
  total = total + test;
}
console.log("Average is", total / testScores.length);
