import { isValid } from '../src/problems/stack'

describe('stack problems', () => {
  describe('valid parentheses', () => {
    it('case 1', () => {
      const result: boolean = isValid('()')
      expect(result).toEqual(true)
    })
    it('case 2', () => {
      const result: boolean = isValid('()[]{}')
      expect(result).toEqual(true)
    })
    it('case 3', () => {
      const result: boolean = isValid('(]')
      expect(result).toEqual(false)
    })
  })
})
