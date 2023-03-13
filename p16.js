// 16. Power digit sum
// 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

// What is the sum of the digits of the number 2^1000?

function powerDigitSum(exponent) {
	const number = BigInt(Math.pow(2, exponent));
	const sumOfDigits = number
		.toString()
		.split("")
		.reduce((total, num) => (total += Number(num)), 0);

	return sumOfDigits;
}

console.log(powerDigitSum(1000));
