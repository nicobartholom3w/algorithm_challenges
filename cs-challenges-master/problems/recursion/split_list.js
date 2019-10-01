/*
	Split a list of numbers with regard to a pivot element. All elements
	smaller than the pivot element go in the first return list, all other
	elements go into the second return list. Both return list are inside one
	list.

	Example: [2,7,8,3,1,4] , 4
	Returns [[2,3,1],[7,8,4]]

*/

(function(CSC){

CSC.iterativeListSplit = function(arr, element) {

};

CSC.recursiveListSplit = function(arr, element) {
	console.log(arr);
	// console.log(arr.shift());
	let lowArr = [];
	let highArr = [];
	for(let i = arr.length - 1; i >= 0; i--){
		el = arr.pop();
		if(el >= element){
			highArr.push(el);
		}
		else {
			lowArr.push(el);
		}
	}
	let one = arr.concat(lowArr);
	let two = arr.concat(highArr);
	// (arr.concat(lowArr)).concat(highArr);
	// console.log(one)
	// console.log(two);
	// console.log(arr);
};

})(CSC);