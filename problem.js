/*
1) You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].
Now convert this array into an even array (array with even
numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map()
method. Hints: add one to any odd number and it will become an even
number.
*/
const oddArray = [ 1, 3, 5, 7, 9 ];
function evenArray(oddArray){
    const even= [];
    for(let i=0;i<oddArray.length;i++){
        even.push(oddArray[i]+1);
    }
    return even;
}
console.log(evenArray(oddArray));
const evenArrayMap = oddArray.map(num => num +1);
console.log(evenArrayMap);

/*
2) You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now
return/get all the elements which are divisible by 10 using
array.filter() method.
*/
const numbers = [33, 50, 79, 78, 90, 101, 30 ];
const divisible = numbers.filter(num => num%10 == 0);
console.log(divisible);

/*
3) Now do the same task of question 2. But do this using array.find()
method. Then compare the output of question 2 & question 3.
*/
const firstDivisible = numbers.find(num => num%10 == 0);
console.log(firstDivisible);

/*

*/
/*

*/
/*

*/