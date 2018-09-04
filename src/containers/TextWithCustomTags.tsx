import * as React from 'react';
import LinkParser from 'utils/LinkParser';

export interface ResumaeTextProps {
  children: string;
}

class TextWithCustomTags extends React.PureComponent<ResumaeTextProps> {
  render() {
    return LinkParser({ str: this.props.children });
  }
}

export default TextWithCustomTags;
