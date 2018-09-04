import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import 'styles/index.css';
import store from 'store';
import { loadYaml } from './actions';

const resumeUrl = `${process.env.PUBLIC_URL}/resume.yaml`;

ReactDOM.render(<App resumeUrl={resumeUrl} />, document.getElementById('root'));

store().dispatch(loadYaml({ url: resumeUrl }));

registerServiceWorker();
