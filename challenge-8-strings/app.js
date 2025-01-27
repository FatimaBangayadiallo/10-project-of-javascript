/*
## Strings #8

1. create function fullName
2. accept two parameters "firstName", "lastName"
3. add them together (concat) and return result in uppercase
4. invoke fullName and pass some values
5. log result
6. change the order of arguments
7. refactor to object parameter

*/

const fullName = function(firstName, lastName){
    const name = `${firstName} ${lastName}`
    return name.toLocaleUpperCase();
}
console.log(fullName('Fatouma', 'diallo'));
console.log(fullName('diallo', 'Fatouma'));

const monNom = function({firstName, lastName}){
    const name = firstName +' ' +lastName;
    return name.toLocaleUpperCase();
}

console.log(monNom({lastName:'Bah', firstName:'alpha'}));