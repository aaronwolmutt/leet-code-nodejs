
export function isPalindrome (s: string): boolean {
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

export function twoSum (numbers: number[], target: number): number[] {
  let left: number = 0
  let right: number = numbers.length - 1
  while (right > left) {
    if (numbers[left] + numbers[right] > target) {
      right--
    } else if (numbers[left] + numbers[right] < target) {
      left++
    } else {
      return [left + 1, right + 1]
    }
  }
  return []
}

export function maxArea (height: number[]): number {
  let result: number = 0
  let left: number = 0
  let right: number = height.length - 1
  while (left < right) {
    const distance: number = (right - left) * Math.min(height[left], height[right])
    result = Math.max(result, distance)
    if (height[left] < height[right]) {
      left++
    } else {
      right--
    }
  }
  return result
}

export function longestRepeatingCharReplacement (s: string, k: number): number {
  // count ocurrences of character
  const occurrences: Map<string, number> = new Map()
  let left: number = 0
  let result: number = 0
  for (let right = 0; right < s.length; right++) {
    if (!occurrences.has(s[right])) {
      occurrences.set(s[right], 1)
    } else {
      const count: number = occurrences.get(s[right])
      occurrences.set(s[left], count + 1)
    }
    const windowLen: number = (right - left + 1)
    const maxOccurrence: number = Math.max(...occurrences.values())
    if (windowLen - maxOccurrence > k) {
      const count: number = occurrences.get(s[left])
      occurrences.set(s[left], count - 1)
      left++
    }
    result = Math.max(result, windowLen - maxOccurrence)
  }
  return result
}
