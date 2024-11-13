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


*/

/*const students = [
  {id:1, name:'peter', score:80, favoriteSubject: 'math'},
  {id:2, name:'susan', score:99, favoriteSubject: 'math'},
  {id:3, name:'anna', score:85, favoriteSubject: 'math'},
  {id:4, name:'john', score:34, favoriteSubject: 'art'},
  {id:5, name:'subhan', score:74, favoriteSubject: 'math'},
]
  */

// console.log(students);

//have access to students from data.js
//map method

const updatedStudents = students.map(function(student){
   //console.log(student);
   //let add role to each object in the array
   student.role = 'student';
   return student;
})
console.log(updatedStudents);

const students2 = students.map(function(eleve){
   eleve.age = 25;
   return eleve;

})
console.log(students2);

const students3 = students.map(function(eleve1){
  if(eleve1.score >=50){
    console.log(`${eleve1.name} has pass this class`)
  } else{
    console.log(`${eleve1.name} has faild this class`);
  }
  return eleve1;
})
console.log(students3);


//filter example
const highScores = students.filter(function(student){
  //  console.log(student);
  // return student.score >= 80;
  /*if(student.score >= 80){
    return student;
  }
  else{
    return null;
  }*/
 if(student.score >= 80) return student;
   
})
console.log(highScores);

//anoter aproach for filter methods

//find example;
const specificId = students.find(function(student){
  return student.id === 1;
})
console.log(specificId);

const fruits = ['apple', 'banana'];
const random = fruits.find(function(fruit){
   return fruit === 'banana';
})
console.log(random);

// the rducde method
/*
#### averageScore

1. sum up all student.score values with reduce
2. divide by the length of the students array
3. assign to 'averageScore' and log

*/

const averageScore = students.reduce(function(acc,currItem){
  console.log(`this is the accumulator ${acc}`);
  console.log(`this is the curent Item ${currItem.score}`)
   acc += currItem.score/students.length;
  return acc;
}, 0)

console.log(averageScore);

const nouveauAverage = students.reduce(function(scorTotal,student){
  console.log(student);
  console.log(scorTotal);
   return scorTotal + student.score;
},0)/students.length;

console.log(nouveauAverage);


//square baraket to add some value dynamicly
 const subject = 'math';
 const total = {};
//  total.math =' value';
 total[subject] ='new value '
 console.log(total);

 //survey challenge
 const survey = students.reduce(function(survey, student){
    console.log(student.favoriteSubject);
    const favSubject = student.favoriteSubject;
    if(survey[favSubject]){
      survey[favSubject] =  survey[favSubject] +1;
    }
    else{
      survey[favSubject] = 1;
    }
   

    return survey;
 },{})
 console.log(survey);
  


