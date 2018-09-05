import * as React from 'react';

interface HintProps extends React.HTMLProps<any> {
  visible: boolean;
}

const Hint: React.SFC<HintProps> = ({ children, visible, ...otherProps }) => (
  <div
    className={
      'resumae__hint resumae__hint--bright' +
      (visible ? '' : ' resumae__hint--hidden')
    }
    {...otherProps}
  >
    {children}
  </div>
);

export default Hint;
