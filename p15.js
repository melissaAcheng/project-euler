// 15. Lattice paths

// Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

// How many such routes are there through a 20×20 grid?

function latticePaths(gridSize, r = 0, c = 0, memo = {}) {
	// use DFS/recursion to track from top left corner to bottom right corner
	const pos = r + "," + c;
	if (pos in memo) return memo[pos];

	if (r === gridSize && c === gridSize) return 1; // if grid coordinates are (2, 2) then add one to count
	if (r > gridSize || c > gridSize) return 0; // if grid coordinates are out of bounds

	memo[pos] = latticePaths(gridSize, r + 1, c, memo) + latticePaths(gridSize, r, c + 1, memo); // add up moves to the right and down

	return memo[pos];
}

console.log(latticePaths(20));
