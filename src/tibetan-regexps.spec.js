import TibetanRegExps from './tibetan-regexps.js';

describe('TibetanRegExps.onlyTibetanWithSpaces', () => {

  it('should match a Tibetan only string without spaces', () => {
    expect("སངས་རྒྱས་".match(TibetanRegExps.onlyTibetanWithSpaces)).toBeTruthy();
  })

  it('should match a Tibetan only string with spaces', () => {
    expect("སངས་རྒྱས། ཆོས། དགེ་འདུན།".match(TibetanRegExps.onlyTibetanWithSpaces)).toBeTruthy();
  })

  it('should not match a string with mixed Tibetan and Latin', () => {
    expect("Buddha: སངས་རྒྱས་".match(TibetanRegExps.onlyTibetanWithSpaces)).toBeFalsy();
  })

  it('should not match a string no Tibetan at all', () => {
    expect("Buddha".match(TibetanRegExps.onlyTibetanWithSpaces)).toBeFalsy();
  })

})

describe('TibetanRegExps.onlyTibetanWithoutSpaces', () => {

  it('should match a Tibetan only string without spaces', () => {
    expect("སངས་རྒྱས་".match(TibetanRegExps.onlyTibetanWithoutSpaces)).toBeTruthy();
  })

  it('should not match a Tibetan only string with spaces', () => {
    expect("སངས་རྒྱས། ཆོས། དགེ་འདུན།".match(TibetanRegExps.onlyTibetanWithoutSpaces)).toBeFalsy();
  })

  it('should not match a string with mixed Tibetan and Latin', () => {
    expect("Buddha: སངས་རྒྱས་".match(TibetanRegExps.onlyTibetanWithoutSpaces)).toBeFalsy();
  })

  it('should not match a string no Tibetan at all', () => {
    expect("Buddha".match(TibetanRegExps.onlyTibetanWithoutSpaces)).toBeFalsy();
  })

})

describe('TibetanRegExps.tibetanGroups', () => {

  it('should match a Tibetan only string and return one group', () => {
    var match = "སངས་རྒྱས་".match(TibetanRegExps.tibetanGroups);
    expect(match[0]).toEqual("སངས་རྒྱས་");
    expect(match[1]).toBeFalsy();
  })

  it('should match a Tibetan only string with spaces and return each group', () => {
    var match = "སངས་རྒྱས། ཆོས། དགེ་འདུན།".match(TibetanRegExps.tibetanGroups);
    expect(match[0]).toEqual("སངས་རྒྱས།");
    expect(match[1]).toEqual("ཆོས།");
    expect(match[2]).toEqual("དགེ་འདུན།");
    expect(match[3]).toBeFalsy();
  })

  it('should match a string with mixed Tibetan and non-Tibetan and return each Tibetan group', () => {
    var match = "Buddha: སངས་རྒྱས་; Dharma: ཆོས་".match(TibetanRegExps.tibetanGroups);
    expect(match[0]).toEqual("སངས་རྒྱས་");
    expect(match[1]).toEqual("ཆོས་");
    expect(match[2]).toBeFalsy();
  })

  it('should not match a string no Tibetan at all', () => {
    expect("Buddha".match(TibetanRegExps.tibetanGroups)).toBeFalsy();
  })

})

describe('TibetanRegExps.anythingNonTibetan', () => {

  it('should not match a Tibetan only string', () => {
    var match = "སངས་རྒྱས་".match(TibetanRegExps.anythingNonTibetan);
    expect(match).toBeFalsy();
  })

  it('should match a string with mixed Tibetan and non-Tibetan and return each non-Tibetan group', () => {
    var match = "Buddha: སངས་རྒྱས་; Dharma: ཆོས་".match(TibetanRegExps.anythingNonTibetan);
    expect(match[0]).toEqual("Buddha: ");
    expect(match[1]).toEqual("; Dharma: ");
    expect(match[2]).toBeFalsy();
  })

  it('should match a string with Tibetan at all', () => {
    var match = "Buddha Dharma Sangha".match(TibetanRegExps.anythingNonTibetan);
    expect(match[0]).toEqual("Buddha Dharma Sangha");
    expect(match[1]).toBeFalsy();
  })

})

describe('TibetanRegExps.punctuation', () => {

  it('should match a string with punctuation and return each group', () => {
    var match = "སངས་རྒྱས། ཆོས༑ དགེ་འདུན༎".match(TibetanRegExps.punctuation);
    expect(match[0]).toEqual("་");
    expect(match[1]).toEqual("།");
    expect(match[2]).toEqual("༑");
    expect(match[3]).toEqual("་");
    expect(match[4]).toEqual("༎");
  })

  it('should not match a string with no punctuation at all', () => {
    var match = "སངས".match(TibetanRegExps.punctuation);
    expect(match).toBeFalsy();
  })

})

describe('TibetanRegExps.beginningPunctuation', () => {

  it('should match a string with punctuation at the beginning and return one group', () => {
    var match = "༄༅སངས་རྒྱས།".match(TibetanRegExps.beginningPunctuation);
    expect(match[0]).toEqual("༄༅");
    expect(match[1]).toBeFalsy();
  })

  it('should not match a string with no punctuation at all', () => {
    var match = "སངས".match(TibetanRegExps.punctuation);
    expect(match).toBeFalsy();
  })

})

describe('TibetanRegExps.endPunctuation', () => {

  it('should match a string with punctuation at the beginning and return one group', () => {
    var match = "༄༅སངས་རྒྱས་་་".match(TibetanRegExps.endPunctuation);
    expect(match[0]).toEqual("་་་");
    expect(match[1]).toBeFalsy();
  })

  it('should not match a string with no punctuation at all', () => {
    var match = "སངས".match(TibetanRegExps.punctuation);
    expect(match).toBeFalsy();
  })

})