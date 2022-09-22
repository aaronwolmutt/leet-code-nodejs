
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
