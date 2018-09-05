import * as React from 'react';

export interface AppProps {
  resizing: boolean;
}

const App: React.SFC<AppProps> = ({ resizing, children }) => (
  <div className={'resumae' + (resizing ? ' resumae--resizing' : '')}>
    {children}
  </div>
);

export default App;
