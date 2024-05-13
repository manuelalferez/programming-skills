# Statement
## Score After Flipping Matrix

You are given an m x n binary matrix grid.

A move consists of choosing any row or column and toggling each value in that row or column (i.e., changing all 0's to 1's, and all 1's to 0's).

Every row of the matrix is interpreted as a binary number, and the score of the matrix is the sum of these numbers.

Return the highest possible score after making any number of moves (including zero moves).

 

Example 1:

![](https://assets.leetcode.com/uploads/2021/07/23/lc-toogle1.jpg)

Input: grid = [[0,0,1,1],[1,0,1,0],[1,1,0,0]]
Output: 39
Explanation: 0b1111 + 0b1001 + 0b1111 = 15 + 9 + 15 = 39
Example 2:

Input: grid = [[0]]
Output: 1
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 20
grid[i][j] is either 0 or 1.

# Solution 
```ts
export default function getMaxScore(grid: number[][]) {
  invertRows(grid);
  invertColumns(grid);
  const score = calculateScore(grid);
  return score;
}

function invertRows(grid: number[][]) {
  const rows = grid.length;
  for (let r = 0; r < rows; r++) {
    if (grid[r][0] === 0) {
      grid[r] = invertRow(grid[r]);
    }
  }
}

function invertColumns(grid: number[][]) {
  const rows = grid.length;
  const cols = grid[0].length;
  for (let c = 0; c < cols; c++) {
    let zerosCount = 0;
    for (let r = 0; r < rows; r++) {
      if (grid[r][c] === 0) zerosCount++;
    }
    if (zerosCount >= Math.ceil(grid.length / 2)) {
      invertCol(grid, c);
    }
  }
}

function invertBit(bit: number): number {
  return bit === 0 ? 1 : 0;
}

function invertRow(arr: number[]): number[] {
  return arr.map((ele) => invertBit(ele));
}

function invertCol(grid: number[][], col: number): void {
  for (let i = 0; i < grid.length; i++) {
    grid[i][col] = invertBit(grid[i][col]);
  }
}

function calculateScore(grid: number[][]): number {
  const score = grid.reduce(
    (prev, current) => prev + parseInt(current.join(""), 2),
    0
  );
  return score;
}
```

# Tests
```ts
import getMaxScore from ".";

test("maxScore of [[0,0,1,1],[1,0,1,0],[1,1,0,0]] must be 39", () => {
  expect(
    getMaxScore([
      [0, 0, 1, 1],
      [1, 0, 1, 0],
      [1, 1, 0, 0],
    ])
  ).toBe(39);
});

test("maxScore of [[0]] must be 1", () => {
  expect(getMaxScore([[0]])).toBe(1);
});

```