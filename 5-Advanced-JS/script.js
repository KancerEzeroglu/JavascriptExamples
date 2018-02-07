//Object.create

/*var personProto = {
    calculateAge: function(){
        console.log(2016 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto,{
    name: { value: 'Jane' },
    yearOfBirth: { value: 1969 },
    job: { value: 'designer' }
});*/

/*
// Primitives vs Objects

//Primitives
var a = 23;
var b = a;
console.log(a);
console.log(b);

//Objects
var obj1 = {
    name: 'John',
    age: 26
};

var obj2 = obj1;
obj1.age= 30;
console.log(obj1.age);
console.log(obj2.age);

//Functions

var age = 27;
var obj = {
    name: 'Kancer',
    city: 'Fethiye'
};

function change(a,b){
    a=30;
    b.city = 'Irlanda';
}

change(age,obj);

console.log(age);
console.log(obj.city);
*/


/*
//Passing functions as arguments
var years = [1991, 1965, 1937, 2005, 1984];

function arrayCalc(arr, fn){
    var arrRes = [];
    for (var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el){
    return 2018 - el;
}

function isFullAge(el){
    return el >= 18;
}

function maxHeartRate(el) {
    if(el >= 18 && el <= 81){
        return Math.round(206.9 - (0.67 * el));
    }else{
        return -1;
    }
}

var ages = arrayCalc(years,calculateAge);
var fullAges = arrayCalc(ages,isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);

*/

/*
//Functions returning functions

function interviewQuestion(job){
    if(job === 'designer'){
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    }else if(job === 'teacher'){
         return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    }else{
         return function(name) {
            console.log('Hello' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var  designerQuestion = interviewQuestion('designer');

teacherQuestion('Kancer');
designerQuestion('Kancer');

interviewQuestion('teacher')('Mark');
*/

/*
// IIFE

function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();

(function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
})(); //iife example

*/

/*
//Closures

function retirement(retirementAge){
    var a = ' years left until retirement.';
    return function(yearOfBirth){
        var age = 2018 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
retirementUS(1991);

retirement(66)(1991);



function interviewQuestion(job){
    return function(name){
        if(job === 'designer'){
            console.log(name + ', can you please explain what UX design is?')
        }else if(job === 'teacher'){
             console.log('What subject do you teach, ' + name + '?');
        }else{
            console.log('Hello' + name + ', what do you do?');
        }
    }
}

interviewQuestion('teacher')('Mark');

*/

// Bind, Call and Apply

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay){
        if(style === 'formal'){
            console.log('Good ' + timeOfDay + ',ladies and gentlemen! I\'m ' + this.name + ' I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        }else if(style === 'friendly'){
            console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a '+ this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
}

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

john.presentation('formal', 'morning');

john.presentation.call(emily, 'friendly', 'afternoon');

var johnFriendly = john.presentation.bind(emily, 'friendly');
johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');

var years = [1991, 1965, 2016, 2005, 1984, 1999];

function arrayCalc(arr, fn){
    var arrRes = [];
    for (var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el){
    return 2018 - el;
}

function isFullAge(limit, el){
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));

console.log(ages);
console.log(fullJapan);

















































