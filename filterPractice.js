//filter creates a shallow copy of desired portion of array that pass the implemented test, can take multiple arguments
//----toBeFiltered.filter((argument) => argument.length)
//----toBeFiltered could be array, objects, did not see it being anything else
//----argument variable can be assigned whatever you want
//----.length could be any 'filtering' factor
//----multiple arguments can be used
let arrayOfWords = [
	"alligator",
	"bear",
	"cat",
	"dog",
	"elk",
	"farrot",
	"joeHydro",
	"steak",
]

let filterFunction = arrayOfWords.filter((word) => word.length > 4)
console.log("filterFunction", filterFunction)

let twoCriteria = arrayOfWords.filter(
	(moreThan4lessThan6) =>
		moreThan4lessThan6.length > 4 && moreThan4lessThan6.length < 6
)
console.log("twoCriteria", twoCriteria)

let twoCriteriaWithOr = arrayOfWords.filter(
	(word) => word.length > 7 || word.length < 4
)
console.log("twoCriteriaWithOr", twoCriteriaWithOr)
//array of objects below
let people = [
	{ name: "guy", age: 10, hobbies: "kickin ass", location: "colorado" },
	{ name: "girl", age: 15, hobbies: "takin names", location: "spain" },
	{ name: "oldPerson", age: 93, hobbies: "oops'ing", location: "colorado" },
]

let filterForColorado = people.filter(function (obj) {
	return obj.location === "colorado"
})
console.log(
	"//JSON.stringify(filterForColorado)//",
	JSON.stringify(filterForColorado)
)

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let filterNumbers = numbers.filter((num) => {
	return num > 5
})
console.log("filterNumbers", filterNumbers)
// the below console.log does not work because the variable 'filterNumbers' is set to a function so it does not need '()'
//---- console.log("filterNumbers()", filterNumbers())
//copy paste example below of modifying words in the array
//----the function is putting 'extra' string on all words except for the first, making only 'spray' less than 6 in the .length filter
let words = ["spray", "limit", "exuberant", "destruction", "elite", "present"]

const modifiedWords = words.filter((word, index, arr) => {
	arr[index + 1] += " extra"
	return word.length < 6
})
console.log("modifiedWords", modifiedWords)
console.log("words", words)

let words1 = ["no", "yes", "also", "harsh", "potato"]

let modWords1 = words1.filter((word, index, arr) => {
	return word.length < 5
})
//modief
let modWords2 = words1.filter((word, index, arr) => {
	arr[index + 1] = arr[index + 1] + "poop"
	return word.length < 5
})
console.log("modWords1", modWords1)
console.log("modWords2", modWords2)
console.log("words1", words1)
//test on something noted as common issue
//----'if (colderDays)' evaluates to truthy because an empty array is evaluated
//----'if (colderDays.length)' evalutes to false (assumign there were no sub 20 days)
//----becaues the length of an empty array ===0 aka falsy
const weeklyReadings = [20, 22, 20.5, 30, 21, 21.5, 23]

const colderDays = weeklyReadings.filter((dayTemperature) => {
	return dayTemperature < 20
})

if (colderDays) {
	console.log("Yes, there were colder days last week")
} else {
	console.log("No, there were no colder days")
}
