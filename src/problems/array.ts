
/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

* */
export function validAnagram (s: string, t: string): boolean {
  if (s.length !== t.length) return false
  const sSorted: string[] = s.split('').sort()
  const tSorted: string[] = t.split('').sort()
  for (let i = 0; i < s.length; i++) {
    if (sSorted[i] !== tSorted[i]) {
      return false
    }
  }
  return true
}
