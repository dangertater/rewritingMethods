// returns boolean value contingent on just one element in the array passing a function's test
let numbers = [0, 1, 2, 3, 4, 5, 6]
let smallerNumbers = [0, 1, 2, 3, 4, 5]
let areSomeBiggerThan5 = (element, index, array) => {
	return element > 5
}
console.log(
	"numbers.some(areSomeBiggerThan5)",
	numbers.some(areSomeBiggerThan5)
)
console.log(
	"smallerNumbers.some(areSomeBiggerThan5)",
	smallerNumbers.some(areSomeBiggerThan5)
)

//for non array objects, check out the mdn
