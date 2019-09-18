/*
  Add up all numbers in the list.

  Example: [2,7,8,3,1,4]
  Returns 25

*/

(function(CSC){

CSC.iterativeListSum = function(arr) {
  let sum = 0;
  for(let item of arr) {
    sum += item;
  }
  return sum;
};

CSC.recursiveListSum = function(arr) {
  if(arr.length === 1) {
    return arr[0];
  }
  let item = arr.shift();
  return CSC.recursiveListSum(arr) + item;
};
})(CSC);