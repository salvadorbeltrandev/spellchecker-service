function hasRepeatingChars(word) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i + 1] && word[i + 1] === word[i + 2]) {
      return true;
    }
  }
  return false;
}

function isMissingVowels(word) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  for (const char of word) {
    if (vowels.includes(char)) {
      return false;
    }
  }
  return true;
}

function isMixedCasing(word) {
  if (word === word.toLowerCase() || word === word.toUpperCase()) {
    return false;
  }
  return true;
}

function hasSpellingErrors(word) {
  return hasRepeatingChars(word) || isMissingVowels(word)
}

module.exports = {
    hasSpellingErrors,
};
