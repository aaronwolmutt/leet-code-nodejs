

export function isPalindrome(s: string) : boolean {
  const formatted: string = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')
  let i: number = 0
  let j: number = formatted.length - 1
  while (i < formatted.length / 2) {
    if (formatted[i] !== formatted[j]) {
      return false
    }
    i++
    j--
  }
  return true
}
