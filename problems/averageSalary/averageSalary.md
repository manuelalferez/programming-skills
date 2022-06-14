# Statement
You are given an array of unique integers salary where salary[i] is the salary of the ith employee.
Return the average salary of employees excluding the minimum and maximum salary. Answers within 10-5 of the actual answer will be accepted.

Example: 
```
Input: salary = [4000,3000,1000,2000]
Output: 2500.00000
Explanation: Minimum salary and maximum salary are 1000 and 4000 respectively.
Average salary excluding minimum and maximum salary is (2000+3000) / 2 = 2500
```

# Solution
```
export default function average(salary: number[]): number {
  let min: number, max: number, sum: number;
  min = max = sum = salary[0];
  for (let index = 1; index < salary.length; index++) {
    if (salary[index] > max) max = salary[index];
    if (salary[index] < min) min = salary[index];
    sum += salary[index];
  }
  return (sum - min - max) / (salary.length - 2);
}
```

# Tests
```
import average from ".";

test("the average salary of employees with the salaries [4000,3000,1000,2000] must be 2500", () => {
  expect(average([4000, 3000, 1000, 2000])).toBe(2500);
});

test("the average salary of employees with the salaries [1000,2000,3000] must be 2500", () => {
  expect(average([1000, 2000, 3000])).toBe(2000);
});

```