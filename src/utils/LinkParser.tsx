import * as React from 'react';

const regExp = /(.*)\[(\w+:\/*)(.*)](.*)/;

interface LinkParserProps {
  str: string;
}

/**
 * @function parseLinks
 *
 * Converts a string into a React element, parsing custom link tags as anchors that will open in a new browser window/tab.
 * [https://github.com/] -> <a href="https://github.com/" ...>github.com</a>
 * [mailto:someone@provider.net] -> <a href="mailto:someone@provider.net" ...>someone@provider.net</a>
 * [tel:987654321] -> <a href="tel:987654321" ...>987654321</a>
 *
 * @param {string} str
 * @returns {React.ReactElement}
 */
const LinkParser: React.SFC<LinkParserProps> = ({ str }: LinkParserProps) => {
  const anchorMatch = regExp.exec(str);
  if (anchorMatch) {
    const [, before, prefix, url, after] = anchorMatch;
    const trimmedUrl = url.replace(/\/$/, '');
    return (
      <>
        {LinkParser({ str: before })}
        <a href={prefix + url} target="_blank" rel="noopener noreferrer">
          {trimmedUrl}
        </a>
        {after}
      </>
    );
  }
  return <>{str}</>;
};

export default LinkParser;
