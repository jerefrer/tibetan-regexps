# tibetan-regexps

Useful RegExps to deal with Unicode Tibetan.

Usage
-----------

## RegExps
```js
  import TibetanRegExps from 'tibetan-regexps'

  TibetanRegExps.tibetanGroups
  # => /([†◌卍卐\u{f00}-\u{fda}\u{f021}-\u{f042}\u{f162}-\u{f588}]+)/giu
  var match = "སངས་རྒྱས། ཆོས། དགེ་འདུན།".match(TibetanRegExps.tibetanGroups);
  # match[0] => "སངས་རྒྱས།"
  # match[1] => "ཆོས།"
  # match[2] => "དགེ་འདུན།"

  TibetanRegExps.onlyTibetanWithSpaces
  TibetanRegExps.onlyTibetanWithoutSpaces
  TibetanRegExps.anythingNonTibetan
  TibetanRegExps.punctuation
  TibetanRegExps.beginningPunctuation
  TibetanRegExps.endPunctuation
```

## Expressions (strings) used to build the RegExps
```js
  TibetanRegExps.expressions.allTibetanCharacters
  TibetanRegExps.expressions.allTibetanCharactersRange
  TibetanRegExps.expressions.anythingNonTibetanRange
  TibetanRegExps.expressions.punctuationCharacters
  TibetanRegExps.expressions.punctuationCharactersRange
```
