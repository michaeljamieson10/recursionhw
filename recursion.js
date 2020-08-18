/** product: calculate the product of an array of numbers. */

function product(nums, i=0) {
  if (i === nums.length) return 1;
  return nums[i] * product(nums, i + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i=0, longestWordLength = 0) {
  if (i === words.length) return longestWordLength;
  if(words[i].length > longestWordLength) return longest(words, i + 1, words[i].length);
  return longest(words, i + 1, longestWordLength)
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i=0, strOtherLetter='') {
  if (i >= str.length) return strOtherLetter;
  return everyOther(str, i + 2, strOtherLetter += str[i])
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx = 0) {
  // let leftIdx = idx;
  // let rightIdx = str.length - idx - 1;
  // if (leftIdx >= rightIdx) return true;
  // if (str[leftIdx] !== str[rightIdx]) return false;
  // return isPalindrome(str, idx + 1);
  let leftIdx = idx;
  let rightIdx = str.length - idx - 1;
  if (leftIdx >= rightIdx) return true;
  if (str[leftIdx] !== str[rightIdx]) return false;
  return isPalindrome(str, idx + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  if (idx === arr.length) return -1;
  if (arr[idx] === val) return idx;
  return findIndex(arr, val, idx + 1);

}

/** revString: return a copy of a string, but in reverse. */

function revString(str, newStr='',idx=str.length - 1) {
  if (idx == -1) return newStr;
  return revString(str,newStr += str[idx], idx -1)
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  // let stringArr = [];
  // for (let key in obj) {
  //   if (typeof obj[key] === "string") stringArr.push(obj[key]);
  //   if (typeof obj[key] === "object") stringArr.push(...gatherStrings(obj[key]));
  // }
  // return stringArr;
  let stringArr = [];
  for (let key in obj){
    if (typeof obj[key] === "string") stringArr.push(obj[key]);
    if (typeof obj[key] === "object") stringArr.push()
  }
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
  if (left > right) {
    return -1;
  }
  let middle = Math.floor((right + left) / 2);
  if (arr[middle] === val) {
    return middle;
  }
  if (arr[middle] > val) {
    return binarySearch(arr, val, left, middle - 1);
  }
  return binarySearch(arr, val, middle + 1, right);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
