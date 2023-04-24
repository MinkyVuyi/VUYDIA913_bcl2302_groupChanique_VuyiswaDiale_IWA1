const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below

// Accessing the 3 lists of numbers from the data object
const { first = [1] } = data.lists[0] || {}
const { second = [1] } = data.lists[1] || {}
const { third = [1] } = data.lists[2] || {}

// Defining a function to extract the biggest number from the 3 lists
const extractBiggest = () => {
  // Comparing the last element of the first list with the last element of the second list
  if (first[first.length - 1] > second[second.length - 1]) {
    return first // If the last element of the 1st list is greater, return the 1st list
  }
  // If the last element of the 2nd list is greater, or they are equal
  // We compare the 3rd list with the second list
  if (third.length < 1) {
    return second // If the 3rd list is empty, return the 2nd list
  }

  return third // Otherwise, return the third list
}

// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)
