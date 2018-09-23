import * as React from 'react';
import Resume from 'components/Resume';
import Editor from 'components/Editor';
import getResumeData from 'utils/getResumeData';
import getInitialYamlData from 'utils/getInitialYamlData';
import App from 'components/App';
import { EditorDidMount } from 'react-monaco-editor';
import Swipe from 'containers/Swipe';
import Hint from '../components/Hint';

interface AppProps {
  resumeUrl: string;
}

interface AppState {
  yamlData: string;
  resizing: boolean;
  showEditor: boolean;
  hint: {
    text: string;
    visible: boolean;
  };
}

class AppContainer extends React.Component<AppProps, AppState> {
  state = {
    yamlData: '',
    resizing: false,
    showEditor: true,
    hint: {
      text: '',
      visible: false
    }
  };

  editor?: { focus: VoidFunction };
  resumePreviewRef = React.createRef();

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

  handleKeyUp = (e: KeyboardEvent) => {
    if (e.key === 's' && e.ctrlKey && e.altKey) this.toggleEditor();
  };

  handleFirstTouch = () => {
    this.showSwipeHint();
    window.removeEventListener('touchstart', this.handleFirstTouch, {
      capture: true
    });
  };

  private toggleEditor = () => this.setEditorVisibility(!this.state.showEditor);
  private showEditor = () => this.setEditorVisibility(true);
  private hideEditor = () => this.setEditorVisibility(false);

  private editorDidMount: EditorDidMount = editor => {
    this.editor = editor;
  };

  handleFirstKey = () => {
    this.showToggleHint();
    window.removeEventListener('keydown', this.handleFirstKey, {
      capture: true
    });
  };

  componentDidMount() {
    this.loadInitialData();
    window.addEventListener('resize', this.handleWindowResize);
    window.addEventListener('keyup', this.handleKeyUp);
    window.addEventListener('touchstart', this.handleFirstTouch, {
      capture: true
    });
    window.addEventListener('keydown', this.handleFirstKey, {
      capture: true
    });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
    window.removeEventListener('keyup', this.handleKeyUp);
    window.removeEventListener('touchstart', this.handleFirstTouch, {
      capture: true
    });
    window.removeEventListener('keydown', this.handleFirstKey, {
      capture: true
    });
  }

  render() {
    return (
      <Swipe onSwipeLeft={this.hideEditor} onSwipeRight={this.showEditor}>
        {swipeHandlers => (
          <App resizing={this.state.resizing} {...swipeHandlers}>
            <Editor
              visible={this.state.showEditor}
              value={this.state.yamlData}
              onChange={this.handleChange}
              editorDidMount={this.editorDidMount}
            >
              <Hint visible={this.state.hint.visible} onClick={this.hideHint}>
                {this.state.hint.text}
              </Hint>
            </Editor>
            <Resume
              {...getResumeData(this.state.yamlData)}
              innerRef={this.resumePreviewRef}
            />
          </App>
        )}
      </Swipe>
    );
  }

  private showSwipeHint() {
    this.showHint('Swipe left/right to hide/show the editor.');
  }

  private showToggleHint() {
    this.showHint('Press Ctrl+Alt+S to toggle the editor.');
  }

  private showHint(text: string) {
    this.setState({ hint: { text, visible: true } });
    setTimeout(this.hideHint, 8000);
  }

  private hideHint = () => {
    this.setState(({ hint }) => ({ hint: { ...hint, visible: false } }));
  };

  private loadInitialData() {
    getInitialYamlData({ url: this.props.resumeUrl }).then(
      yamlData => {
        this.setState({ yamlData });
      }
    );
  }

  private setEditorVisibility(showEditor: boolean) {
    if (this.editor && showEditor) this.editor.focus();
    if (!showEditor) this.hideHint();
    this.setState({ showEditor });
  }
}

export default AppContainer;
