import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import './styles/index.css';

ReactDOM.render(
  <App resumeUrl={`${process.env.PUBLIC_URL}/resume.yaml`} />,
  document.getElementById('root')
);
registerServiceWorker();
