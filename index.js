

// 2. Even Fibonacci numbers
// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

function fiboEvenSum(n) {
	let sum = 2;
	let num1 = 1;
	let num2 = 2;

	while (num1 + num2 <= n) {
		let num3 = num1 + num2;
		if (num3 % 2 === 0) {
			sum += num3;
		}
		num1 = num2;
		num2 = num3;
	}
	return sum;
}

// console.log(fiboEvenSum(4000000));

// 3. Largest Prime factor
// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

function largestPrimeFactor(number) {
	let prime = 2;
	let max = 0;

	while (prime <= number) {
		if (number % prime === 0) {
			max = prime;
			number = number / prime;
		} else {
			prime += 1;
		}
	}

	return max;
}

// console.log(largestPrimeFactor(600851475143));

// Steps:
// Start prime equal to the smallest prime number
// Start a while loop - stop when number / prime is 1 (so while prime <= number)
// if prime is a factor of number, update max to prime and set number to number / prime
// else increment prime by 1

// 4. Largest Palindrome Product

function largestPalindromeProduct(n) {
	// let num = 9;
	// for (let i = 1; i < n; i++) {
	// 	num += "9";
	// }
	const num = Array(n).fill(9).join("");

	let largest = -Infinity;

	for (let i = num; i > 0; i--) {
		for (let j = num; j > 0; j--) {
			const product = i * j;
			if (isPalindrome(product) === true) {
				largest = Math.max(largest, product);
			}
		}
	}
	return largest;
}

function isPalindrome(n) {
	n = String(n);
	let l = 0;
	let r = n.length - 1;

	while (l <= r) {
		if (n[l] !== n[r]) {
			return false;
		} else {
			l += 1;
			r -= 1;
		}
	}
	return true;
}

// console.log(largestPalindromeProduct(4));

// 5. Smallest multiple

function smallestMult(n) {
	let num = n;
	let found = false;
	// console.log(num);

	while (!found) {
		if (isDivisible(num, n) === true) {
			found = true;
		} else {
			num += 1;
		}
	}
	// console.log(num)
	return num;
}

function isDivisible(num, n) {
	for (let i = 1; i <= n; i++) {
		if (num % i !== 0) {
			return false;
		}
	}
	return true;
}

// console.log(smallestMult(20));

// 6. Sum Square Difference
function sumSquareDifference(n) {
	let sumSquare = 0;
	let sum = 0;
	for (let i = 1; i <= n; i++) {
		sumSquare += i * i;
		sum += i;
	}

	return sum * sum - sumSquare;
}

// console.log(sumSquareDifference(100));

// using formulas (no looping)
function squareDiff(n) {
	return squareOfSum(n) - sumOfSquares(n);
}

function squareOfSum(n) {
	const sum = (n * (n + 1)) / 2;
	return Math.pow(sum, 2);
}

function sumOfSquares(n) {
	return (n * (n + 1) * (2 * n + 1)) / 6;
}

// console.log(squareDiff(100));

// 7. 10001st prime

function nthPrime(n) {
	const primes = [2];
	let num = 3;

	while (primes.length < n) {
		if (isPrime(n)) {
			primes.push(n);
		}
		num += 2;
	}

	return primes.pop();
}

function isPrime(num) {
	if (num === 3) return true;
	if (num % 2 === 0 || num % 3 === 0) return false;
	for (let i = 5; i <= Math.sqrt(num); i += 6) {
		if (num % i === 0 || num % (i + 2) === 0) return false;
	}
	return true;
}

// for finding all prime numbers up to any given limit
function sieveOfEratosthenes(n) {
	let output = [];
	let array = Array(n).fill(true);

	for (let i = 2; i <= Math.sqrt(n); i++) {
		if (array[i] === true) {
			for (let j = i * i; j <= n; j += i) {
				array[j] = false;
			}
		}
	}
	for (let i = 2; i <= n; i++) {
		if (array[i] === true) {
			output.push(i);
		}
	}
	return output;
}

// console.log(sieveOfEratosthenes(10));

// console.log(isPrime(51));
// console.log(nthPrime(6));

// 8. Largest Product in a Series

let thousandDigits = [
	7, 3, 1, 6, 7, 1, 7, 6, 5, 3, 1, 3, 3, 0, 6, 2, 4, 9, 1, 9, 2, 2, 5, 1, 1, 9, 6, 7, 4, 4, 2, 6, 5, 7, 4, 7, 4, 2, 3,
	5, 5, 3, 4, 9, 1, 9, 4, 9, 3, 4, 9, 6, 9, 8, 3, 5, 2, 0, 3, 1, 2, 7, 7, 4, 5, 0, 6, 3, 2, 6, 2, 3, 9, 5, 7, 8, 3, 1,
	8, 0, 1, 6, 9, 8, 4, 8, 0, 1, 8, 6, 9, 4, 7, 8, 8, 5, 1, 8, 4, 3, 8, 5, 8, 6, 1, 5, 6, 0, 7, 8, 9, 1, 1, 2, 9, 4, 9,
	4, 9, 5, 4, 5, 9, 5, 0, 1, 7, 3, 7, 9, 5, 8, 3, 3, 1, 9, 5, 2, 8, 5, 3, 2, 0, 8, 8, 0, 5, 5, 1, 1, 1, 2, 5, 4, 0, 6,
	9, 8, 7, 4, 7, 1, 5, 8, 5, 2, 3, 8, 6, 3, 0, 5, 0, 7, 1, 5, 6, 9, 3, 2, 9, 0, 9, 6, 3, 2, 9, 5, 2, 2, 7, 4, 4, 3, 0,
	4, 3, 5, 5, 7, 6, 6, 8, 9, 6, 6, 4, 8, 9, 5, 0, 4, 4, 5, 2, 4, 4, 5, 2, 3, 1, 6, 1, 7, 3, 1, 8, 5, 6, 4, 0, 3, 0, 9,
	8, 7, 1, 1, 1, 2, 1, 7, 2, 2, 3, 8, 3, 1, 1, 3, 6, 2, 2, 2, 9, 8, 9, 3, 4, 2, 3, 3, 8, 0, 3, 0, 8, 1, 3, 5, 3, 3, 6,
	2, 7, 6, 6, 1, 4, 2, 8, 2, 8, 0, 6, 4, 4, 4, 4, 8, 6, 6, 4, 5, 2, 3, 8, 7, 4, 9, 3, 0, 3, 5, 8, 9, 0, 7, 2, 9, 6, 2,
	9, 0, 4, 9, 1, 5, 6, 0, 4, 4, 0, 7, 7, 2, 3, 9, 0, 7, 1, 3, 8, 1, 0, 5, 1, 5, 8, 5, 9, 3, 0, 7, 9, 6, 0, 8, 6, 6, 7,
	0, 1, 7, 2, 4, 2, 7, 1, 2, 1, 8, 8, 3, 9, 9, 8, 7, 9, 7, 9, 0, 8, 7, 9, 2, 2, 7, 4, 9, 2, 1, 9, 0, 1, 6, 9, 9, 7, 2,
	0, 8, 8, 8, 0, 9, 3, 7, 7, 6, 6, 5, 7, 2, 7, 3, 3, 3, 0, 0, 1, 0, 5, 3, 3, 6, 7, 8, 8, 1, 2, 2, 0, 2, 3, 5, 4, 2, 1,
	8, 0, 9, 7, 5, 1, 2, 5, 4, 5, 4, 0, 5, 9, 4, 7, 5, 2, 2, 4, 3, 5, 2, 5, 8, 4, 9, 0, 7, 7, 1, 1, 6, 7, 0, 5, 5, 6, 0,
	1, 3, 6, 0, 4, 8, 3, 9, 5, 8, 6, 4, 4, 6, 7, 0, 6, 3, 2, 4, 4, 1, 5, 7, 2, 2, 1, 5, 5, 3, 9, 7, 5, 3, 6, 9, 7, 8, 1,
	7, 9, 7, 7, 8, 4, 6, 1, 7, 4, 0, 6, 4, 9, 5, 5, 1, 4, 9, 2, 9, 0, 8, 6, 2, 5, 6, 9, 3, 2, 1, 9, 7, 8, 4, 6, 8, 6, 2,
	2, 4, 8, 2, 8, 3, 9, 7, 2, 2, 4, 1, 3, 7, 5, 6, 5, 7, 0, 5, 6, 0, 5, 7, 4, 9, 0, 2, 6, 1, 4, 0, 7, 9, 7, 2, 9, 6, 8,
	6, 5, 2, 4, 1, 4, 5, 3, 5, 1, 0, 0, 4, 7, 4, 8, 2, 1, 6, 6, 3, 7, 0, 4, 8, 4, 4, 0, 3, 1, 9, 9, 8, 9, 0, 0, 0, 8, 8,
	9, 5, 2, 4, 3, 4, 5, 0, 6, 5, 8, 5, 4, 1, 2, 2, 7, 5, 8, 8, 6, 6, 6, 8, 8, 1, 1, 6, 4, 2, 7, 1, 7, 1, 4, 7, 9, 9, 2,
	4, 4, 4, 2, 9, 2, 8, 2, 3, 0, 8, 6, 3, 4, 6, 5, 6, 7, 4, 8, 1, 3, 9, 1, 9, 1, 2, 3, 1, 6, 2, 8, 2, 4, 5, 8, 6, 1, 7,
	8, 6, 6, 4, 5, 8, 3, 5, 9, 1, 2, 4, 5, 6, 6, 5, 2, 9, 4, 7, 6, 5, 4, 5, 6, 8, 2, 8, 4, 8, 9, 1, 2, 8, 8, 3, 1, 4, 2,
	6, 0, 7, 6, 9, 0, 0, 4, 2, 2, 4, 2, 1, 9, 0, 2, 2, 6, 7, 1, 0, 5, 5, 6, 2, 6, 3, 2, 1, 1, 1, 1, 1, 0, 9, 3, 7, 0, 5,
	4, 4, 2, 1, 7, 5, 0, 6, 9, 4, 1, 6, 5, 8, 9, 6, 0, 4, 0, 8, 0, 7, 1, 9, 8, 4, 0, 3, 8, 5, 0, 9, 6, 2, 4, 5, 5, 4, 4,
	4, 3, 6, 2, 9, 8, 1, 2, 3, 0, 9, 8, 7, 8, 7, 9, 9, 2, 7, 2, 4, 4, 2, 8, 4, 9, 0, 9, 1, 8, 8, 8, 4, 5, 8, 0, 1, 5, 6,
	1, 6, 6, 0, 9, 7, 9, 1, 9, 1, 3, 3, 8, 7, 5, 4, 9, 9, 2, 0, 0, 5, 2, 4, 0, 6, 3, 6, 8, 9, 9, 1, 2, 5, 6, 0, 7, 1, 7,
	6, 0, 6, 0, 5, 8, 8, 6, 1, 1, 6, 4, 6, 7, 1, 0, 9, 4, 0, 5, 0, 7, 7, 5, 4, 1, 0, 0, 2, 2, 5, 6, 9, 8, 3, 1, 5, 5, 2,
	0, 0, 0, 5, 5, 9, 3, 5, 7, 2, 9, 7, 2, 5, 7, 1, 6, 3, 6, 2, 6, 9, 5, 6, 1, 8, 8, 2, 6, 7, 0, 4, 2, 8, 2, 5, 2, 4, 8,
	3, 6, 0, 0, 8, 2, 3, 2, 5, 7, 5, 3, 0, 4, 2, 0, 7, 5, 2, 9, 6, 3, 4, 5, 0,
];

function largestProductinaSeries(arr, n) {
	let l = 0;
	let maxProduct = 0;

	for (let r = n - 1; r < arr.length; r++) {
		let array = arr.slice(l, r + 1);
		let product = array.reduce((a, b) => a * b);
		maxProduct = Math.max(maxProduct, product);
		l += 1;
	}

	return maxProduct;
}

// console.log(largestProductinaSeries(thousandDigits, 13));

// 9. Special Pythagorean triplet

function specialPythagoreanTriplet(n) {
	// a < b < c
	// a^2 + b^2 = c^2
	for (let b = 1; b <= n; b++) {
		for (let a = 2; a < b; a++) {
			let c = Math.sqrt(Math.pow(b, 2) + Math.pow(a, 2));
			if (a + b + c === n) return a * b * c;
		}
	}
}

// console.log(specialPythagoreanTriplet(1000));

// 10. Summation of primes

function summationOfPrimes(n) {
	const primes = sieveOfEratosthenes(n);
	return primes.reduce((a, b) => a + b);
}

// console.log(summationOfPrimes(2000000));

// 11. Largest product in a grid

function largestGridProduct(arr) {
	let maxProduct = 0;
	let currProduct = 0;

	// navigate the coordinates
	for (let r = 0; r < arr.length; r++) {
		for (let c = 0; c < arr[r].length; c++) {
			const limit = arr[r].length - 3;

			// check horizontal -
			if (c < limit) {
				currProduct = arr[r][c] * arr[r][c + 1] * arr[r][c + 2] * arr[r][c + 3];
				maxProduct = Math.max(maxProduct, currProduct);
			}

			// check vertical |
			if (r < limit) {
				currProduct = arr[r][c] * arr[r + 1][c] * arr[r + 2][c] * arr[r + 3][c];
				maxProduct = Math.max(maxProduct, currProduct);
			}

			// check diagonal /
			if (r < limit && c > 3) {
				currProduct = arr[r][c] * arr[r + 1][c - 1] * arr[r + 2][c - 2] * arr[r + 3][c - 3];
				maxProduct = Math.max(maxProduct, currProduct);
			}

			// check diagonal \
			if (r < limit && c < limit) {
				currProduct = arr[r][c] * arr[r + 1][c + 1] * arr[r + 2][c + 2] * arr[r + 3][c + 3];
				maxProduct = Math.max(maxProduct, currProduct);
			}
		}
	}

	return maxProduct;
}

const grid = [
	[40, 17, 81, 18, 57],
	[74, 4, 36, 16, 29],
	[36, 42, 69, 73, 45],
	[51, 54, 69, 16, 92],
	[7, 97, 57, 32, 16],
];

// console.log(largestGridProduct(grid));

// 12. Highly divisible triangular number

function divisibleTriangularNum(n) {
	// returns the trianglular number with at least n factors
	let trianglularNum = 1;
	let num = 1;

	while (true) {
		if (numOfFactors(trianglularNum) >= n) {
			return trianglularNum;
		}
		num += 1;
		trianglularNum += num;
	}
}

function numOfFactors(n) {
	let count = 0;
	for (let i = 1; i <= Math.sqrt(n); i++) {
		if (n % i === 0) count += 2;
	}
	return count;
}

// console.log(numOfFactors(28));
// console.log(divisibleTriangularNum(500));

// 13. Large sum

function largeSum(arr) {
  let sum = arr.reduce((a, b))
}
