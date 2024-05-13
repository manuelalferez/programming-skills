# Statement
You are given two integers, x and y, which represent your current location on a Cartesian grid: (x, y). You are also given an array points where each points[i] = [ai, bi] represents that a point exists at (ai, bi). A point is valid if it shares the same x-coordinate or the same y-coordinate as your location.

Return the index (0-indexed) of the valid point with the smallest Manhattan distance from your current location. If there are multiple, return the valid point with the smallest index. If there are no valid points, return -1.

The Manhattan distance between two points (x1, y1) and (x2, y2) is abs(x1 - x2) + abs(y1 - y2).

Example 1: 
```
Input: x = 3, y = 4, points = [[1,2],[3,1],[2,4],[2,3],[4,4]]
Output: 2
Explanation: Of all the points, only [3,1], [2,4] and [4,4] are valid. Of the valid points, [2,4] and [4,4] have the smallest Manhattan distance from your current location, with a distance of 1. [2,4] has the smallest index, so return 2.
```

Example 2:
```
Input: x = 3, y = 4, points = [[3,4]]
Output: 0
Explanation: The answer is allowed to be on the same location as your current location.
```

Example 3:
```
Input: x = 3, y = 4, points = [[2,3]]
Output: -1
Explanation: There are no valid points.
```

# Solution
## First solution 

```
function checkValidity(currentLocation: number[], point: number[]): boolean {
  return currentLocation[0] === point[0] || currentLocation[1] === point[1];
}

function calculateManhattanDistance(
  currentLocation: number[],
  point: number[]
): number {
  return (
    Math.abs(currentLocation[0] - point[0]) +
    Math.abs(currentLocation[1] - point[1])
  );
}

export default function nearestValidPoint(
  x: number,
  y: number,
  points: number[][]
): number {
  let smallestManhattanDistance: number = Number.MAX_VALUE;
  let solution: number = -1;

  points.forEach((element, index) => {
    if (checkValidity([x, y], element)) {
      let manhattanDistance: number = calculateManhattanDistance(
        [x, y],
        element
      );
      if (manhattanDistance < smallestManhattanDistance) {
        smallestManhattanDistance = manhattanDistance;
        solution = index;
      }
    }
  });
  return solution;
}
```

## Shortest solution
```
export default function nearestValidPoint(
  x: number,
  y: number,
  points: number[][]
): number {
  let smallestManhattanDistance: number = Number.MAX_VALUE;
  let solution: number = -1;

  points.forEach((element, index) => {
    if (x === element[0] || y === element[1]) {
      let manhattanDistance: number =
        Math.abs(x - element[0]) + Math.abs(y - element[1]);
      if (manhattanDistance < smallestManhattanDistance) {
        smallestManhattanDistance = manhattanDistance;
        solution = index;
      }
    }
  });
  return solution;
}
```

# Tests
```
import nearestValidPoint from ".";

test("x = 3, y = 4, points = [[1,2],[3,1],[2,4],[2,3],[4,4]] the point with the smallest Manhattan distance must be index=2", () => {
  expect(
    nearestValidPoint(3, 4, [
      [1, 2],
      [3, 1],
      [2, 4],
      [2, 3],
      [4, 4],
    ])
  ).toBe(2);
});

test("x = 3, y = 4, points = [[3,4]] the point with the smallest Manhattan distance must be index=0", () => {
  expect(nearestValidPoint(3, 4, [[3, 4]])).toBe(0);
});

test("x = 3, y = 4, points = [[2,3]] the point with the smallest Manhattan distance must be index=-1", () => {
  expect(nearestValidPoint(3, 4, [[2, 3]])).toBe(-1);
});
```