//? DSA QUESTIONS JAVASCRIPT->

// Quiz. 1->   check sum zero of a pair of array

// input = > [-5,-4,-3,-2,0,2,4,6,8];

// output = [] a pair of array which has sum zero.

// output should be [-4,4];

function getSumZero(array) {
  for (let i = 0; i < array.length; i++) {
    // console.log(i); // i is basically index of array.
    for (let j = 1; j < array.length; j++) {
      if (i + array[j] === 0) {
        const output = [i, array[j]];
        // console.log(output, "output result");
      }
    }
  }
}
getSumZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]);

//! solving the same problem with different logic->
// while loop can be used for this

// Quiz 2->  Anagram string

// 1 two string will be passed as parameter and check their length is equal and letters are same retutn true and false;

function checkAnagram(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }
  let counter = {};
  for (let letter of string1) {
    counter[letter] = (counter[letter] || 0) + 1;
    console.log(counter[letter]);
    //  console.log(letter);
  }
  // console.log(counter);
  for (let items of string2) {
    if (!counter[items]) {
      return false;
    }
    counter[items] -= 1;
  }
  return true;
}

const result = checkAnagram("hello", "ellohh");

console.log(result);




