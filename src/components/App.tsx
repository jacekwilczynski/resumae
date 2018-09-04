import * as React from 'react';

export interface AppProps {
  split: boolean;
}

const App: React.SFC<AppProps> = ({ split, children }) => (
  <div className={'resumae' + (split ? ' resumae--split' : '')}>{children}</div>
);

export default App;
