

// Lecture: Variables
/*
var name = 'John';
console.log(name);

var lastName = 'Smith';
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/

// Lecture: Variables 2

/*
var name = 'John';
var age = 26;

//console.log(name + age);
//console.log(age + age);

var job, isMarried;

//console.log(job);

job = 'Teacher';
isMarried = false;

console.log(name + ' is a ' + age + ' years old ' + job + '.  Is he married? ' + isMarried + '.');

age = 'thirty six';
job = 'driver';

console.log(name + ' is a ' + age + ' years old ' + job + '.  Is he married? ' + isMarried + '.');

var lastName = prompt('What is the last name?');
console.log(lastName);

alert(name + ' ' + lastName + ' is a ' + age + ' years old ' + job + '.  Is he married? ' + isMarried + '.');
*/

/*
// Lecture: Operators
var now = 2017;
var birthYear = now - 26;

birthYear = now - 26 * 2;
//2017 - 52
//1965


console.log(birthYear);

var ageOfJohn = 30;
var ageOfMark = 30;

ageOfJohn = ageOfMark = (3 + 5) * 4 - 6;
//ageOfJohn = ageOfMark = 26;
//ageOfJohn = 26;
ageOfJohn++;
ageOfMark *= 2;

console.log(ageOfJohn);
console.log(ageOfMark);

*/

/*
// Lecture: if/else statements
var name = 'John';
var age = 26;
var isMarried = 'yes';

if(isMarried === 'yes') {
    console.log(name + ' is married');
} else {
    console.log(name + ' will hopefully marry soon :)');
}

isMarried = false;

if(isMarried){
    console.log('Yes!');
} else {
    console.log('No!');
}

if(23 == '23') {
    console.log('Something to print');
}
*/

// Lecture: Boolean logic and Switch

/*
var age = 25;

if(age < 20) {
    console.log('John is a teenager');
} else if(age >= 20 && age < 30) {
    console.log('John is a young man');
} else {
    console.log('John is a man');
}


var job = 'teacher';

job = prompt('What does John do?');

switch (job) {
    case 'teacher':
    console.log('John teaches kids');
    break;
    case 'driver':
    console.log('John drives a cab');
    break;
    case 'cop':
    console.log('John fights crime');
    break;
    default:
    console.log('John does something else');
}

*/

//Coding challenge
/*
var johnHeight = 10;
var derekHeight = 10;
var johnAge = 39;
var derekAge = 39;

var johnTotal = johnHeight + (johnAge * 5);
//console.log(johnTotal);
var derekTotal = derekHeight + (derekAge * 5);
//console.log(derekTotal);

if(johnTotal > derekTotal) {
    console.log('John is the winner with a score of ' + johnTotal);
} else if(johnTotal < derekTotal) {
    console.log('Derek is the winner with a score of ' + derekTotal);
} else {
    console.log('It was a draw');
}
*/
/*
// Extra challenge
var johnHeight = 100;
var derekHeight = 10;
var janeHeight = 30;
var johnAge = 39;
var derekAge = 39;
var janeAge = 23;

var johnTotal = johnHeight + (johnAge * 5);
console.log(johnTotal);
var derekTotal = derekHeight + (derekAge * 5);
console.log(derekTotal);
var janeTotal = janeHeight + (janeAge * 5);
console.log(janeTotal);

if(johnTotal > derekTotal && johnTotal > janeTotal) {
    console.log('John is the winner with a score of ' + johnTotal);
} else if(derekTotal > johnTotal && derekTotal > janeTotal) {
    console.log('Derek is the winner with a score of ' + derekTotal);
} else if(janeTotal > johnTotal && janeTotal > derekTotal) {
    console.log('Jane is the winner with a score of ' + janeTotal)
} else {
    console.log('It was a three way  draw');
}

*/

//////////////////////////////////////////////////////////////

//Lecture: functions 
/*
function calculateAge(yearOfBirth) {
    var age = 2017 - yearOfBirth;
    return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);
//console.log(ageMary);

function yearsUntilRetirement(name, year) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    if(retirement >= 0) {
    console.log(name + ' retires in ' + retirement + ' years');
    } else {
        console.log(name + " has already retired");
    }

}

yearsUntilRetirement('John', 1990);
yearsUntilRetirement('Mike', 1969);
yearsUntilRetirement('Mary', 1948);

*/

