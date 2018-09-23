import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from 'registerServiceWorker';
import AppContainer from 'containers/AppContainer';
import 'styles/index.css';
import { parse } from 'querystring';

const resumeUrl = parse(window.location.search.slice(1)).src as
  | string
  | undefined;

ReactDOM.render(
  <AppContainer
    resumeUrl={resumeUrl || `${process.env.PUBLIC_URL}/resume.yaml`}
  />,
  document.getElementById('root')
);
registerServiceWorker();
