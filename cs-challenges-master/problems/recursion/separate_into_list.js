/*
  Put every element into its own list.

  Example: [2,7,8,3,1,4]
  Returns [[2], [7], [8], [3], [1], [4]]

*/

(function(CSC){

CSC.iterativeListSeperate = function(arr) {
  return arr.map((item) => {return [item]});
};

CSC.recursiveListSeparate = function(arr) {
  if(arr.length === 0) {
    return arr;
  }
  arr[0] = [arr[0]];
  return [arr[0]].concat(CSC.recursiveListSeparate(arr.slice(1)));
};

})(CSC);