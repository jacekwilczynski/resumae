import * as React from 'react';

const prefixes = {
  www: '',
  email: 'mailto:',
  phone: 'tel:'
};

const regExp = /(.*)\[(www|email|phone):(.*)](.*)/;

/**
 * @function parseLinks
 *
 * Converts a string into a React element, parsing custom link tags as anchors.
 * [www:https://github.com/] -> <a href="https://github.com/">github.com</a>
 * [email:someone@provider.net] -> <a href="mailto:someone@provider.net">someone@provider.net</a>
 * [phone:987654321] -> <a href="tel:987654321">987654321</a>
 *
 * @param {string} str
 * @returns {React.ReactElement}
 */
const parseLinks = (str: string): React.ReactElement<any> => {
  const anchorMatch = regExp.exec(str);
  if (anchorMatch) {
    const [, before, type, url, after] = anchorMatch;
    const shortUrl = url.replace(/^.*:\/\//, '').replace(/\/$/, '');
    return (
      <React.Fragment>
        {parseLinks(before)}
        <a href={prefixes[type] + url}>{shortUrl}</a>
        {after}
      </React.Fragment>
    );
  }
  return <React.Fragment>{str}</React.Fragment>;
};

export default parseLinks;
