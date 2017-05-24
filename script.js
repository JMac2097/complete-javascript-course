

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

///////////////////////////////////////////////////////////////
// Lecture: Statements and Expressions
/*
//statement
function someFun(par) {
    //code in here
}

//expression
var someFun = function(par) {
    //code
}

//expressions
3+4;
var x = 1;

//statement
if(x === 5) {
    //do something
}

An expression produces a value and a statement is just meant to do an an action

*/

/////////////////////////////////////////////////////////////////
// Lecture: Arrays
/*
var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990, 1969, 1948);

console.log(names[0]);
names[1] = 'Ben';
console.log(names);

var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue');
john.unshift('Mr.');
john.pop(); //remove from the end and returns that value
john.shift(); //removes from the beginning and returns the value


console.log(john);

var indexed = john.indexOf('Smith');
console.log(indexed);

if(john.indexOf('designer') === -1) {
    console.log('John is not a designer, but he is trying his hardest')
};
*/
////////////////////////////////////////////////////////
//Lecture: Objects

//key/value pairs
/*
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false
}

console.log(john.lastName);
console.log(john['lastName']);

var xyz = 'job';
console.log(john[xyz]);

john.lastName = 'Miller';
john['job']= 'programmer';

console.log(john);

var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1969;
jane['job'] = 'retired';
jane['isMarried'] = true;

console.log(jane);

*/

/////////////////////////////////////////////////////////////////
//Lecture: Objects and Methods
/*
//v1.0
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function() {
        return 2017 - this.yearOfBirth;
    }
}
*/
//console.log(john.calculateAge(1987));
/*console.log(john.calculateAge());

var age = john.calculateAge();
john.age = age;

console.log(john);*/


//v2.0
/*
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function() {
        this.age = 2017 - this.yearOfBirth;
    }
};

john.calculateAge();
console.log(john);
*/

/*
var nirvana = {
    vocals: 'Kurt',
    bass: 'Krist',
    drums: 'Dave',
    otherMemembers: ['Pat', 'Jason', 'Chad'],
    numberOfExMembers: function(otherMemembers) {
        this.numberOfExMembers = this.otherMemembers.length;
    }
}

nirvana.numberOfExMembers();
console.log(nirvana);


var theWho = {
    ukSales: 34000,
    usSales: 45000,
    vocals: 'Roger',
    guitar: 'Pete',
    drums: 'Keith',
    bass: 'John',
    collectedArray: ['Derek', 'Derek2','Bill'],
    totalSales: function() {
        this.totalSales = this.ukSales + this.usSales;
    }
};

theWho.totalSales();
console.log(theWho);
theWho.collectedArray.push('Dave');
console.log(theWho.collectedArray.length);

*/

//////////////////////////////////////////////////////////////
//  Lecture: Loops and Iterations
/*
for(var i=0; i <= 10; i++) {
    console.log(i);
}
*/

var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];

//for loops
/*
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

for(i = names.length -1; i >= 0; i--) {
    console.log(names[i]);
}
*/

//while loops
/*
var i = 0;
while (i < names.length) {
    console.log(names[i]);
    i++;
}

for(var i = 1; i <= 5; i++ ) {
    if(i === 3) {
        continue;
    }

    console.log(i);

}
*/

///////////////////////////////////////////////////////////
//Lecture: Coding challenge 2

/*
1- Create an array with some years where perons were born.
2- Create an empty array (just [])
3- Use a loop to fill the array with the ages of the persons
4- Use another loop to log into the console whether each person is of full age 
(18 or older) as well as their age.
5- Finally create a function called printFullAge which recieves the vector of years 
as an argument, executes the steps 2, 3 and 4 and returns a vector of true/false 
boolean values: true if the person is of full age(>=18) false if not (<18)
6- Call the function with two different vectors and store the results in two variables: full_1 and full_2.

Example input: [1965, 1980, 1976]
Example output: [true, false, true]

Hint: You can use a loop not only to read from an array, like y[i], but to also set values in an array, like y[i] = ... You can also use the specific array methods.

*/



// function printFullAge(years) {
//     var ages = [];
//     var fullAges = [];  //for the boolean values
//     for( var i = 0; i < years.length; i++) {
//         ages[i] = 2017 - years[i];
//     }

//     for(i = 0; i < ages.length; i++) {
//         if (ages[i] >= 18) {
//             console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' and full age');
//             fullAges.push(true);
//         } else {
//             console.log('Person ' + (i + 1) + ' is only ' + ages[i] + ' and too young, begone');
//             fullAges.push(false);
//         }
//     }
// return fullAges;
// }

// var years = [1945, 2013, 1909, 2000, 2002];
// var full_1 = printFullAge(years);
// var full_2 = printFullAge([2015, 1970, 1500]);


/*
function biscuitBoolean(biscuits) {
var biscuitsLeft = [];
var lotsOfBiscuits = [];

for(var i = 0; i < biscuits.length; i++) {
    biscuitsLeft[i] = biscuits[i];
    if(biscuitsLeft[i] < 20) {
        console.log('Arggh, biscuits only at ' + biscuitsLeft[i] + ' biscuits left');
        lotsOfBiscuits.push(false);
    } else {
        console.log('It\'s ok, you have ' + biscuitsLeft[i] + ' biscuits left');
        lotsOfBiscuits.push(true);
    }
}

return lotsOfBiscuits;


}

var biscuits = [34, 8, 15, 22, 45];
var biscuitList2 = biscuitBoolean([45, 12, 11, 34, 22, 1, 55, 61, 21]);


*/









