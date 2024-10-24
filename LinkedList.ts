interface LinkedListList<T> {
  get length(): number;
  insertAt(item: T, index: number): void;
  remove(item: T): T | undefined;
  removeAt(index: number): T | undefined;
  append(item: T): void;
  prepend(item: T): void;
  get(index: number): T | undefined;
}

type Node<T> = {
  value: T;
  prev?: Node<T>;
  next?: Node<T>;
};

export default class DoublyLinkedList<T> {
  public length: number;
  private head?: Node<T>;
  private tail?: Node<T>;

  constructor() {
    this.length = 0;
    this.head = this.tail = undefined;
  }

  prepend(item: T): void {
    const new_node = { value: item } as Node<T>;

    if (this.head === undefined) {
      this.head = this.tail = new_node;
    } else {
      new_node.next = this.head;
      this.head.prev = new_node;
      this.head = new_node;
    }

    this.length = this.length + 1;
  }

  insertAt(item: T, index: number): void {
    if (index === 0) {
      return this.prepend(item);
    } else if (index === this.length) {
      return this.append(item);
    } else if (index > this.length) {
      throw Error("tidak diperbolehkan insert karena index lebih besar dari jumlah data yang ada");
    }

    let curr_node = this.head;

    for (let i = 0; curr_node && i < index; i++) {
      curr_node = curr_node.next;
    }

    if (curr_node === undefined) {
      return;
    }

    const new_node: Node<T> = { value: item } as Node<T>;

    new_node.next = curr_node;
    new_node.prev = curr_node.prev;
    curr_node.prev = new_node;
    curr_node.prev.next = new_node;

    this.length = this.length + 1;
  }

  append(item: T): void {
    const new_node: Node<T> = { value: item };

    if (this.tail === undefined) {
      this.head = this.tail = new_node;
    } else {
      new_node.prev = this.tail;
      this.tail.next = new_node;
      this.tail = new_node;
    }

    this.length = this.length + 1;
  }

  remove(item: T): T | undefined {
    let node = this.head;

    for (let i = 0; node && i < this.length; i++) {
      if (node.value === item) {
        break;
      }

      node = node.next;
    }

    if (node === undefined) {
      return node;
    }

    if (node.prev === undefined) {
      this.head = node.next;
    } else {
      node.prev.next = node.next;
    }

    if (node.next === undefined) {
      this.tail = node.prev;
    } else {
      node.next.prev = node.prev;
    }

    this.length = this.length - 1;

    return node.value;
  }

  removeAt(index: number): T | undefined {
    if (index > this.length) {
      throw Error("index out of bound.");
    }

    let node = this.head;

    for (let i = 0; node && i < index; i++) {
      node = node.next;
    }

    if (node === undefined) {
      return node;
    }

    if (node.prev === undefined) {
      this.head = node.next;
    } else {
      node.prev.next = node.next;
    }

    if (node.next === undefined) {
      this.tail = node.prev;
    } else {
      node.next.prev = node.prev;
    }

    this.length = this.length - 1;

    return node.value;
  }

  get(index: number): T | undefined {
    if (index > this.length) {
      throw Error("index out of bound.");
    }

    let node = this.head;

    for (let i = 0; node && i < index; i++) {
      node = node.next;
    }

    if (node === undefined) {
      return node;
    }

    return node.value;
  }
}
