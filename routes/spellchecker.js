const express = require("express");
const router = express.Router();
const fs = require("fs");
const {
  hasSpellingErrors,
} = require("../utils/word_spelling_handler");
const {
  findWordInDictionary,
  findSuggestionsInDictionary,
} = require("../utils/dictionary_handler");

const DICTIONARY_FILE_PATH = "./files/dictionary.txt";

function convertTextFileToArray() {
  const dictionaryFile = fs.readFileSync(DICTIONARY_FILE_PATH, "utf8");
  return dictionaryFile.split("\n");
}

router.get("/:word?", (req, res) => {
  const word = req.params.word;

  if (!word) {
    res.status(404).json({
      error: "Word not provided",
      suggestions: [],
      correct: false,
    });
    return;
  }

  if (hasSpellingErrors(word)) {
    res.status(404).json({
      error: "The word is misspelled or incorrect",
      suggestions: [],
      correct: false,
    });
    return;
  }

  const dictionary = convertTextFileToArray();

  if (findWordInDictionary(word, dictionary)) {
    res.status(200).json({
      error: "",
      suggestions: [],
      correct: true,
    });
    return;
  }

  const suggestions = findSuggestionsInDictionary(
    word.toLowerCase(),
    dictionary
  );
  
  if (suggestions.length > 0) {
    res.status(200).json({
      error: "",
      suggestions: suggestions,
      correct: false,
    });
    return;
  }

  res.status(404).json({
    error: "Word not found",
    suggestions: [],
    correct: false,
  });
});

module.exports = router;
