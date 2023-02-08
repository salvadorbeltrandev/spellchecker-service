function findWordInDictionary(wordToBeFound, dictionary) {
  return dictionary.find(word => word === wordToBeFound);
}

function findSuggestionsInDictionary(wordToBeFound, dictionary) {
  return dictionary.filter(word => word.startsWith(wordToBeFound));
}

module.exports = {
  findWordInDictionary,
  findSuggestionsInDictionary
};
