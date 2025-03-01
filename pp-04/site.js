/*
  Step 1. Correct the variable scope so that the console.log()
  call outputs the correct value (5) for x. You must still use
  `x` as the variable inside the function, however.
*/

/*
function double(num) {
  var x = num * 2;
  return x;
}
*/

/*
  Step 2. Rewrite the JavaScript `double()` function above so that
  it does not pollute the global namespace: that is, neither its
  variables nor the `double()` function itself can be accessed
  directly via the global `window` object, like `window.x`).

  Be sure to comment out the original `double()` function so you
  can accurately test your work.
*/
var doubleObj = {
x: 2.5,
double: function(num){
  if (typeof(num) != "number"){
    console.log("Input was not a number")
    return
  }
  return num * 2;}
};

var x = doubleObj.double(doubleObj.x)
console.log('The value of x is', x, '-- it should be 5.');


/*
  Step 3. Rewrite your corrected `double()` function from Step 2.
  so that non-number values passed into the function are handled
  in some reasonable way.
*/
