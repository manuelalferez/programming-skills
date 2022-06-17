# Statement
There is a function signFunc(x) that returns:

1 if x is positive.
-1 if x is negative.
0 if x is equal to 0.
You are given an integer array nums. Let product be the product of all values in the array nums.

Return signFunc(product).

Example 1:
```
Input: nums = [-1,-2,-3,-4,3,2,1]
Output: 1
Explanation: The product of all values in the array is 144, and signFunc(144) = 1
```

Example 2: 
```
Input: nums = [1,5,0,2,-3]
Output: 0
Explanation: The product of all values in the array is 0, and signFunc(0) = 0
```

# Solution
## Approach 
If you try to calculate the product of all the elements of the array you will encounter the problem of getting values that exceed the limits, resulting in a NaN. 

A better solution is to count the number of negative numbers, and thus know if the number obtained is positive or negative at the end of the whole process; we know that 18 negative values % 2 = 0, the value is positive. 

```
export default function arraySign(nums: number[]): number {
  let countNeg: number = 0;
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] == 0) return 0;
    if (nums[index] < 0) countNeg += 1;
  }
  return countNeg % 2 == 0 ? 1 : -1;
}
```

# Tests
```
import arraySign from ".";

test("if nums = [-1,-2,-3,-4,3,2,1] must return 1", () => {
  expect(arraySign([-1, -2, -3, -4, 3, 2, 1])).toBe(1);
});

test("if nums = [1,5,0,2,-3] must return 0", () => {
  expect(arraySign([1, 5, 0, 2, -3])).toBe(0);
});

test("if nums = [-1,1,-1,1,-1] must return -1", () => {
  expect(arraySign([-1, 1, -1, 1, -1])).toBe(-1);
});
test("if nums = [1,28,-91,-62,-36,-1,..] must return -1", () => {
  expect(
    arraySign([
      1, 28, -91, -62, -36, -1, -84, -90, -92, 61, 6, -58, -60, 2, 51, -15, -18,
      -81, 87, 84, 100, -84, -13, -87, -33, 72, -72, -59, -79, 28, -69, -97,
      -93, 17, 67, 11, -12, 19, 5, 42, -85, 71, -77, -82, 26, -58, -51, -14, 63,
      -85, -86, 66, 47, 57, -86, -25, -75, 59, -17, -71, 89, -78, -42, 30, 39,
      61, -96, -30, -29, -92, -90, 69, 20, 65, 32, 92, 44, -71, -18, 87, -86,
      23, -96, -21, -49, -96, -98, 35, -11, -1, 81, -48, 68, 5, 75, 57, -30, -7,
      32, 86, -29, -86, -61, 45, -31, -93, -26, -9, 86, 57, -52, 75, 68, -58,
      14, 27, -94, 47, -38, -44, 75, -83, 21, -83, 43, 62, 74, 97, 78, 43, 54,
      28, 64, -19, -89, 88, 68, 18, -96, -83, -25, -71, 88, -84, -24, -61, 72,
      -90, -56, 29, 46, 56, 51, 16, 66, -2, 65, -95, 16, 51, 42, 61, 99, 89,
      -93, 59, -99, 69, 26, -61, 21, 41, 40, -4, -49, 3, -96, 57, 65, 72, -41,
      -77, -4, 61, 71, -88, 21, -95, 38, 64, 92, 0, -63,
    ])
  ).toBe(0);
});
```