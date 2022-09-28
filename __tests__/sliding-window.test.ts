import { lengthOfLongestSubstring, maxProfit } from '../src/problems/sliding-window'
import { longestRepeatingCharReplacement } from '../src/problems/two-pointer'

describe('sliding window problems', () => {
  describe('Best time to buy and sell a stock', () => {
    it('case 1', () => {
      const result: number = maxProfit([7, 1, 5, 3, 6, 4])
      expect(result).toStrictEqual(5)
    })
  })
  describe('length of longest substring', () => {
    it('case 1', () => {
      const result: number = lengthOfLongestSubstring('abcabcbb')
      expect(result).toStrictEqual(3)
    })
  })
  describe('longest repeating character replacement', () => {
    it('case 1', () => {
      const result: number = longestRepeatingCharReplacement('ABAB', 2)
      expect(result).toEqual(2)
    })
    it('case 2', () => {
      const result: number = longestRepeatingCharReplacement('AABABBA', 1)
      expect(result).toEqual(4)
    })
  })
})
