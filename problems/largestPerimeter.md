# Statement
Given an integer array nums, return the largest perimeter of a triangle with a non-zero area, formed from three of these lengths. If it is impossible to form any triangle of a non-zero area, return 0.

Example: 
```
Input: nums = [2,1,2]
Output: 5
```

# Solution
## Approach 
A triangle is valid if sum of its two sides is greater than the third side. If three sides are a, b and c, then three conditions should be met. 
```
1. a + b > c 
2. a + c > b 
3. b + c > a 
```

```
function checkValidity(nums: number[]): boolean {
  return nums[0] + nums[1] <= nums[2] ||
    nums[0] + nums[2] <= nums[1] ||
    nums[1] + nums[2] <= nums[0]
    ? false
    : true;
}

export default function largestPerimeter(nums: number[]): number {
  let sortedNums: number[] = nums.sort(function (a, b) {
    return a - b;
  });
  let solution: number = 0;
  let it: number = 0;
  while (it <= sortedNums.length - 3) {
    let current: number[] = [
      sortedNums[it],
      sortedNums[it + 1],
      sortedNums[it + 2],
    ];
    if (checkValidity(current)) {
      let sum: number = current.reduce(function (a, b) {
        return a + b;
      }, 0);
      if (sum > solution) {
        solution = sum;
      }
    }
    it++;
  }
  return solution;
}
```

# Tests
```
import largestPerimeter from ".";

test("largest perimeter of a triangle formed from [2,1,2] must be 5", () => {
  expect(largestPerimeter([2, 1, 2])).toBe(5);
});

test("largest perimeter of a triangle formed from [1,2,1] must be 0", () => {
  expect(largestPerimeter([1, 2, 1])).toBe(0);
});

test("largest perimeter of a triangle formed from [3,2,3,4] must be 10", () => {
  expect(largestPerimeter([3, 2, 3, 4])).toBe(10);
});

test("largest perimeter of a triangle formed from [3,6,2,3] must be 8", () => {
  expect(largestPerimeter([3, 6, 2, 3])).toBe(8);
});

test("largest perimeter of a triangle formed from [1,2,2,4,18,8] must be 5", () => {
  expect(largestPerimeter([1, 2, 2, 4, 18, 8])).toBe(5);
});
```