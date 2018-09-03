import * as React from 'react';
import Resume, { ResumeProps } from 'components/Resume';
import * as yaml from 'js-yaml';

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
    return <Resume {...this.state.resumeData} />;
  }
}

export default App;
