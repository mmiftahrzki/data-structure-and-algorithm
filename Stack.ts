type SNode<T> = {
  value: T;
  prev?: SNode<T>;
};

export default class Stack<T> {
  private head?: SNode<T>;
  public length: number;

  constructor() {
    this.head = undefined;
    this.length = 0;
  }

  push(item: T): void {
    const node = { value: item } as SNode<T>;

    if (this.length === 0) {
      this.head = node;
    } else {
      const head = this.head;

      this.head = node;
      this.head.prev = head;
    }

    this.length++;
  }

  pop(): T | undefined {
    if (this.length === 0) {
      return;
    }

    const head = this.head;

    this.head = this.head?.prev;
    this.length--;

    return head?.value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}