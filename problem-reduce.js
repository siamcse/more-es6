/*
1) You have an array [ 1, 9, 17, 22 ]. Add the all elements
of this array and give output. Do this using for loop &
array.reduce() method.
*/
const numbers =[ 1, 9, 17, 22 ];
function addElement(numbers){
    let sum =0;
    for(let i=0;i<numbers.length;i++){
        sum = sum + numbers[i];
    }
    return sum;
}
console.log(addElement(numbers));
const add = numbers.reduce((previous,current) => previous + current ,0);
console.log(add);

const people = [
    {name: 'siam', age: 23},
    {name: 'alamin', age: 25},
    {name: 'krishno', age: 24}
];

function addAge(){
    let sum =0;
    for(let i=0;i<people.length;i++){
        sum = sum + people[i].age;
    }
    return sum;
}
// console.log(addAge(people));

const sumAge = people.reduce(addAge , 0);
console.log(sumAge);