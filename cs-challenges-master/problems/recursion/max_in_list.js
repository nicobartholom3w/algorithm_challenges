/*
  Find the maximum value in a list like the one below.
  Example: [2,7,8,3,1,4]
  Returns 8

*/

(function(CSC){

  CSC.iterativeMax = function(arr) {
    let max = arr[0];
    for(let i = 1; i < arr.length; i++){
      if(max < arr[i]){
        max = arr[i];
      }
    }
    return max;
  };

  CSC.recursiveMax = function(arr) {
    if(arr.length === 1) {
      return arr[0];
    }
    if(arr[0] < arr[1]) {
      arr.shift();
    }
    else {
     arr.splice(1, 1); 
    }
    return CSC.recursiveMax(arr);
  };
})(CSC);