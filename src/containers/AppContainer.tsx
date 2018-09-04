import * as React from 'react';
import Resume from 'components/Resume';
import Editor from 'components/Editor';
import getResumeData from 'utils/getResumeData';
import calcEditorWidth from 'utils/calcEditorWidth';
import ScrollPositionRetainer from 'utils/ScrollPositionRetainer';
import getInitialYamlData from 'utils/getInitialYamlData';
import App from 'components/App';

interface AppProps {
  sampleResumeUrl: string;
}

interface AppState {
  yamlData: string;
  showEditor: boolean;
}

class AppContainer extends React.Component<AppProps, AppState> {
  state = {
    yamlData: '',
    showEditor: true
  };

  resumePreviewRef = React.createRef();
  scrollPositionRetainer = new ScrollPositionRetainer(this.resumePreviewRef);

  handleChange = (yamlData: string) => {
    window.localStorage.setItem('resumae', yamlData);
    this.setState({ yamlData });
  };

  handleWindowResize = () => {
    this.forceUpdate();
  };

  handleKeyUp = (e: KeyboardEvent) => {
    if (e.key === 's' && e.ctrlKey && e.altKey) this.toggleEditor();
  };

  private toggleEditor = () => {
    this.scrollPositionRetainer.run({
      goingToFullScreen: this.state.showEditor
    });
    this.setState(state => ({
      ...state,
      showEditor: !this.state.showEditor
    }));
  };

  componentDidMount() {
    getInitialYamlData({ sampleResumeUrl: this.props.sampleResumeUrl }).then(
      yamlData => {
        this.setState({ yamlData });
      }
    );
    window.addEventListener('resize', this.handleWindowResize);
    window.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
    window.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    return (
      <App split={this.state.showEditor}>
        <Editor
          showEditor={this.state.showEditor}
          value={this.state.yamlData}
          onChange={this.handleChange}
          height={window.innerHeight}
          width={calcEditorWidth()}
        />
        <Resume
          {...getResumeData(this.state.yamlData)}
          innerRef={this.resumePreviewRef}
        />
      </App>
    );
  }
}

export default AppContainer;
