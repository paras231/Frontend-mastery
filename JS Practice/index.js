//! Debounce ->  running a function after a certain amount of time when the "user stops typing".

let counter = 0;

function getData() {
  console.log("writing data", ++counter);
}

function myDebounce(cb, delay) {
  let timer;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      cb();
    }, delay);
  };
}

const betterFunction = myDebounce(getData, 1000);

//! Throttling->  calling a function only after a certain amount of time has passed.

// here we are disabling the button for 5 seconds after clicking it.

const myThrottle = (cb, delay) => {
  return function (...args) {
    document.getElementById("btn").disabled = true;
    setTimeout(() => {
      cb();
    }, delay);
  };
};

const newFunc = myThrottle(() => {
  document.getElementById("btn").disabled = false;

  console.log("user clicked");
}, 5000);

//! spread operator with some examples->

const a = [1, 2, 3, 4, 5];

const b = [...a, 6, 7, 8, 9]; // copies the value  of a into b and gives new array.
// console.log(b);

const myArray = ["q", "s", "d", "a", "aa"];

const myObj = { ...myArray };
// console.log(myObj);
const myStr = "PARAS";

// console.log(...myStr);  //prints strings seperately with spaces.

//? now lets try the split method on string

// console.log(myStr.split());   this method gives an array of string.

const myStr2 = "i am the best boy";
// console.log(myStr2.split(" "));  prints strings seperately inside an array.

//? lets use spread operator inside a funciton.

let value = ["a", "b", "c","d","e"];
const myFunc = (x, y, z) => {
  // console.log(x, y, z);
};
myFunc(...value);   // a,b,c will be passed as argument -> x,y,z respectively

//!  rest argument and spread operator are different.

//? example  of rest argument

function randomFunc(x,y,z,...p){
  console.log(x,y,z,p);    // p is basically an array.
}
randomFunc(1,2,3,20,30,40,80);