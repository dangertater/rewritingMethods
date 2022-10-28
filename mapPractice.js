//MAP
let map1 = new Map()
map1.set("alligator", 1)
map1.set("bananas", 2)
map1.set("carnivores", 3)

console.log('map1.get("alligator")', map1.get("alligator"))
console.log("map1.size", map1.size)
console.log("map1.delete(2)", map1.delete(2))
console.log("map1.size", map1.size)
console.log("map1.delete(bananas)", map1.delete("bananas"))
console.log("map1.size", map1.size)
map1.set("bananas", 2)
console.log('map1.set("bananas", 2) on above line', "map1.size", map1.size)
map1.clear()
console.log("map1.clear() on above line", "map1", map1)
map1.set("a", 1)
map1.set("b", 2)
map1.set("c", 3)
console.log("map1 line 20", map1)
map1.delete()
console.log(map1)
console.log(map1.has(1))
console.log(map1.has("a"))
//map iterator below, seems difficultish, make each key value pair their own array I believe
console.log(map1)
let iterator1 = map1[Symbol.iterator]()
for (let item of iterator1) {
	console.log(item)
}
console.log("//map1.keys()//", map1.keys())
console.log("//map1.values()//", map1.values())
console.log("//map1.entries()//", map1.entries())
//--forEach is funny
let addLetterZString = (value, key) => {
	console.log(`Z${value} and Z${key}`)
}
map1.forEach(addLetterZString)
//--for each with 'map' argument added
let addLetterXString = (value, key, map) => {
	console.log(`X${value} and X${key} and X${map}`)
}
map1.forEach(addLetterXString)
//--example below of why to use a third argument, q4e - this third argument seems nieche, am moving on without really getting it unless its important
//-----"The third argument can be useful when you are chaining several array methods and need to access the
//-----intermediate state of the array (result of the previous operation):--
const source = [-3, -2, -1, 0, 1, 2, 3, 4, 5]
source
	.filter((n) => n >= 0)
	.map((n, index, arr) => {
		// arr contains only non-negative numbers
		// here you may have some logic that rely on it
		return n
	})
