/*
  Swap all elements in pairs. If the length of the list is odd, the last
  element stays in place.

  Example: [2,7,8,3,1,4]
  Returns [7,2,3,8,4,1]

  Example: [3,6,8,1,5]
  Returns [6,3,1,8,5]

*/

(function(CSC){

CSC.iterativePairSwap = function(arr) {
  for(let i = 0; i < arr.length - 1; i++) {
    if(arr[i + 1] === undefined) {
      break;
    }
    let temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
    i++;
  }
  return arr;
};

CSC.recursivePairSwap = function(arr) {
  if(arr.length === 0 || arr.length === 1) {
    return arr;
  }
  let pair = [arr[1], arr[0]];
  return pair.concat(CSC.recursivePairSwap(arr.splice(2)));
};

})(CSC);