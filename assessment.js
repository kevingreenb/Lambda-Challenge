/*
Work through the problems in this file.  As you work through each problem periodically run: npm test
Your function name and the string must match the instructions exactly otherwise the tests will fail.
After writing your function uncomment the matching function reference at the bottom of the file.
*/

// 1. Write a function called helloWorld that returns the string 'Hello World!'.

function helloWorld() {
  const result = 'Hello World!';
  return result;

}

/*
2. Write a function called lambdaSchool that has a single parameter called num.
     num will be a positive integer.
     If num is divisible by 3 return the string 'Lambda'
     If num is divisible by 5 return the string 'School'
     If num is divisible by 3 AND 5 return the string 'Lambda School' (notice the space)
     If num is NOT divisible by 3 or 5 then return num.

     Example:
             lambdaSchool(15); // returns 'Lambda School'
             lambdaSchool(8); // returns 8
*/


function lambdaSchool(num) {
  const divisibleBy3 = 'Lambda';
  const divisibleBy5 = 'School';
  if (num % 3 === 0 && num % 5 === 0){
    return divisibleBy3 + " " + divisibleBy5;
  }

  else if (num % 3 === 0){
    return divisibleBy3;
  }
  else if (num % 5 === 0){
    return divisibleBy5;
  }
  else {
    return num;
  }

}

/*
3. Write a function called longestString that has a single parameter called strs.
     strs will be an array of strings.
     Return the longest string that is in strs.
     If there is a tie for the longest string then return the one that occurs first.

     Example:
             longestString(['hi', 'hello', 'ni hao', 'guten tag']); // returns 'guten tag'
             longestString(['JavaScript', 'HTML', 'CSS']); // returns 'JavaScript'
*/

function longestString(strs) {

  var longestStrs = strs.reduce(function (current, next) { return current.length >= next.length ? current : next; });
  return longestStrs;

  /* *****longer approach*****
  let i = 0;
  let longestStrs = "";
  strs.forEach(function (element) {
    if (i === 0) {
      max = strs[i];
    }

    else if (strs[i].length > strs[i - 1].length) {
      longestStrs = strs[i];
    }
    i++;
  })
  return longestStrs;
*/
}

/*
4. Write a function called computeUserAverageAge that has a single parameter called users
     users is an array of user objects.
     Each user object has a property called age that is a number.
     Compute the average age of all user objects in the users array.
     Round off the decimals if needed and return the number.

     Example:
             const users = [{
               name: 'Brendan Eich',
               age: 56,
             }, {
               name: 'Linus Torvalds',
               age: 48,
             }, {
               name: 'Margaret Hamilton',
               age: 81,
             }];
             computeUserAverageAge(users); // returns 62 (This number is rounded up from 61.6666)
*/

function computeUserAverageAge(users) {

  let avg = Math.round(users.reduce((total, next) => total + next.age, 0) / users.length);
  return avg;
    /* *****longer approach*****
  let totalAge = 0;
  let averageAge = 0;

  users.forEach(function (user) {
    totalAge += user.age;
  });
  averageAge = Math.round(totalAge/users.length);
  
  return averageAge;
  */

}

module.exports = {
 helloWorld,
 lambdaSchool,
 longestString,
 computeUserAverageAge
};
