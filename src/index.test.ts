import helloWorld from ".";

test("helloWorld must have 'have a great day'", () => {
  let msg: String = "have a great day";
  expect(helloWorld(msg)).toContain("have a great day");
});
