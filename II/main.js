console.log("Hello, world!");

var dayOfTheMonth = 21;
console.log(dayOfTheMonth);

var answer = 55 * dayOfTheMonth;
console.log("55 times the day of the month is", answer);

var GPA = 3.5;
console.log("I graduated from UC with a", GPA, "GPA");

var aMessage = "Thanks for coming to the JavaScript course.";
var instructor = "Greg";
var whatIsThis = aMessage + instructor;
console.log(whatIsThis);

var iLikeJavascript = true;
var iLikeBeanSprouts = false;

var numberA = 36;
var numberB = 8;

if(numberA < numberB) {
  console.log("numberA is less than numberB");
} else {
  console.log("numberA is NOT less than numberB");
}

var testScores = [ 96, 87, 94, 81, 91, 98, 99, 76, 88, 73, 80 ];

var total = 0;
var index = 0;
while(index < testScores.length) {
  total = total + testScores[index];
  index = index + 1;
}
console.log(total, total/testScores.length);















