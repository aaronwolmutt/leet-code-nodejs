import { lengthOfLongestSubstring, maxProfit } from '../src/problems/sliding-window'

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
})
