///////////////////////////////////////
// Lecture: Hoisting

/*
//functions
calculateAge(1965);

function calculateAge(year){
    console.log(2018 - year);
}

// retirement(1990);

var retirement = function(year) {
    console.log(65 - (2016 - year));
}

// variables

//console.log(age);
var age = 23;
//console.log(age);

function foo(){
    console.log(age);
    var age = 65;
    console.log(age);
}
foo();
console.log(age);

*/



///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain


/*var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}

*/


///////////////////////////////////////
// Lecture: The this keyword


//console.log(this);

/*calculateAge(1984);
function calculateAge(year){
    console.log(2018 -year);
    console.log(this);
}*/

/*var kancer = {
    name: 'kancer',
    yearOfBirth: 1991,
    calculateAge: function(){
        console.log(this);
    }
}

kancer.calculateAge();
*/

function destroyer(arr) {
    var newArray = [];
    var args = Array.prototype.slice.call(arguments);
    console.log(arr);
    console.log(args);
    var i = 1;
    
    arr.filter(function (curr) {
       for (; i < args.length; i++) {
           console.log("i: ",i);
           if(curr !== args[i]){
               newArray.push(curr);
           }
       } 
    });
    return newArray;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);








