/*


## Numbers #3

1. create "score1", "score2", "score3" variables and
   assign values (0-100)
2. calculate total score and average score, and assign them to the variables.
3. log total score and average score
4. create "plates" variable and assign 20
5. create "people" variable and assign 7
6. calculate remaining plates and assign to the variable
7. add one to remaining plates
8. create message variable and display 'There are (your value goes here) plates available' - string concatenation
9. log message

*/

const score1 = 10;
const score2 = 5;
const score3 = 20;
const totalScore = score1 + score2 + score3;
//calculate the total score
console.log('this is the total score ' +totalScore);

//calculate average score
const averageScore = totalScore / 3;
console.log('this is the average score ' +averageScore);

//remaing plates

const plates = 20;
const people = 7;
//caculate the remaining plates
let remainingPlates = plates % people;
console.log('this is the remaing plates ' +remainingPlates);
//add one to remaing plates
remainingPlates++;
console.log('this is the remaining plates plus one add ' +remainingPlates);
//message

console.log('there are ' + remainingPlates +' plates available')