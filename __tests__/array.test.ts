import { groupAnagrams, topKFrequentElements, validAnagram } from '../src/problems/array'

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
})
