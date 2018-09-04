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

  handleChange = (yamlData: string) => {
    window.localStorage.setItem('resumae', yamlData);
    this.setState({ yamlData });
  };

  handleWindowResize = () => {
    this.forceUpdate();
  };

  componentDidMount() {
    this.hydrate();
    window.addEventListener('resize', this.handleWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
  }

  render() {
    return (
      <div style={{ display: 'flex' }}>
        {this.renderEditor()}
        {this.state.yamlData && <Resume {...this.getResumeData()} />}
      </div>
    );
  }

  private hydrate() {
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
  }

  private renderEditor() {
    return (
      <div className="screen-only">
        <MonacoEditor
          language="yaml"
          theme="vs-dark"
          height={window.innerHeight}
          width={window.innerWidth / 2}
          value={this.state.yamlData}
          onChange={this.handleChange}
          options={{
            wordWrap: 'bounded',
            wrappingIndent: 'indent',
            scrollBeyondLastLine: false
          }}
        />
      </div>
    );
  }

  private getResumeData() {
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
    return resumeData;
  }
}

export default App;
