import * as React from 'react';
import Resume from 'components/Resume';
import { safeLoad as parseYaml } from 'js-yaml';
import MonacoEditor from 'react-monaco-editor';

interface AppProps {
  resumeUrl: string;
}

interface AppState {
  yamlData: string;
}

class App extends React.Component<AppProps, AppState> {
  state = {
    yamlData: ''
  };

  componentDidMount() {
    fetch(this.props.resumeUrl)
      .then(res => res.text())
      .then(yamlData => {
        this.setState({ yamlData });
      });
  }

  handleChange = (yamlData: string) => {
    this.setState({ yamlData });
  };

  render() {
    return (
      <div style={{ display: 'flex' }}>
        <div className="screen-only">
          <MonacoEditor
            language="yaml"
            theme="vs-dark"
            height={window.innerHeight}
            width={window.innerWidth / 2}
            value={this.state.yamlData}
            onChange={this.handleChange}
          />
        </div>
        {this.state.yamlData && <Resume {...parseYaml(this.state.yamlData)} />}
      </div>
    );
  }
}

export default App;
