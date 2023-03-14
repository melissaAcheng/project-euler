// 17. Number letter counts
// If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

// If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?

// NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.

function numberLetterCounts(limit) {
	let totalSum = 0;

	// iterate through numbers from 1 to limit
	for (let i = 1; i <= limit; i++) {
		let arr = numToArr(i); // converts number to 4 digit array
		totalSum += numToLetters(arr); // calculates count of letters in number
	}

	return totalSum;
}

// converts number to 4 digit array
function numToArr(num) {
	let array = Array(4).fill(0);
	let numArr = num.toString().split("");
	let end = 3;
	for (let i = numArr.length - 1; i >= 0; i--) {
		array[end] = Number(numArr[i]);
		end -= 1;
	}
	return array;
}

// calculates letter count in number
function numToLetters(numArr) {
	const NUMS = [
		0, // 'zero'
		3, //'one'
		3, // 'two'
		5, //'three'
		4, //'four'
		4, //'five',
		3, //'six',
		5, //'seven',
		5, //'eight',
		4, //'nine',
		3, //'ten',
		6, //'eleven',
		6, //'twelve',
		8, //'thirteen',
		8, //'fourteen',
		7, //'fifteen',
		7, // 'sixteen',
		9, //'seventeen',
		8, //'eighteen',
		8, //'nineteen'
	];

	const TENSPLACE = [
		0, // zero
		0, // ten - included in NUMS
		6, // twenty
		6, // thirty
		5, // forty
		5, // fifty
		5, // sixty
		7, // seventy
		6, // eighty
		6, // ninety
	];

	const HUNDRED = 7;
	const THOUSAND = 8;
	const AND = 3;

	// destructure number array
	const [thousands, hundreds, tens, ones] = numArr;
	let thousandSum = thousands === 0 ? 0 : NUMS[thousands] + THOUSAND;
	let hundredSum = hundreds === 0 ? 0 : NUMS[hundreds] + HUNDRED;
	if (hundreds !== 0) {
		if ((hundreds * 100 + tens * 10 + ones) % 100 !== 0) hundredSum += AND;
	}

	let tensSum = tens * 10 + ones < 20 ? NUMS[tens * 10 + ones] : TENSPLACE[tens] + NUMS[ones];

	return thousandSum + hundredSum + tensSum;
}

console.log(numberLetterCounts(1000));
