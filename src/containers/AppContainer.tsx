import * as React from 'react';
import Resume from 'components/Resume';
import Editor from 'components/Editor';
import getResumeData from 'utils/getResumeData';
import calcEditorWidth from 'utils/calcEditorWidth';
import ScrollPositionRetainer from 'utils/ScrollPositionRetainer';
import getInitialYamlData from 'utils/getInitialYamlData';
import App from 'components/App';
import { EditorDidMount } from 'react-monaco-editor';

interface AppProps {
  sampleResumeUrl: string;
}

interface AppState {
  yamlData: string;
  resizing: boolean;
  showEditor: boolean;
}

class AppContainer extends React.Component<AppProps, AppState> {
  state = {
    yamlData: '',
    resizing: false,
    showEditor: true
  };

  editor: any;
  resumePreviewRef = React.createRef();
  scrollPositionRetainer = new ScrollPositionRetainer(this.resumePreviewRef);

  handleChange = (yamlData: string) => {
    window.localStorage.setItem('resumae', yamlData);
    this.setState({ yamlData });
  };

  handleWindowResize = () => {
    this.setState({ resizing: true });
    setTimeout(() => {
      this.setState({ resizing: false });
    }, 100);
    this.forceUpdate();
  };

  handleKeyDown = () => {
    if (this.editor && typeof this.editor.focus === 'function') {
      this.editor.focus();
    }
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

  private editorDidMount: EditorDidMount = editor => {
    this.editor = editor;
  };

  componentDidMount() {
    getInitialYamlData({ sampleResumeUrl: this.props.sampleResumeUrl }).then(
      yamlData => {
        this.setState({ yamlData });
      }
    );
    window.addEventListener('resize', this.handleWindowResize);
    window.addEventListener('keyup', this.handleKeyUp);
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
    window.removeEventListener('keyup', this.handleKeyUp);
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    return (
      <App split={this.state.showEditor} resizing={this.state.resizing}>
        <Editor
          visible={this.state.showEditor}
          value={this.state.yamlData}
          onChange={this.handleChange}
          height={window.innerHeight}
          width={calcEditorWidth()}
          editorDidMount={this.editorDidMount}
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
