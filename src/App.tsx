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
    const fromLocalStorage = window.localStorage.getItem('resumae');
    if (!fromLocalStorage) {
      fetch(this.props.resumeUrl)
        .then(res => res.text())
        .then(yamlData => {
          this.setState({ yamlData });
        });
    } else {
      this.setState({ yamlData: fromLocalStorage });
    }
    window.addEventListener('resize', this.handleWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
  }

  handleChange = (yamlData: string) => {
    window.localStorage.setItem('resumae', yamlData);
    this.setState({ yamlData });
  };

  handleWindowResize = () => {
    this.forceUpdate();
  };

  render() {
    let resumeData: any;
    try {
      resumeData = parseYaml(this.state.yamlData);
    } catch (e) {
      resumeData = {
        name: e.message,
        contactInfo: [],
        sections: []
      };
    }
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
        {this.state.yamlData && <Resume {...resumeData} />}
      </div>
    );
  }
}

export default App;
