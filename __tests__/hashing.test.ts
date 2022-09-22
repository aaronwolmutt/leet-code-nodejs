import { containsDuplicate, groupAnagrams, topKFrequentElements, twoSum } from '../src/problems/hashing'

describe('hashing problem tests', () => {
  describe('containsDuplicate', () => {
    it('case 1', () => {
      const result = containsDuplicate([1, 2, 3, 1])
      expect(result).toStrictEqual(true)
    })
    it('case 2', () => {
      const result = containsDuplicate([1, 2, 3, 4])
      expect(result).toStrictEqual(false)
    })
    it('case 3', () => {
      const result = containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])
      expect(result).toStrictEqual(true)
    })
  })
  describe('twoSum', () => {
    it('case 1', () => {
      const result: number[] = twoSum([2, 7, 11, 15], 9)
      expect(result).toStrictEqual([0, 1])
    })
    it('case 2', () => {
      const result: number[] = twoSum([3, 2, 4], 6)
      expect(result).toStrictEqual([1, 2])
    })
    it('case 3', () => {
      const result: number[] = twoSum([3, 3], 6)
      expect(result).toStrictEqual([0, 1])
    })
  })
  describe('groupAnagrams', () => {
    it('case 1', () => {
      const result: string[][] = []
      for (const arr of groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])) {
        result.push(arr.sort())
      }
      expect(result.sort((a, b) => { return a.length - b.length }))
        .toEqual([['bat'], ['nat', 'tan'], ['ate', 'eat', 'tea']])
    })
  })
  describe('topKFrequentElements', () => {
    it('case 1', () => {
      const result: number[] = topKFrequentElements([1, 1, 1, 2, 2, 3], 2)
      expect(result).toStrictEqual([1, 2])
    })
    it('case 2', () => {
      const result: number[] = topKFrequentElements([1], 1)
      expect(result).toStrictEqual([1])
    })
    it('edge case', () => {
      const result: number[] = topKFrequentElements([3, 0, 1, 0], 1)
      expect(result).toStrictEqual([0])
    })
    it('edge case 2', () => {
      const result: number[] = topKFrequentElements(
        [4, 1, -1, 2, -1, 2, 3], 2)
      expect(result).toStrictEqual([-1, 2])
    })
  })
})
