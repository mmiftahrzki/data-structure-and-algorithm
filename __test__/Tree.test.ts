import btInOrder from "../BTInOrder";
import btPostOrder from "../BTPostOrder";
import btPreOrder from "../BTPreOrder";
import { tree } from "../Tree";

test("pre order", function () {
  expect(btPreOrder(tree)).toEqual([20, 10, 5, 7, 15, 50, 30, 29, 45, 100]);
});

test("in order", function () {
  expect(btInOrder(tree)).toEqual([5, 7, 10, 15, 20, 29, 30, 45, 50, 100]);
});

test("post order", function () {
  expect(btPostOrder(tree)).toEqual([7, 5, 15, 10, 29, 45, 30, 100, 50, 20]);
});
