import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import 'styles/index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { parse } from 'query-string';

ReactDOM.render(
  <Router>
    <Route
      path="/render"
      render={({ location }) => {
        const { resume } = parse(location.search);
        return (
          <App resumeUrl={resume || `${process.env.PUBLIC_URL}/resume.yaml`} />
        );
      }}
    />
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
