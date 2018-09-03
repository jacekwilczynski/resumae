import * as React from 'react';
import parseLinks from 'utils/parseLinks';

export interface ResumaeTextProps {
  children: string;
}

class ResumaeText extends React.PureComponent<ResumaeTextProps> {
  render() {
    return parseLinks(this.props.children);
  }
}

export default ResumaeText;
