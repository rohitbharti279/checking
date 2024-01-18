/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  const obj = {
      2: "abc",
      3: "def",
      4: "ghi",
      5: "jkl",
      6: "mno",
      7: "pqrs",
      8: "tuv",
      9: "wxyz",
  }
  console.log(obj);
};
// const phone_map = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];

console.log(letterCombinations("23"))