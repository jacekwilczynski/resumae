import * as React from 'react';

export interface AppProps {
  resizing: boolean;
}

const App: React.SFC<AppProps> = ({ resizing, children, ...otherProps }) => (
  <div
    className={'resumae' + (resizing ? ' resumae--resizing' : '')}
    {...otherProps}
  >
    {children}
  </div>
);

export default App;
