/*
  Given a list of lists of numbers, return a flat list of all numbers.
  
  Example: [[2,7], [8,3], [1,4]]
  Returns [2,7,8,3,1,4]

*/

(function(CSC){

CSC.iterativeListFlatten = function(arr) {
  let newArr = [];
  for(let i = 0; i < arr.length; i++) {
    if(!Array.isArray(arr[i])){
      newArr.push(arr[i]);
    }
    else {
      for(let k = 0; k < arr[i].length; k++){
        if(!Array.isArray(arr[i][k])){
          newArr.push(arr[i][k]);
        }
      }
    }
  }
  console.log(arr);
  console.log(newArr);
};

CSC.recursiveListFlatten = function(arr) {
  if(!Array.isArray(arr)) {
    return [arr];
  }
  else if(arr.length === 1) {
    return arr[0];
  }
  let tempArr = arr.shift();
  return CSC.recursiveListFlatten(tempArr).concat(CSC.recursiveListFlatten(arr));
};

})(CSC);