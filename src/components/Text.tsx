import * as React from 'react';
import ResumaeText from 'containers/ResumaeText';

export interface TextProps {
  children: string;
}

const Text: React.SFC<TextProps> = ({ children }) => (
  <p className="text">
    <ResumaeText>{children}</ResumaeText>
  </p>
);

export default Text;
