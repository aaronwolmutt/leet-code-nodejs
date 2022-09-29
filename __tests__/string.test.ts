import { minOperations } from '../src/problems/string'

describe('string problems', () => {
  describe('Minimum Changes To Make Alternating Binary String', () => {
    it('case 1', () => {
      expect(minOperations('0100')).toEqual(1)
    })
    it('case 2', () => {
      expect(minOperations('10')).toEqual(0)
    })
    it('case 3', () => {
      expect(minOperations('1111')).toEqual(2)
    })
  })
})
