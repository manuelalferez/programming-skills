# Statement 
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

![](https://assets.leetcode.com/uploads/2022/03/15/1200px-telephone-keypad2svg.png)

Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

Example 2:

Input: digits = ""
Output: []

Example 3:

Input: digits = "2"
Output: ["a","b","c"]
 
Constraints:

0 <= digits.length <= 4
digits[i] is a digit in the range ['2', '9'].

# Solution 
```ts
const phoneLetters: { [key: string]: string[] } = {
  "2": ["a", "b", "c"],
  "3": ["d", "e", "f"],
  "4": ["g", "h", "i"],
  "5": ["j", "k", "l"],
  "6": ["m", "n", "o"],
  "7": ["p", "q", "r", "s"],
  "8": ["t", "u", "v"],
  "9": ["w", "x", "y", "z"],
};

export default function letterCombinations(digits: string): string[] {
  const digitSplitted = digits.split("");
  let result = phoneLetters[digitSplitted[0]] || [];

  for (let i = 1; i < digitSplitted.length; i++) {
    const digit = digitSplitted[i];
    const letters = phoneLetters[digit] || [];
    const temp: string[] = [];

    for (const combination of result) {
      for (const letter of letters) {
        temp.push(combination + letter);
      }
    }
    result = temp;
  }
  return result;
}
```

# Tests
```ts
import letterCombinations from ".";

test("23 must be [ad,ae,af,bd,be,bf,cd,ce,cf]", () => {
  expect(letterCombinations("23")).toEqual([
    "ad",
    "ae",
    "af",
    "bd",
    "be",
    "bf",
    "cd",
    "ce",
    "cf",
  ]);
});

test("EMPTY ARRAY must be []", () => {
  expect(letterCombinations("")).toEqual([]);
});

test("2 must be [a,b,c]", () => {
  expect(letterCombinations("2")).toEqual(["a", "b", "c"]);
});
```
