import ListNode from '../data_structures/linked_list_node'

export function printSinglyLinkedListIteratively (head: ListNode): void {
  while (head.next != null) {
    console.log(head.val)
    head = head.next
  }
  console.log(head.val)
}

export function printSinglyLinkedListRecursively (head: ListNode): void {
  console.log(head.val)
  if (head.next != null) {
    printSinglyLinkedListIteratively(head.next)
  }
}

export function reverseLinkedListIteratively (head: ListNode): ListNode {
  const prev: ListNode = null
  const current: ListNode = head
  while (head != null) {
    // initialize temp
    const tempNext: ListNode = head.next
    // reverse pointers
    current.next = prev
    prev = current
    current = current.next
  }
  return prev
}

export function reverseLinkedListRecursively (head: ListNode): ListNode | null {
  if (head == null) {
    return null
  }
  let newHead: ListNode = head
  if (head.next != null) {
    newHead = reverseLinkedListRecursively(head.next)
    head.next.next = head
  }
  head.next = null
  return newHead
}
