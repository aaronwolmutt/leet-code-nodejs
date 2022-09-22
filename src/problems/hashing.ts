
/*
  Given an integer array nums, return true if any value appears at least twice in the array,
  and return false if every element is distinct.
 */
export function containsDuplicate (nums: number[]): boolean {
  const numFound: Map<number, boolean> = new Map<number, boolean>()
  for (const i of nums) {
    if (numFound.get(i) === true) {
      return true
    } else {
      numFound.set(i, true)
    }
  }
  return false
}

export function twoSum (nums: number[], target: number): number[] {
  const indicies: Map<number, number> = new Map<number, number>()
  for (let i = 0; i < nums.length; i++) {
    const complement: number = target - nums[i]
    if (indicies.has(complement)) {
      // @ts-expect-error
      return [indicies.get(complement), i]
    }
    indicies.set(nums[i], i)
  }
  return []
}

export function groupAnagrams (strs: string[]): string[][] {
  const result: Record<string, string[]> = {}
  for (const s of strs) {
    const count: number[] = new Array(26).fill(0)
    for (const c of s) {
      count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
    }
    const key = count.toString()
    if (result[key]) {
      result[key].push(s)
    } else {
      result[key] = [s]
    }
  }
  return Object.values(result).sort()
}

export function topKFrequentElements (nums: number[], k: number): number[] {
  const freqs: Map<number, number> = new Map()
  for (const i of nums) {
    if (freqs.get(i) != null) {
      const count: number = freqs.get(i)
      freqs.set(i, count + 1)
    } else {
      freqs.set(i, 1)
    }
  }
  const sorted = new Map([...freqs.entries()].sort((a, b) => b[1] - a[1])).keys()
  return Array.from(sorted).slice(0, k)
}
