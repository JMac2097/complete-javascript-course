/////////////////////////////////////////////////////////
// Lecture: hoisting

// //function declaration - hoisting only works here
// calculateAge(1955);

// function calculateAge(year) {
//     console.log(2017 - year);
// }

// //expression - hoisting not working here
// //retirement(1990);

// var retirement = function(year) {
//     console.log(65 - (2017 - year));
// }

// //variables - variables set to undefined in the creation phase - so not available yet

// console.log(age);
// var age = 23;   //global variable


// function foo(){
//     var age = 65;
//     console.log(age);
// }
// foo(); //own execution context - same name but not the same variable
// console.log(age);


/////////////////////////////////////////////////////
// Lecture: scoping

// var a = 'Hello';
// first();

// function first() {
//     var b = 'Hi';
//     second();

//     function second() {
//         var c = 'Hey!';
//         console.log(a + b + c);
//     }
// }

/////////////////////////////////////////////////////////////
// The this Keyword

// calculateAge(1986);

// function calculateAge(year) {
//     console.log(2017 - year);
//     console.log(this);
// }

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2017 - this.yearOfBirth);
/*
        function innerFunction() {
            console.log(this);
        }
        innerFunction(); */
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
}

mike.calculateAge = john.calculateAge;
mike.calculateAge();


