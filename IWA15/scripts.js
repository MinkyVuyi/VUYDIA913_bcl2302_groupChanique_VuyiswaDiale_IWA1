const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below

const result = []

const extractBiggest = () => {
	let max = Number.MIN_VALUE;
	let maxIndex;
	for (let i = 0; i < data.lists.length; i++) {
		const list = data.lists[i][1];
		if (list.length > 0 && list[list.length - 1] > max) {
			max = list[list.length - 1];
			maxIndex = i;
		}
	}
	if (maxIndex !== undefined) {
		const [, list] = data.lists[maxIndex];
		list.pop();
		result.push(max);
	}
}

// Only edit above

for (let i = 0; i < 15; i++) {
	extractBiggest();
}

console.log(result);
