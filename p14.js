// 14. Longest Collatz sequence

function longestCollatzSequence(limit) {
	let longestLength = 0;
	let resultNum = limit;

	for (let i = limit; i > 0; i--) {
		let length = collatzSeq(i);
		if (length > longestLength) {
			longestLength = length;
			resultNum = i;
		}
	}

	return resultNum;
}

function collatzSeq(n) {
	let count = 1;
	if (n === 1) return 1;

	while (n > 1) {
		if (n % 2 === 0) {
			n = n / 2;
		} else {
			n = 3 * n + 1;
		}
		count += 1;
	}

	return count;
}

// console.log(collatzSeq(9));
console.log(longestCollatzSequence(1000000));
