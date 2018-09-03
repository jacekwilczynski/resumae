import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import 'styles/index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Route
      path="/render/:source?"
      render={({ match }) => (
        <App
          resumeUrl={
            match.params.source || `${process.env.PUBLIC_URL}/resume.yaml`
          }
        />
      )}
    />
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
