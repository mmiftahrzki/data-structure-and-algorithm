type QNode<T> = {
  value: T;
  next?: QNode<T>;
};

export default class Queue<T> {
  public length: number;
  private head?: QNode<T>;
  private tail?: QNode<T>;

  constructor() {
    this.head = this.tail = undefined;
    this.length = 0;
  }

  enqueue(item: T): void {
    const node = { value: item } as QNode<T>;

    if (this.tail === undefined) {
      this.tail = this.head = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;
  }

  deque(): T | undefined {
    if (this.length === 0) {
      return;
    }

    const head = this.head;

    if (this.length === 1) {
      this.tail = undefined;
    }

    this.head = this.head?.next;
    this.length--;

    return head?.value;
  }

  peek(): T | undefined {
    if (this.length === 0) {
      return;
    }

    return this.head?.value;
  }
}
