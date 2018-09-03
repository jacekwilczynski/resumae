import * as React from 'react';
import { Consumer } from 'contexts/language';
import ExpandButton from 'components/ExpandButton';

const LanguageSensitiveExpandButton: React.SFC<any> = props => (
  <Consumer>
    {({ expand }) => <ExpandButton {...props}>{expand}</ExpandButton>}
  </Consumer>
);

export default LanguageSensitiveExpandButton;
