
export function maxProfit (prices: number[]): number {
  let left: number = 0
  let right: number = 1
  let maxProfit: number = 0
  while (right < prices.length - 1) {
    if (prices[left] < prices[right]) {
      // profitable situation
      const profit: number = prices[right] - prices[left]
      maxProfit = Math.max(profit, maxProfit)
    } else {
      // unprofitable, move the window forward
      left = right
    }
    right++
  }
  return maxProfit
}

export function lengthOfLongestSubstring (s: string): number {
  const chars: Set<string> = new Set<string>()
  let left: number = 0
  let maxLength: number = 0
  for (let right = 0; right < s.length; right++) {
    while (chars.has(s[right])) {
      chars.delete(s[left])
      left++
    }
    chars.add(s[right])
    // calculate window size and update maxLength
    maxLength = Math.max(maxLength, right - left + 1)
  }
  return maxLength
}
