import * as React from 'react';
import LinkParser from './LinkParser';
import { renderToStaticMarkup } from 'react-dom/server';

const parseToString = (input: string) =>
  renderToStaticMarkup(<LinkParser str={input} />);

const link = ({ href, text }: { href: string; text: string }) =>
  `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;

describe('given plain maybeText', function() {
  it('should return a string', function() {
    const text = 'Abcd 1234 efgh.';
    expect(parseToString(text)).toEqual(text);
  });
});

describe('given a www tag', function() {
  describe('without any surrounding maybeText', function() {
    const input = '[https://github.com/]';
    const expected = link({
      href: 'https://github.com/',
      text: 'github.com'
    });
    const actual = parseToString(input);

    it('should return an anchor React element displaying trimmed url', function() {
      expect(actual).toEqual(expected);
    });
  });

  describe('with surrounding maybeText', function() {
    const input = 'text before [http://example.org] text after';
    const expected = `text before ${link({
      href: 'http://example.org',
      text: 'example.org'
    })} text after`;
    const actual = parseToString(input);

    it('should render the link surrounded by the maybeText', function() {
      expect(actual).toEqual(expected);
    });
  });
});

describe('given two www tags surrounded by maybeText', function() {
  const input = 'page 1 [http://abc.com]page2[https://abc.net/] end';
  const expected = `page 1 ${link({
    href: 'http://abc.com',
    text: 'abc.com'
  })}page2${link({ href: 'https://abc.net/', text: 'abc.net' })} end`;
  const actual = parseToString(input);

  it('should render both anchors with surrounded by maybeText', function() {
    expect(actual).toEqual(expected);
  });
});

describe('given an email tag', function() {
  const input = 'my e-mail address is [mailto:john_doe@mail.com]!';
  const expected = `my e-mail address is ${link({
    href: 'mailto:john_doe@mail.com',
    text: 'john_doe@mail.com'
  })}!`;
  const actual = parseToString(input);

  it('should render an anchor with a mailto href', function() {
    expect(actual).toEqual(expected);
  });
});

describe('given a phone tag', function() {
  const input = 'You can get hold of me at [tel:123456789]';
  const expected = `You can get hold of me at ${link({
    href: 'tel:123456789',
    text: '123456789'
  })}`;
  const actual = parseToString(input);

  it('should render an anchor with a tel href', function() {
    expect(actual).toEqual(expected);
  });
});
