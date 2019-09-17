/*
  Count the occurences of an element inside a list.
  Example: [2,7,4,4,1,4] for 4
  Returns 3

*/

(function(CSC){

CSC.iterativeTimes = function(arr, element) {
  let count = 0;
  for(let el of arr) {
    if(arr[0] === element) {
      count++
    }
  }
  return count;
};

CSC.recursiveTimes = function(arr, element) {
  if(arr.length === 0) {
    return 0;
  }
  let el = arr.shift();
  if(el === element) {
    return CSC.recursiveTimes(arr, element) + 1;
  }
  else {
    return CSC.recursiveTimes(arr, element);
  }
};

})(CSC);