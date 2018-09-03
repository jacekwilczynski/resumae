import * as React from 'react';
import parseLinks from './parseLinks';
import { renderToStaticMarkup } from 'react-dom/server';

const parseToString = (input: string) =>
  renderToStaticMarkup(parseLinks(input) as React.ReactElement<any>);

describe('given plain text', function() {
  it('should return a string', function() {
    const text = 'Abcd 1234 efgh.';
    expect(parseToString(text)).toEqual(text);
  });
});

describe('given a www tag', function() {
  describe('without any surrounding text', function() {
    const input = '[www:https://github.com/]';
    const expected = '<a href="https://github.com/">github.com</a>';
    const actual = parseToString(input);

    it('should return an anchor React element displaying trimmed url', function() {
      expect(actual).toEqual(expected);
    });
  });

  describe('with surrounding text', function() {
    const input = 'text before [www:http://example.org] text after';
    const expected =
      'text before <a href="http://example.org">example.org</a> text after';
    const actual = parseToString(input);

    it('should render the link surrounded by the text', function() {
      expect(actual).toEqual(expected);
    });
  });
});

describe('given two www tags surrounded by text', function() {
  const input = 'page 1 [www:abc.com]page2[www:https://abc.net/] end';
  const expected =
    'page 1 <a href="abc.com">abc.com</a>page2<a href="https://abc.net/">abc.net</a> end';
  const actual = parseToString(input);

  it('should render both anchors with surrounded by text', function() {
    expect(actual).toEqual(expected);
  });
});

describe('given an email tag', function() {
  const input = 'my e-mail address is [email:john_doe@mail.com]!';
  const expected =
    'my e-mail address is <a href="mailto:john_doe@mail.com">john_doe@mail.com</a>!';
  const actual = parseToString(input);

  it('should render an anchor with a mailto href', function() {
    expect(actual).toEqual(expected);
  });
});

describe('given a phone tag', function() {
  const input = 'You can get hold of me at [phone:123456789]';
  const expected =
    'You can get hold of me at <a href="tel:123456789">123456789</a>';
  const actual = parseToString(input);

  it('should render an anchor with a tel href', function() {
    expect(actual).toEqual(expected);
  });
});
