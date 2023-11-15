(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.TibetanRegExps = factory());
}(this, (function () { 'use strict';

  const allTibetanCharacters = "†◌卍卐\u{f00}-\u{fda}\u{f021}-\u{f042}\u{f162}-\u{f588}";
  const allTibetanCharactersWithSpaces = `${allTibetanCharacters} `;
  const allTibetanCharactersRange = `[${allTibetanCharacters}]`;
  const allTibetanCharactersWithSpacesRange = `[${allTibetanCharactersWithSpaces}]`;
  const anythingNonTibetanRange = `[^${allTibetanCharacters}]`;
  const punctuationCharacters = "༄༅་༈།༎༑༔";
  const punctuationCharactersRange = `[${punctuationCharacters}]`;

  var tibetanRegexps = {
    tibetanGroups: new RegExp( `(${allTibetanCharactersRange}+)`, 'iug'),
    onlyTibetanWithSpaces: new RegExp(`^(${allTibetanCharactersWithSpacesRange}+)$`, 'iug'),
    onlyTibetanWithoutSpaces: new RegExp(`^(${allTibetanCharactersRange}+)$`, 'iug'),
    anythingNonTibetan: new RegExp(`(${anythingNonTibetanRange}+)`, 'iug'),
    punctuation: new RegExp(`(${punctuationCharactersRange}+)`, 'iug'),
    beginningPunctuation: new RegExp(`^(${punctuationCharactersRange}+)`, 'iug'),
    endPunctuation: new RegExp(`(${punctuationCharactersRange}+)$`, 'iug'),
    expressions: {
      allTibetanCharacters: allTibetanCharacters,
      allTibetanCharactersRange: allTibetanCharactersRange,
      anythingNonTibetanRange: anythingNonTibetanRange,
      punctuationCharacters: punctuationCharacters,
      punctuationCharactersRange: punctuationCharactersRange
    },
  };

  return tibetanRegexps;

})));
