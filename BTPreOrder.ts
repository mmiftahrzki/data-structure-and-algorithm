import { BinaryNode } from "./Tree";

function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
  if (!curr) {
    return path;
  }

  path.push(curr.value);

  walk(curr.left, path);
  walk(curr.right, path);

  return path;
}

export default function btPreOrder(head: BinaryNode<number>): number[] {
  return walk(head, []);
}
