//? DSA QUESTIONS JAVASCRIPT->

// Quiz. 1->   check sum zero of a pair of array

// input = > [-5,-4,-3,-2,0,2,4,6,8];

// output = [] a pair of array which has sum zero.

// output should be [-4,4];

function getSumZero(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
      if (i + array[j] === 0) {
        const output = [i, array[j]];
        console.log(output);
      }
    }
  }
}
getSumZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]);

//! solving the same problem with different logic->
// while loop can be used for this



