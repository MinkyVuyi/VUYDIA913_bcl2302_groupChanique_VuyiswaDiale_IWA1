const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below

const result = []; // Initialize an empty array to store results

const extractBiggest = () => { // Define a function named `extractBiggest`
  let max = Number.MIN_VALUE; // Initialize a variable `max` with the smallest possible value
  let maxIndex; // Initialize a variable `maxIndex` to store the index of the list with the biggest value
  for (let i = 0; i < data.lists.length; i++) { // Loop through each list in the `data.lists` array
    const list = data.lists[i][1]; // Get the list at the current index, which is the second element in the inner array
    if (list.length > 0 && list[list.length - 1] > max) { // Check if the current list is not empty and its last element is greater than `max`
      max = list[list.length - 1]; // Update `max` with the value of the last element of the current list
      maxIndex = i; // Update `maxIndex` with the current index
    }
  }
  if (maxIndex !== undefined) { // Check if `maxIndex` is defined, indicating a list with a bigger value was found
    const [, list] = data.lists[maxIndex]; // Destructure the inner array at the `maxIndex` to get the list
    list.pop(); // Remove the last element from the list
    result.push(max); // Push the value of `max` into the `result` array
  }
}

// Only edit above

for (let i = 0; i < 15; i++) {
	extractBiggest();
}

console.log(result);
