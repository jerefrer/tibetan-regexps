# tibetan-regexps

A small tool to gather together useful RegExps to deal with Unicode Tibetan.

Usage
-----------

## RegExps
```js
  TibetanRegExps.someTibetan
  # => /([†◌卍卐\u{f00}-\u{fda}\u{f021}-\u{f042}\u{f162}-\u{f588}]+)/giu
  var match = "སངས་རྒྱས། ཆོས། དགེ་འདུན།".match(TibetanRegExps.someTibetan);
  # match[0] => "སངས་རྒྱས།"
  # match[1] => "ཆོས།"
  # match[2] => "དགེ་འདུན།"

  TibetanRegExps.onlyTibetanWithSpaces
  TibetanRegExps.onlyTibetanWithoutSpaces
  TibetanRegExps.anythingNonTibetan
  TibetanRegExps.punctuation
```

## Expressions (strings) used to build the RegExps
```js
  TibetanRegExps.expressions.allTibetanCharacters
  TibetanRegExps.expressions.allTibetanCharactersRange
  TibetanRegExps.expressions.anythingNonTibetanRange
  TibetanRegExps.expressions.punctuationCharacters
  TibetanRegExps.expressions.punctuationCharactersRange
```

Testing


Credits
-----------


License
-----------

This software is licensed under the MIT License.

Copyright Jeremy FRERE, 2021.

Permission is hereby granted, free of charge, to any person obtaining a
copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to permit
persons to whom the Software is furnished to do so, subject to the
following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
USE OR OTHER DEALINGS IN THE SOFTWARE.
