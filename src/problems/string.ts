export function minOperations (s: string): number {
  let result: number = 0
  for (let i = 0; i < s.length; i++) {
    if (Number.parseInt(s[i]) !== i % 2) {
      result++
    }
  }
  return Math.min(result, s.length - result)
}
