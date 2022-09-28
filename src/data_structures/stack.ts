class Stack<T> {
  private readonly array: T[] = []

  pop (): T | undefined {
    if (!this.isEmpty()) return this.array.pop()
  }

  push (data: T): void {
    this.array.push(data)
  }

  peek (): T | undefined {
    if (!this.isEmpty()) return this.array[this.array.length - 1]
  }

  isEmpty (): boolean {
    return this.array.length === 0
  }
}

export default Stack
