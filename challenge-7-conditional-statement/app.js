/*

## Conditional Statements #7

1. create two objects "person1", "person2"
2. setup name,age (15-25),
   status ('resident', 'tourist') keys

3. setup if else, condition where
   age must be bigger than 18 and status must be
   equal to 'resident'
4. test with both objects

*/

//create the two object

const person1 = {
    name:'john',
    age: 20,
    status:'resident',
}
const person2 = {
    name :' subhan',
    age: 12,
    status:'tourist',
}

if(person1.age >= 18 && person1.status === 'resident'){
    console.log('he is a resident so he can vote')
}else{
    console.log('he is a not eligeable');
}
if(person2.age > 18 && person2.status === 'resident' ){
    console.log(' he is a resident so he can vote');
}else{
    console.log('you are not eligible');
}