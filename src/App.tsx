import * as React from 'react';
import Resume from 'components/Resume';
import Editor from 'components/Editor';
import getResumeData from 'utils/getResumeData';
import calcEditorWidth from 'utils/calcEditorWidth';
import ScrollPositionRetainer from './utils/ScrollPositionRetainer';

interface AppProps {
  resumeUrl: string;
}

interface AppState {
  yamlData: string;
  showEditor: boolean;
}

class App extends React.Component<AppProps, AppState> {
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

  componentDidMount() {
    this.hydrate();
    window.addEventListener('resize', this.handleWindowResize);
    window.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
    window.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    return (
      <div
        className={'resumae' + (this.state.showEditor ? ' resumae--split' : '')}
      >
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
        )
      </div>
    );
  }

  private toggleEditor = () => {
    if (this.state.showEditor) {
      this.scrollPositionRetainer.copyScrollPositionToWindow();
    } else {
      this.scrollPositionRetainer.copyScrollPositionFromWindow();
    }
    this.setState(state => ({
      ...state,
      showEditor: !this.state.showEditor
    }));
  };

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
}

export default App;
