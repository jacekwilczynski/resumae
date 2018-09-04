import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import AppContainer from './containers/AppContainer';
import 'styles/index.css';

ReactDOM.render(
  <AppContainer sampleResumeUrl={`${process.env.PUBLIC_URL}/resume.yaml`} />,
  document.getElementById('root')
);
registerServiceWorker();
