//similar to the .some method but returns boolean based on if every value passes the functional test
let numbers = [0, 1, 2, 3, 4, 5, 6]
let singleDigitsQuestion = (element, index, array) => {
	return element < 10
}

console.log(
	"numbers.every(singleDigitsQuestion)",
	numbers.every(singleDigitsQuestion)
)

//bonus learning
//----if you run 'numbers.every(singleDigitsQuestion())' it evaluates 'singleDigitsQuestion' to false and then runs
//----numbers.every(false()), causing an error
//check if one array is subset of another below

let numbersTotal = [0, 1, 2, 3, 4, 5, 6]
let numbersSubset = [2, 3, 4]
const isSubset1 = (array1, array2) =>
	array2.every((element) => array1.includes(element))
console.log("test1", isSubset1(numbersTotal, numbersSubset)) // true
console.log("test2", isSubset1(numbersTotal, numbersSubset)) // false

let isSubset = (array1, array2) =>
	array2.every((element) => array1.includes(element))

//q4e why does this return false if adding {}'s after the arrow functions?
console.log(
	"isSubset(numbersTotal,numbersSubset)",
	isSubset(numbersTotal, numbersSubset)
)
//below is a copyPaste but i added {}'s to the grand scope of the function, returning it as undefined and idk why
//----adding {}'s after teh second arrow function causes return of undefined, also unsure why
let isSubsetUndefined = (array1, array2) => {
	array2.every((element) => {
		array1.includes(element)
	})
}

console.log(
	"isSubsetUndefined(numbersTotal,numbersSubset)",
	isSubsetUndefined(numbersTotal, numbersSubset)
)
