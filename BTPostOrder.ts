import { BinaryNode } from "./Tree";

function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
  if (!curr) {
    return path;
  }

  walk(curr.left, path);
  walk(curr.right, path);

  path.push(curr.value);

  return path;
}

export default function btPostOrder(head: BinaryNode<number>): number[] {
  return walk(head, []);
}
