/*
## Objects #6

1. create car object
2. add make, model, year, colors (array),
   hybrid (boolean) keys
3. add two methods (drive and stop)
4. in the function body setup log with random text
5. log make
6. log first color
7. invoke both methods
*/
//create a car object
const car = {
    make:'vitz',
    model:'toyota',
    color:['red', 'black', 'white'],
    hybrid: true,
    drive:function(){
        console.log('vroom vroom');
    },
    stop(){
        console.log('silence, silence');

    },
}
//log make;
const maker = car.make;
console.log(maker);
//log first color
firstColor = car.color[0];
console.log('this is the first color ' +firstColor);
//invoking both methods
/*
const driving = car.drive();
console.log(driving);

const stoping = car.stop();
console.log(stoping); */
car.drive();
car.stop();