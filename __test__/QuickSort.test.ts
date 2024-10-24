import quickSort from "../QuickSort";

test("quick-sort", function () {
  const length = 10 ** 3;
  const arr = Array.from(Array(length), (_, i) => length - i);

  quickSort(arr);
  expect(arr).toEqual(arr.reverse());
});
