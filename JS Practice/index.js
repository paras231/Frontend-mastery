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

let value = ["a", "b", "c", "d", "e"];
const myFunc = (x, y, z) => {
  // console.log(x, y, z);
};
myFunc(...value); // a,b,c will be passed as argument -> x,y,z respectively

//!  rest argument and spread operator are different.

//? example  of rest argument

function randomFunc(x, y, z, ...p) {
  // console.log(x,y,z,p);    // p is basically an array.
}
randomFunc(1, 2, 3, 20, 30, 40, 80);

//? create a next previous button using vanilla javascript.
const userdata = [
  {
    id: 1,
    name: "John Doe",
    age: 32,
  },
  {
    id: 2,
    name: "Jane Doe",
    age: 30,
  },
  {
    id: 3,
    name: "Jack Doe",
    age: 25,
  },
  {
    id: 4,
    name: "Jill Doe",
    age: 27,
  },
  {
    id: 5,
    name: "Yatharth Doe",
    age: 28,
  },
  {
    id: 7,
    name: "Raja Doe",
    age: 29,
  },
  {
    id: 8,
    name: "Shaym Doe",
    age: 29,
  },
  {
    id: 9,
    name: "Paras Doe",
    age: 29,
  },
];

const currentPage = 1;

const userPerPage = 2;

const indexOfLastUser = currentPage * userPerPage;
const indexOfFirstUser = indexOfLastUser - userPerPage;

const currentUsers = userdata.slice(indexOfFirstUser, indexOfLastUser);

// console.log(indexOfLastUser, "index of last user");
// console.log(indexOfFirstUser, "index of first user");
// console.log(currentUsers, "current users");

const newvalue = Math.ceil(userdata.length / userPerPage);

// console.log(newvalue, "new value here");

//? selecting a user from list and showing his data after clicking on it

function selectUser() {
  // console.log(userdata.map((i) => i.id));
}

const selectBtn = document.getElementById("myBtn");

// selectBtn.addEventListener("click", selectUser);


//? hoisting in javascript->

doSomething();  // accessing the function before initialization -> it will print and work.

function doSomething(){
  console.log("do something running");
}

