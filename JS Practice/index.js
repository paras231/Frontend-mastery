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
