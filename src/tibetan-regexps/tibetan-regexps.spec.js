import TibetanRegExps from './tibetan-regexps.js';

describe('TibetanRegExps.onlyTibetanWithSpaces', function() {

  it('should match a Tibetan only string without spaces', function() {
    expect("སངས་རྒྱས་".match(TibetanRegExps.onlyTibetanWithSpaces)).toBeTruthy();
  })

  it('should match a Tibetan only string with spaces', function() {
    expect("སངས་རྒྱས། ཆོས། དགེ་འདུན།".match(TibetanRegExps.onlyTibetanWithSpaces)).toBeTruthy();
  })

  it('should not match a string with mixed Tibetan and Latin', function() {
    expect("Buddha: སངས་རྒྱས་".match(TibetanRegExps.onlyTibetanWithSpaces)).toBeFalsy();
  })

  it('should not match a string no Tibetan at all', function() {
    expect("Buddha".match(TibetanRegExps.onlyTibetanWithSpaces)).toBeFalsy();
  })

})

describe('TibetanRegExps.onlyTibetanWithoutSpaces', function() {

  it('should match a Tibetan only string without spaces', function() {
    expect("སངས་རྒྱས་".match(TibetanRegExps.onlyTibetanWithoutSpaces)).toBeTruthy();
  })

  it('should not match a Tibetan only string with spaces', function() {
    expect("སངས་རྒྱས། ཆོས། དགེ་འདུན།".match(TibetanRegExps.onlyTibetanWithoutSpaces)).toBeFalsy();
  })

  it('should not match a string with mixed Tibetan and Latin', function() {
    expect("Buddha: སངས་རྒྱས་".match(TibetanRegExps.onlyTibetanWithoutSpaces)).toBeFalsy();
  })

  it('should not match a string no Tibetan at all', function() {
    expect("Buddha".match(TibetanRegExps.onlyTibetanWithoutSpaces)).toBeFalsy();
  })

})

describe('TibetanRegExps.tibetanGroups', function() {

  it('should match a Tibetan only string and return one group', function() {
    var match = "སངས་རྒྱས་".match(TibetanRegExps.tibetanGroups);
    expect(match[0]).toEqual("སངས་རྒྱས་");
    expect(match[1]).toBeFalsy();
  })

  it('should match a Tibetan only string with spaces and return each group', function() {
    var match = "སངས་རྒྱས། ཆོས། དགེ་འདུན།".match(TibetanRegExps.tibetanGroups);
    expect(match[0]).toEqual("སངས་རྒྱས།");
    expect(match[1]).toEqual("ཆོས།");
    expect(match[2]).toEqual("དགེ་འདུན།");
    expect(match[3]).toBeFalsy();
  })

  it('should match a string with mixed Tibetan and non-Tibetan and return each Tibetan group', function() {
    var match = "Buddha: སངས་རྒྱས་; Dharma: ཆོས་".match(TibetanRegExps.tibetanGroups);
    expect(match[0]).toEqual("སངས་རྒྱས་");
    expect(match[1]).toEqual("ཆོས་");
    expect(match[2]).toBeFalsy();
  })

  it('should not match a string no Tibetan at all', function() {
    expect("Buddha".match(TibetanRegExps.tibetanGroups)).toBeFalsy();
  })

})

describe('TibetanRegExps.anythingNonTibetan', function() {

  it('should not match a Tibetan only string', function() {
    var match = "སངས་རྒྱས་".match(TibetanRegExps.anythingNonTibetan);
    expect(match).toBeFalsy();
  })

  it('should match a string with mixed Tibetan and non-Tibetan and return each non-Tibetan group', function() {
    var match = "Buddha: སངས་རྒྱས་; Dharma: ཆོས་".match(TibetanRegExps.anythingNonTibetan);
    expect(match[0]).toEqual("Buddha: ");
    expect(match[1]).toEqual("; Dharma: ");
    expect(match[2]).toBeFalsy();
  })

  it('should match a string with Tibetan at all', function() {
    var match = "Buddha Dharma Sangha".match(TibetanRegExps.anythingNonTibetan);
    expect(match[0]).toEqual("Buddha Dharma Sangha");
    expect(match[1]).toBeFalsy();
  })

})

describe('TibetanRegExps.punctuation', function() {

  it('should match a string with punctuation and return each group', function() {
    var match = "སངས་རྒྱས། ཆོས༑ དགེ་འདུན༎".match(TibetanRegExps.punctuation);
    expect(match[0]).toEqual("་");
    expect(match[1]).toEqual("།");
    expect(match[2]).toEqual("༑");
    expect(match[3]).toEqual("་");
    expect(match[4]).toEqual("༎");
  })

  it('should not match a string with no punctuation at all', function() {
    var match = "སངས".match(TibetanRegExps.punctuation);
    expect(match).toBeFalsy();
  })

})

describe('TibetanRegExps.beginningPunctuation', function() {

  it('should match a string with punctuation at the beginning and return one group', function() {
    var match = "༄༅སངས་རྒྱས།".match(TibetanRegExps.beginningPunctuation);
    expect(match[0]).toEqual("༄༅");
    expect(match[1]).toBeFalsy();
  })

  it('should not match a string with no punctuation at all', function() {
    var match = "སངས".match(TibetanRegExps.punctuation);
    expect(match).toBeFalsy();
  })

})

describe('TibetanRegExps.endPunctuation', function() {

  it('should match a string with punctuation at the beginning and return one group', function() {
    var match = "༄༅སངས་རྒྱས་་་".match(TibetanRegExps.endPunctuation);
    expect(match[0]).toEqual("་་་");
    expect(match[1]).toBeFalsy();
  })

  it('should not match a string with no punctuation at all', function() {
    var match = "སངས".match(TibetanRegExps.punctuation);
    expect(match).toBeFalsy();
  })

})