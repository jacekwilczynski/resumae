import * as React from 'react';
import TextWithCustomTags from 'containers/TextWithCustomTags';

export interface TextProps {
  children: string;
}

const Text: React.SFC<TextProps> = ({ children }) => (
  <p className="text">
    <TextWithCustomTags>{children}</TextWithCustomTags>
  </p>
);

export default Text;
