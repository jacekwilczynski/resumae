import * as React from 'react';

const ExpandButton: React.SFC<any> = props => (
  <button className="subsection__expand" {...props}>
    {props.children}
  </button>
);

export default ExpandButton;
