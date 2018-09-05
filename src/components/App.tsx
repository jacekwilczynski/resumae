import * as React from 'react';

export interface AppProps {
  resizing: boolean;
  split: boolean;
}

const App: React.SFC<AppProps> = ({ resizing, split, children }) => (
  <div
    className={
      'resumae' +
      (split ? ' resumae--split' : '') +
      (resizing ? ' resumae--resizing' : '')
    }
  >
    {children}
  </div>
);

export default App;
