# Statement
Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

Note:

- Note that in some languages, such as Java, there is no unsigned integer type. In this case, the input will be given as a signed integer type. It should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
- In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 3, the input represents the signed integer. -3.

Example: 
```
Input: n = 00000000000000000000000000001011
Output: 3
Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.
```

# Solution
## First solution 
```
export default function hammingWeight(n: number): number {
  let x = n.toString(2);
  let counter = 0;
  for (let index = 0; index < x.length; index++) {
    if (x[index] == "1") counter++;
  }
  return counter;
}
```

## Shortest solution 
```
export default function hammingWeight(n: number): number {
  return Array.from(n.toString(2)).filter((ele) => ele === "1").length;
}
```

# Tests
```
import hammingWeight from ".";

test("The input binary string 00000000000000000000000000001011 must return 3", () => {
  expect(hammingWeight(0b1011)).toBe(3);
});

test("The input binary string 00000000000000000000000010000000 must return 1", () => {
  expect(hammingWeight(0b10000000)).toBe(1);
});

test("The input binary string 11111111111111111111111111111101 must return 31", () => {
  expect(hammingWeight(0b11111111111111111111111111111101)).toBe(31);
});
```
