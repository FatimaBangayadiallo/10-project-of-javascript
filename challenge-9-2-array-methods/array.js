/*
## Array Methods #9

Multiple Videos

#### Create Students Array

1. setup students array with 5 students
   {
   id: 1,
   name: 'peter',
   score: 80,
   favoriteSubject: 'math',
   },

#### Use Multiple Files

- easer to manage code base (file, project)
- order matters
- other ways to achieve the same result (ES6 modules, fetch DB )
- not limited to just static data

#### updatedStudents

1. add role:'student' property to each object
   using MAP method
2. assign to 'updatedStudents' variable and log

#### highScores

1. filter array and return only scores >= 80
2. assign to 'highScores' variable and log

#### specificId

1. find specific id in array
2. assign to 'specificId' variable and log

#### averageScore

1. sum up all student.score values with reduce
2. divide by the length of the students array
3. assign to 'averageScore' and log

#### survey

1. list favorite subjects with reduce
   {
   english: 1
   history: 1
   math: 3
   }
2. assign to survey and log

*/

//console.log(students);

/*
Exo-1
#### updatedStudents

1. add role:'student' property to each object
   using MAP method
2. assign to 'updatedStudents' variable and log
*/

const updatedStudents = students.map(function(student){
   // console.log(student);
    //for each student lets add a role propertie
    student.role = 'student';
    return student;
})
console.log(updatedStudents);
//Exo-1-2
const updatedStudents2 = students.map(function(eleve){
     //lets add age propertie to each eleve
      eleve.age = 18;
      return eleve;
})
console.log(updatedStudents2);

//Exo-2
/*
#### highScores

1. filter array and return only scores >= 80
2. assign to 'highScores' variable and log

*/

const highScores = students.filter(function(student){
    //console.log(student);
    return student.score >= 80;
})
console.log(highScores);

//Exo-3
/*
#### specificId

1. find specific id in array
2. assign to 'specificId' variable and log

*/

const specificId = students.find(function(student){
     return student.id === 4;
})
console.log(specificId);


//Exo-4
/*
#### averageScore

1. sum up all student.score values with reduce
2. divide by the length of the students array
3. assign to 'averageScore' and log
*/

const averageScore = students.reduce(function(acc, student){
    console.log('this is the accumulato ' +acc);
    console.log( 'this is the curent score ' +student.score);
     acc += student.score;
     //or return acc + student.score
  return acc;
    
},0)/students.length;
console.log(averageScore);

//Exo-5 Survey
/*
#### survey

1. list favorite subjects with reduce
   {
   english: 1
   history: 1
   math: 3
   }
2. assign to survey and log

*/

const survey = students.reduce(function(acc, currItem){
    const favSubject = currItem.favoriteSubject;
    if(acc[favSubject]){
        acc[favSubject] = acc[favSubject] + 1;
    }else{
        
        acc[favSubject] = 1;
    }
    return acc;
     
},{})
console.log(survey);

const date = new Date();
console.log(date);

const month = date.getMonth();
console.log(months[month]);

const day = date.getDay();
console.log(days[day]);
console.log(date.getDate())
console.log(date.getFullYear())

//chatgpt exercices

//Given an array of numbers, create a new array with each number doubled.

/*
Given an array of numbers, create a new array with each number doubled.

javascript
Copy code

*/
let numbers = [1, 2, 3, 4];
const doubles = numbers.map(function(item){
    return item * 2;
})
console.log(doubles);

/*
6. filter()
filter(callback) creates a new array with all elements that pass the test implemented by the provided function.
Exercise:

Given an array of ages, filter out the ages below 18.

javascript
Copy code

*/
let ages = [12, 16, 21, 18, 27];

const adults = ages.filter(function(item){
     
    return item >= 18;
})
console.log(adults);

/*
7. reduce()
reduce(callback, initialValue) applies a function against an accumulator and each element to reduce the array to a single value.
Exercise:

Given an array of prices, calculate the total cost.

javascript
Copy code

*/
let prices = [10, 20, 15];

const totalCoats = prices.reduce(function(acc, currItem){
    acc += currItem;
    return acc
},0)
console.log(totalCoats);

/*
8. find()
find(callback) returns the first element that satisfies the provided testing function.
Exercise:

From an array of words, find the first word that has more than five letters.

javascript
Copy code


*/
let words = ["apple", "banana", "cherry"];

const longWord = words.find(function(fruit){
  return fruit.length > 5;
})
console.log(longWord);