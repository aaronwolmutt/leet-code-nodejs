import Stack from '../data_structures/stack'

export function isValid (s: string): boolean {
  if (s.length % 2 !== 0) return false
  const stack: Stack<string> = new Stack()
  const parenthesesMap = {
    ']': '[',
    '}': '{',
    ')': '('
  }
  const openToClose: Map<string, string> = new Map(Object.entries(parenthesesMap))
  for (const i of s) {
    if (openToClose.has(i)) {
      if (stack.peek() === openToClose.get(i)) {
        stack.pop()
      } else {
        return false
      }
    } else {
      stack.push(i)
    }
  }
  return true
}
