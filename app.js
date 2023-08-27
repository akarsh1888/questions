// Bind Polyfill

// Define an object
const obj = {
  name: "Akarsh",
  mission: "2023",
};

// Define a function that takes three parameters and logs them
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

// Create a bound version of the Test function with the context obj and pre-bound arguments
const sample = Test.myBind(obj, "Argument1", "Argument2");

// Call the bound version of the function with an additional argument
sample("Argument3");

/****************************************************************************************
 *
 *
 *****************************************************************************************/
