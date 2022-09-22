import {
  isValidSudoko, longestConsecutive,
  productOfArrayExceptSelf,
  validAnagram
} from '../src/problems/array'

describe('array problem tests', () => {
  describe('isAnagram', () => {
    it('case 1', () => {
      const result: boolean = validAnagram('anagram', 'nagaram')
      expect(result).toStrictEqual(true)
    })
    it('case 2', () => {
      const result: boolean = validAnagram('rat', 'car')
      expect(result).toStrictEqual(false)
    })
  })
  describe('product of array except self', () => {
    it('case 1', () => {
      const result: number[] = productOfArrayExceptSelf([1, 2, 3, 4])
      expect(result).toStrictEqual([24, 12, 8, 6])
    })
    it('case 2', () => {
      const result: number[] = productOfArrayExceptSelf([-1, 1, 0, -3, 3])
      expect(result).toEqual([0, 0, 9, 0, 0])
    })
  })
  describe('isValidSudoku', () => {
    it('case 1', () => {
      const board: string[][] = [
        ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
        ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
        ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
        ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
        ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
        ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
        ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
        ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
        ['.', '.', '.', '.', '8', '.', '.', '7', '9']
      ]
      const result: boolean = isValidSudoko(board)
      expect(result).toStrictEqual(false)
    })
  })
  describe('longestConsecutiveSequence', () => {
    it('case 1', () => {
      const result: number = longestConsecutive([100, 4, 200, 1, 3, 2])
      expect(result).toStrictEqual(4)
    })
    it('case 2', () => {
      const result: number = longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])
      expect(result).toStrictEqual(9)
    })
  })
})
