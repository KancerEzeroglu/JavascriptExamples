/*var john = {name: "John", age: 26, height: 180};
var friend = {name: "friend", age: 25, height: 190};

function findResult(height, age){
    return height + age * 5;
}

var john_score = findResult(john.height,john.age);
var friend_score = findResult(friend.height,friend.age);

if (john_score > friend_score) {
    console.log("Score: " + john_score + " Win: " + john.name);
} else if (john_score < friend_score) {
    console.log("Score: " + friend_score + " Win: " + friend.name);
} else if (john_score === friend_score) {
    console.log("Score: " + john_score + " Both won!");
}*/

//Challenge 2

/*var years = [1991, 1965, 1935, 2016];
var persons = [];

for (var i = 0; i < years.length; i++) {
    printFullAge(years[i]);
}
console.log(persons);

function printFullAge(year) {
    var age = 2017 - year;
    if (age < 18) {
        persons.push(false);
        console.log("Person is " + age + " years old. and is NOT of full age.");
    }
    else {
        persons.push(true);
        console.log("Person is " + age + " years old. and is of full age.");
    }
}*/

/*
function queueTime(customers, n) {
    var result = 0;
    var arr = [];
    var n_value = n;
    if (n === 1) {
         return customers.reduce(function(a, b) {return a + b}, 0);
         } else {
        if (customers.length < n) {
            n_value = customers.length;
        }
        for (var j = 0; j < n_value; j++) {
            arr[j] = customers[j];
        }
        for (var k = 0; k < n_value; k++) {
            if (arr.length != 1) {
                var min_val = Math.min.apply(null, arr);
                result += min_val;
                for (var m = 0; m < n_value; m++) {
                    arr[m] -= min_val;
                }
                for (var l = 0; l < m; l++) {
                    if (arr[l] === 0) { //remove '0' elements from array
                        arr.splice(l, 1);
                        l--;
                    }
                }
                if (j != customers.length) {
                    for(var s=0; s<n_value;s++){
                        arr.push(customers[j++]);
                    }
                    k = -1;
                }if(arr.length === 1 || arr.length === 0){
                    if(arr[0]){result += arr[0];}
                    console.log(result);
                    return result;
                }else{
                    if(customers.length < n){
                        n_value--;
                        k = -1;
                    }
                }
            } else {
                result += arr[0];
                console.log(result);
                return result;
            }
        }
    }
}

queueTime([1,2,3,4], 1);*/



/*function solution(list){
    var finalArr = [];
    var rangeArr = [];
    var em;

    for(var i=0;i<list.length;i++){
        if((list[i+1] - list[i]) === 1){
            if(!rangeArr.includes(list[i])){
                rangeArr.push(list[i]);
            }if(!rangeArr.includes(list[i+1])){
                rangeArr.push(list[i+1]);
            }
        }else{
            if(rangeArr.length !== 0 && rangeArr.length !== 2 ){
                em = rangeArr[0] + "-" + rangeArr[rangeArr.length-1];
                finalArr.push(em);
                rangeArr = [];
                continue;
            }
            if(rangeArr.length === 2){
                finalArr.push(rangeArr[0]);
                finalArr.push(rangeArr[1]);
                rangeArr = [];
                continue;
            }
            finalArr.push(list[i]);
        }
    }
    var result = finalArr.toString();
    return result;
}

solution([-6, -5, -4]);*/

function whoIsNext(names, r){
    if(r > 5){
        
    }
}

whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 8);
