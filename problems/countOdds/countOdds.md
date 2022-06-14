# Statement
Given two non-negative integers low and high.
Return the count of odd numbers between low and high (inclusive).

Example: 
```
Input: low = 3, high = 7
Output: 3
Explanation: The odd numbers between 3 and 7 are [3,5,7].
```

# Solution
## First solution 
```
export function countOdds(low: number, high: number): number {
  let counter: number = 0;
  for (let currentValue = low; currentValue <= high; currentValue++) {
    if (currentValue % 2 != 0) {
      counter++;
    }
  }
  return counter;
}
```
## Simplest solution
Approach: Total numbers in the range will be (R – L + 1) i.e. N.  

1. If N is even then the count of both odd and even numbers will be N/2.
2. If N is odd: 
    - If L or R is odd, then the count of the odd numbers will be N/2 + 1, and even numbers = N – countofOdd.
    - Else, the count of odd numbers will be N/2 and even numbers = N – countofOdd.

```
export function countOdds(low: number, high: number): number {
  if (low % 2 === 0) low++;
  if (high % 2 === 0) high--;

  return (high - low) / 2 + 1;
}
```

# Tests
```
import { countOdds } from ".";

test("The odd numbers between 3 and 7 should be 3", () => {
  expect(countOdds(3, 7)).toBe(3);
});

test("The odd numbers between 8 and 10 should be 1", () => {
  expect(countOdds(8, 10)).toBe(1);
});
```