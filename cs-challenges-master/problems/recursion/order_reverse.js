/*
  Reverse the order of the list.
  Example: [2,7,8,3,1,4]
  Returns [4,1,3,8,7,2]

*/

(function(CSC){

CSC.iterativeReverse = function(arr) {
  for(let i = 0; i <= Math.floor(arr.length / 2); i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = temp;
  }
  return arr;
};

CSC.recursiveReverse = function(arr) {
  if(arr.length === 1) {
    return arr;
  }
  let el = arr.shift();
  return CSC.recursiveReverse(arr).concat(el);
};

})(CSC);