import * as React from 'react';

const regExp = /(.*)\[(\w+:\/*)(.*)](.*)/;

export interface TextWithCustomTagsProps {
  children: string;
}

/**
 * @function TextWithCustomTags
 *
 * Converts a string into a React element, parsing custom link tags as anchors that will open in a new browser window/tab.
 * [https://github.com/] -> <a href="https://github.com/" ...>github.com</a>
 * [mailto:someone@provider.net] -> <a href="mailto:someone@provider.net" ...>someone@provider.net</a>
 * [tel:987654321] -> <a href="tel:987654321" ...>987654321</a>
 *
 * @param {string} children
 * @returns {React.ReactElement}
 */
const TextWithCustomTags: React.SFC<TextWithCustomTagsProps> = ({
  children
}) => {
  const anchorMatch = regExp.exec(children);
  if (anchorMatch) {
    const [, before, prefix, url, after] = anchorMatch;
    const trimmedUrl = url.replace(/\/$/, '');
    return (
      <>
        {/* Calls itself as a function to prevent unnecessary React element nesting */}
        {TextWithCustomTags({ children: before })}
        <a href={prefix + url} target="_blank" rel="noopener noreferrer">
          {trimmedUrl}
        </a>
        {after}
      </>
    );
  }
  return <>{children}</>;
};

export default TextWithCustomTags;
