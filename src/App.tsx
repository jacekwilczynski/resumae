import * as React from 'react';
import Resume, { ResumeProps } from 'components/Resume';
import * as yaml from 'js-yaml';
import MonacoEditor from 'react-monaco-editor';

interface AppProps {
  resumeUrl: string;
}

interface AppState {
  resumeData: ResumeProps;
}

class App extends React.Component<AppProps, AppState> {
  state = {
    resumeData: {
      name: '',
      contactInfo: [],
      sections: []
    }
  };

  componentDidMount() {
    fetch(this.props.resumeUrl)
      .then(res => res.text())
      .then(yaml.safeLoad)
      .then(resumeData => {
        this.setState({ resumeData });
      });
  }

  render() {
    return (
      <div style={{ display: 'flex' }}>
        <MonacoEditor
          language="yaml"
          theme="vs-dark"
          height={window.innerHeight}
          width={window.innerWidth / 2}
        />
        <Resume {...this.state.resumeData} />
      </div>
    );
  }
}

export default App;
