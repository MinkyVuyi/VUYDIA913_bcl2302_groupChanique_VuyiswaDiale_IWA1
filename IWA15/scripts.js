const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below
const firstArr = data.lists[0][1];
const secondArr = data.lists[1][1];
const thirdArr = data.lists[2][1];

const result = [];

const extractBiggest = () => {
	if (firstArr.length === 0) {
	  return secondArr.length === 0 ? thirdArr.pop() : secondArr.pop();
	}
  
	if (secondArr.length === 0) {
	  return firstArr.length === 0 ? thirdArr.pop() : firstArr.pop();
	}
  
	if (thirdArr.length === 0) {
	  return firstArr.length === 0 ? secondArr.pop() : firstArr.pop();
	}
  
	if (firstArr[firstArr.length - 1] >= secondArr[secondArr.length - 1] && firstArr[firstArr.length - 1] >= thirdArr[thirdArr.length - 1]) {
	  return firstArr.pop();
	}
  
	if (secondArr[secondArr.length - 1] >= thirdArr[thirdArr.length - 1] && secondArr[secondArr.length - 1] >= firstArr[firstArr.length - 1]) {
	  return secondArr.pop();
	}
  
	return thirdArr.pop();
  };

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
