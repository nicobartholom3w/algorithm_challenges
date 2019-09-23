/*
  Put element pairs in their own list. 
  If you have an odd number of elements, add a zero.

  Example: [2,7,8,3,1,4]
  Returns [[2,7], [8,3], [1,4]]

  Example: [3,6,8,1,5]
  Returns [[3,6],[8,1],[5,0]]

*/

(function(CSC){

CSC.iterativePairSeparate = function(arr) {

};

CSC.recursivePairSeparate = function(arr) {

};

})(CSC);















// CSC.iterativePairSeparate = function(arr) {
//   let newArr = [];
//   if(arr.length % 2 !== 0) {
//     arr.push(0);
//   }
//   for(let i = 0; i < arr.length; i++) {
//     let pair = [arr[i], arr[i + 1]];
//     newArr.push(pair);
//     i++;
//   }
//   return newArr;
// };

// CSC.recursivePairSeparate = function(arr) {
//   if(arr.length === 0) {
//     return arr;
//   }
//   if(arr.length % 2 !== 0){
//     arr.push(0);
//   }
//   let pair = [[arr[arr.length - 2], arr[arr.length - 1]]];
//   return CSC.recursivePairSeparate(arr.slice(0, -2)).concat(pair);
// };