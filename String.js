// String
// Pangram is a sentence containing every letter in the English alphabet.
// Given a string, find all characters that are missing from the string, i.e., the
// characters that can make string a Pangram.
// Input : The quick brown fox jumps
// Output : adglvyz

***

//Solution

let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let text = 'The quick brown fox jumps';

let output = [];
function pangram(alphabet, text){
  let res = text.split('');
  for(let i = 0; i < alphabet.length; i++){
    for(let j = 0; j < 1; j++){
      if(!res.includes(alphabet[i])){
        output.push(alphabet[i]);
      }
    }
  }
  return output + '';
}
console.log(pangram(alphabet, text));

//Դարձյալ աշխատում է կամայական տեքստի դեպքում: