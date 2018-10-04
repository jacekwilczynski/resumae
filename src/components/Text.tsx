import * as React from 'react';
import TextWithCustomTags from 'containers/TextWithCustomTags';

export interface TextProps {
  children: string | string[];
}

const Text: React.SFC<TextProps> = ({ children }) => {
  const paragraphs = (Array.isArray(children)
    ? children
    : [children]) as string[];
  return (
    <React.Fragment>
      {paragraphs.map(paragraph => (
        <p className="text">
          <TextWithCustomTags>{paragraph}</TextWithCustomTags>
        </p>
      ))}
    </React.Fragment>
  );
};

export default Text;
