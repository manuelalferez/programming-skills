# Statement 
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

**Example 1:**

![](https://assets.leetcode.com/uploads/2020/10/02/addtwonumber1.jpg)

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

**Example 2:**

Input: l1 = [0], l2 = [0]
Output: [0]

**Example 3:**

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
 

**Constraints:**

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.

# Solution
## Solution 1 
```ts
export default function addTwoNumbers(l1: number[], l2: number[]): number[] {
  const numbersSum = listToInteger(l1) + listToInteger(l2);
  const resultList = integerToList(numbersSum);
  return resultList;
}

function listToInteger(list: number[]): number {
  return parseInt(list.reverse().join(""));
}

function integerToList(num: number): number[] {
  return num
    .toString()
    .split("")
    .reverse()
    .map((item) => parseInt(item));
}
````

## Final solution 
```ts
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export default function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const numbersSum = listToInteger(l1) + listToInteger(l2);
  const resultList = integerToList(numbersSum);
  return resultList;
}

function listToInteger(list: ListNode | null): bigint {
  if (!list) return BigInt(0);
  let current: ListNode | null = list;
  let num = "";
  while (current != null) {
    num = current.val.toString() + num;
    current = current.next;
  }
  return BigInt(num);
}

function integerToList(num: bigint): ListNode | null {
  const arr = num
    .toString()
    .split("")
    .reverse()
    .map((item) => parseInt(item));
  return createList(arr);
}

export function createList(arr: number[]): ListNode | null {
  if (arr.length === 0) {
    return null;
  }

  let head = new ListNode(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}
```

# Test 
## Tests 1 
```ts
import addTwoNumbers from ".";

test("sum of l1 = [2,4,3] and l2 = [5,6,4] must be [7,0,8]", () => {
  expect(addTwoNumbers([2, 4, 3], [5, 6, 4])).toEqual([7, 0, 8]);
});

test("sum of l1 = [0] and l2 = [0] must be [0]", () => {
  expect(addTwoNumbers([0], [0])).toEqual([0]);
});

test("sum of l1 = [9,9,9,9,9,9,9] and l2 = [9,9,9,9] must be [8,9,9,9,0,0,0,1]", () => {
  expect(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9])).toEqual([
    8, 9, 9, 9, 0, 0, 0, 1,
  ]);
});
```

## Final tests
```ts
import addTwoNumbers, { ListNode, createList } from ".";

function compareLists(list1: ListNode | null, list2: ListNode | null): boolean {
  let current1 = list1;
  let current2 = list2;

  while (current1 !== null && current2 !== null) {
    if (current1.val !== current2.val) {
      return false;
    }
    current1 = current1.next;
    current2 = current2.next;
  }

  if (current1 !== null || current2 !== null) {
    return false;
  }

  return true;
}

test("sum of l1 = [2,4,3] and l2 = [5,6,4] must be [7,0,8]", () => {
  const l1 = createList([2, 4, 3]);
  const l2 = createList([5, 6, 4]);
  const result = createList([7, 0, 8]);
  expect(compareLists(addTwoNumbers(l1, l2), result)).toBe(true);
});

test("sum of l1 = [0] and l2 = [0] must be [0]", () => {
  const l1 = createList([0]);
  const l2 = createList([0]);
  const result = createList([0]);
  expect(compareLists(addTwoNumbers(l1, l2), result)).toBe(true);
});

test("sum of l1 = [9,9,9,9,9,9,9] and l2 = [9,9,9,9] must be [8,9,9,9,0,0,0,1]", () => {
  const l1 = createList([9, 9, 9, 9, 9, 9, 9]);
  const l2 = createList([9, 9, 9, 9]);
  const result = createList([8, 9, 9, 9, 0, 0, 0, 1]);
  expect(compareLists(addTwoNumbers(l1, l2), result)).toBe(true);
});

test("sum of l1 = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1] and l2 = [5,6,4] must be [6,6,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]", () => {
  const l1 = createList([
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1,
  ]);
  const l2 = createList([5, 6, 4]);
  const result = createList([
    6, 6, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1,
  ]);
  expect(compareLists(addTwoNumbers(l1, l2), result)).toBe(true);
});
```