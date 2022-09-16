import ListNode from '../src/data_structures/linked_list_node'
import {
  printSinglyLinkedListIteratively,
  reverseLinkedListIteratively,
  reverseLinkedListRecursively
} from '../src/problems/linked_list'

describe(' singly LinkedList unit tests and some leet code problems', () => {
  describe('instantiates correctly', () => {
    it('can instantiate a single node', () => {
      const node: ListNode = new ListNode()
      expect(node).toBeDefined()
      expect(node.val).toStrictEqual(0)
      expect(node.next).toBeFalsy()
    })

    it('can create references to multiple nodes', () => {
      let headNode: ListNode
      const nextNode: ListNode = new ListNode(100, null)
      // eslint-disable-next-line prefer-const
      headNode = new ListNode(1, nextNode)
      expect(headNode.next).toBe(nextNode)
      // @ts-expect-error
      expect(headNode.next.val).toStrictEqual(100)
    })
  })

  describe('Tests for common singly linkedList problems',
    () => {
      let head: ListNode
      let node1: ListNode
      let node2: ListNode
      // eslint-disable-next-line prefer-const
      node2 = new ListNode(2, null)
      // eslint-disable-next-line prefer-const
      node1 = new ListNode(1, node2)
      // eslint-disable-next-line prefer-const
      head = new ListNode(0, node1)

      it('test printSinglyLinkedListIteratively', () => {
        const consoleSpy: jest.SpyInstance = jest.spyOn(console, 'log')
        printSinglyLinkedListIteratively(head)
        expect(consoleSpy).toHaveBeenCalledTimes(3) // should console log for 3 nodes
        // check that all the vals were printed
        expect(consoleSpy).toHaveBeenCalledWith(0)
        expect(consoleSpy).toHaveBeenCalledWith(1)
        expect(consoleSpy).toHaveBeenCalledWith(2)
      })

      it('test printSinglyLinkedListRecursively', () => {
        const consoleSpy: jest.SpyInstance = jest.spyOn(console, 'log')
        printSinglyLinkedListIteratively(head)
        expect(consoleSpy).toHaveBeenCalledTimes(3) // should console log for 3 nodes
        // check that all the vals were printed
        expect(consoleSpy).toHaveBeenCalledWith(0)
        expect(consoleSpy).toHaveBeenCalledWith(1)
        expect(consoleSpy).toHaveBeenCalledWith(2)
      })
      it('test reverseLinkedListIteratively', () => {
        const newHead: ListNode = reverseLinkedListIteratively(head)
        expect(newHead.val).toStrictEqual(2)
        expect(newHead.next?.val).toStrictEqual(1)
        expect(newHead.next?.next?.val).toStrictEqual(0)
      })
      it('test reverseLinkedListRecursively', () => {
        const newHead: ListNode = reverseLinkedListRecursively(head)
        expect(newHead.val).toStrictEqual(2)
        expect(newHead.next?.val).toStrictEqual(1)
        expect(newHead.next?.next?.val).toStrictEqual(0)
      })
    })
})
