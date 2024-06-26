# Statement 
You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

Example 1:

Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6

Example 2:

Input: lists = []
Output: []
Example 3:

Input: lists = [[]]
Output: []
 

Constraints:

k == lists.length
0 <= k <= 104
0 <= lists[i].length <= 500
-104 <= lists[i][j] <= 104
lists[i] is sorted in ascending order.
The sum of lists[i].length will not exceed 104.

# Solution 
```ts
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export default function mergeKLists(
  lists: Array<ListNode | null>
): ListNode | null {
  let values: number[] = [];
  lists.forEach((list: ListNode | null) => {
    let head = list;
    while (head != null) {
      values.push(head.val);
      head = head.next;
    }
  });
  const sortedValues = values.sort((a, b) => a - b);
  const list = createList(sortedValues);
  return list;
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

# Tests
```ts
import mergeKLists, { ListNode, createList } from ".";

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

test("[[1,4,5],[1,3,4],[2,6]] must be [1,1,2,3,4,4,5,6]", () => {
  const lists = [
    [1, 4, 5],
    [1, 3, 4],
    [2, 6],
  ].map((list) => createList(list));
  const result = createList([1, 1, 2, 3, 4, 4, 5, 6]);
  expect(compareLists(mergeKLists(lists), result)).toBe(true);
});

test("[] must be []", () => {
  const lists = [].map((list) => createList(list));
  const result = createList([]);
  expect(compareLists(mergeKLists(lists), result)).toBe(true);
});

test("[[]] must be []", () => {
  const lists = [[]].map((list) => createList(list));
  const result = createList([]);
  expect(compareLists(mergeKLists(lists), result)).toBe(true);
});

test("[[],[-1,5,11],[],[6,10]] must be [-1,5,6,10,11]", () => {
  const lists = [[], [-1, 5, 11], [], [6, 10]].map((list) => createList(list));
  const result = createList([-1, 5, 6, 10, 11]);
  expect(compareLists(mergeKLists(lists), result)).toBe(true);
});

```
