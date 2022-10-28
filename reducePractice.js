//reduce has contention because it can make code difficult to understand
let numbers = [2, 3, 4, 5, 6]
let initialValCrazyDifficultMath = 1 + 1
let reducePractice = numbers.reduce(
	(prevValue, currentValue) => prevValue + currentValue,
	initialValCrazyDifficultMath
)
let reducePracticeNoInitialValue = numbers.reduce(
	(prevValue, currentValue) => prevValue + currentValue
)
console.log("reducePractice", reducePractice)
//without initial value included it uses index 0 instead
console.log("reducePracticeNoInitialValue", reducePracticeNoInitialValue)

//notice there are no {}'s in calling .reduce or else it returns undefined
let reducePracticeBadExample = numbers.reduce((prevValue, currentValue) => {
	prevValue + currentValue, initialValCrazyDifficultMath
})

console.log("reducePracticeBadExample", reducePracticeBadExample)

//reduce can have several different syntax's with different arguments and argument placements
//----reduce((previousValue, currentValue, currentIndex, array) => { /* … */ } ) is the tip of the iceberg
//----check otu the mdn if needed
