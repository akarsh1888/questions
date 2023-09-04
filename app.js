// Bind Polyfill

/*
const obj = {
  name: "Akarsh",
  mission: "2023",
};

function Test(param1, param2, param3) {
  console.log(this, param1, param2, param3);
}

// Define a polyfill for the bind method on Function.prototype
Function.prototype.myBind = function (...args) {
  // Store the reference to the original function
  const caller = this;

  // The first argument passed to myBind will be the context (this) for the function
  const firstArgs = args[0];
  // The rest of the arguments will be the bound arguments
  const restArgs = args.slice(1);

  return (...newArgs) => {
    // Combine the pre-bound arguments and newly passed arguments
    newArgs = [...restArgs, ...newArgs];

    // Call the original function using apply, setting the context and passing arguments
    caller.apply(firstArgs, newArgs);
  };
};

const sample = Test.myBind(obj, "Argument1", "Argument2");

sample("Argument3");

// ****************************************************************************
// ****************************************************************************
// ****************************************************************************


// Debouncing vs Throttling

// Deboucne Function

function debounce(func, timeout, ...args) {
  let timeoutId;
  return function () {
    const context = this;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(function () {
      func.apply(context, args);
    }, timeout);
  };
}

const Test1 = (param1, param2) => {
  console.log(param1, param2);
};
const debouncedFunction = debounce(Test1, 5000, "arg1", "arg2");

window.addEventListener("click", debouncedFunction);


// Throttle Function

function throttle(func, timeout, ...args) {
  // TimeBased Approach
  //   let startingTime = new Date().getTime();
  //   return function () {
  //     let currentTime = new Date().getTime();
  //     if (currentTime - startingTime >= timeout) {
  //       func.apply(this, args);
  //       startingTime = new Date().getTime();
  //     }
  //   };

  //    Flag Based Approach
  let hasTimeIntervalPassed = true;
  return function () {
    if (hasTimeIntervalPassed) {
      func.apply(this, args);
      hasTimeIntervalPassed = false;
      setTimeout(() => {
        hasTimeIntervalPassed = true;
      }, timeout);
    }
  };
}

const Test1 = (param1, param2) => {
  console.log(param1, param2);
};

const throttledFunction = throttle(Test1, 5000, "arg1", "arg2");
window.addEventListener("click", throttledFunction);


// ****************************************************************************
// ****************************************************************************
// ****************************************************************************


// Call vs Apply vs Bind

let obj1 = {
    firstName: "Akarsh",
    lastName: "Srivastava",
};

let obj2 = {
    firstName: "Sachin",
    lastName: "Srivastava",
};

let printFullName = function (param1, param2) {
    console.log(
        this.firstName + " " + this.lastName + " " + param1 + " " + param2
        );
    };
    
    printFullName.call(obj1, "arg1", "arg2");
    
    printFullName.apply(obj2, ["arg1", "arg2"]);
    
    const printFullNameBindedCopy = printFullName.bind(obj2, "arg1", "arg2");
    printFullNameBindedCopy();
    
*/
