# Statement
Given an integer number n, return the difference between the product of its digits and the sum of its digits.

Example: 
```
Input: n = 234
Output: 15 
Explanation: 
Product of digits = 2 * 3 * 4 = 24 
Sum of digits = 2 + 3 + 4 = 9 
Result = 24 - 9 = 15
```

# Solution
```
export default function subtractProductAndSum(n: number): number {
  let digits: string[] = n.toString().split("");
  let sum: number = 0,
    product: number = 1;
  digits.forEach((value) => {
    sum += parseInt(value);
    product *= parseInt(value);
  });
  return product - sum;
}
```

# Tests
```
import subtractProductAndSum from ".";

test(" the difference between the product and the sum of 234 must be 15", () => {
  expect(subtractProductAndSum(234)).toBe(15);
});

test(" the difference between the product and the sum of 4421 must be 21", () => {
  expect(subtractProductAndSum(4421)).toBe(21);
});
```