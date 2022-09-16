import { isPalindrome } from '../src/problems/two-pointer'

describe('two pointer leet code problems', () => {
  describe('valid palindrome',
    () => {
      it('case 1', () => {
        const result: boolean = isPalindrome('A man, a plan, a canal: Panama')
        expect(result).toStrictEqual(true)
      })
      it('case 2', () => {
        const result: boolean = isPalindrome('race a car')
        expect(result).toStrictEqual(false)
      })
      it('edge case 1', () => {
        const result: boolean = isPalindrome('0P')
        expect(result).toStrictEqual(false)
      })
      it('edge case 2', () => {
        const result: boolean = isPalindrome('a')
        expect(result).toStrictEqual(true)
      })
    })
})
