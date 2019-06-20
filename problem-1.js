// time complexity is O (n + k)
// n is the size of the string x
// k is the length of the alphabet

let x = "dfwoeifohazzzz";

function countSortAlpha(x) {
  let charCount = [];
  let alphaOffset = "a".charCodeAt(0);
  let output = "";

  // initialize all character counts to 0
  for (let i = 0; i <= 25; i++) {
    charCount[i] = 0;
  }

  // tabulate counts for each letter
  for (let i = 0; i < x.length; i++) {
    charCount[x.charCodeAt(i) - alphaOffset] += 1;
  }

  // create string of sorted characters
  for (let i = 0; i <= 25; i++) {
    while (charCount[i] > 0) {
      output = output + String.fromCharCode(i + alphaOffset);
      charCount[i]--;
    }
  }

  return output;
}

console.log(countSortAlpha(x));
