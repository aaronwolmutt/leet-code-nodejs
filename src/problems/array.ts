
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

export function productOfArrayExceptSelf (nums: number[]): number[] {
  const res: number[] = new Array(nums.length).fill(1)
  let prefix: number = 1
  for (let i = 0; i < nums.length; i++) {
    res[i] = prefix
    prefix *= nums[i]
  }
  let postfix: number = 1
  for (let j = nums.length - 1; j >= 0; j--) {
    res[j] *= postfix
    postfix *= nums[j]
  }
  return res
}

export function isValidSudoko (board: string[][]): boolean {
  // can't initialize a container of sets in Node?
  const rowSet: any = new Array(9).fill(new Set())
  const colSet: any = new Array(9).fill(new Set())
  const boxSet: any = new Array(9).fill(new Set())
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; row < board[row].length; col++) {
      if (board[row][col] === '.') {
        continue
      }
      const num: number = Number.parseInt(board[row][col])
      const boxIndex: number = Math.floor(row / 3) * 3 + Math.floor(col / 3)
      if (rowSet[row].has(num) ||
          colSet[col].has(num) ||
          boxSet[boxIndex].has(num)
      ) return false
      rowSet[row].add(num)
      colSet[col].add(num)
      boxSet[boxIndex].add(num)
    }
  }
  return true
}

export function longestConsecutive (nums: number[]): number {
  const numsSet: Set<number> = new Set(nums)
  let maxLength: number = 0
  for (const i of nums) {
    if (!numsSet.has(i - 1)) {
      let length: number = 0
      while (numsSet.has(i + length)) {
        length += 1
      }
      maxLength = Math.max(length, maxLength)
    }
  }
  return maxLength
};
