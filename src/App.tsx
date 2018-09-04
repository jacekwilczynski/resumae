import * as React from 'react';
import Resume from 'components/Resume';
import { safeLoad as parseYaml } from 'js-yaml';
import MonacoEditor from 'react-monaco-editor';

interface AppProps {
  resumeUrl: string;
}

interface AppState {
  yamlData: string;
  showEditor: boolean;
}

const getEditorWidth = () =>
  window.innerWidth > 800 ? window.innerWidth / 2 : window.innerWidth;

class App extends React.Component<AppProps, AppState> {
  state = {
    yamlData: '',
    showEditor: true
  };

  resumePreviewRef = React.createRef();

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
        {this.renderEditor()}
        {this.state.yamlData && (
          <Resume {...this.getResumeData()} innerRef={this.resumePreviewRef} />
        )}
      </div>
    );
  }

  private toggleEditor = () => {
    if (this.state.showEditor) {
      const scrollPosition =
        this.resumePreviewRef.current &&
        (this.resumePreviewRef.current as any).scrollTop;
      setImmediate(() => {
        window.scrollTo({ top: scrollPosition });
      });
    } else {
      const scrollPosition = window.scrollY;
      setImmediate(() => {
        if (this.resumePreviewRef.current) {
          (this.resumePreviewRef.current as any).scrollTop = scrollPosition;
        }
      });
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

  private renderEditor() {
    return (
      <div
        className={
          'resumae__editor' +
          (this.state.showEditor ? '' : ' resumae__editor--hidden')
        }
      >
        <MonacoEditor
          language="yaml"
          theme="vs-dark"
          height={window.innerHeight}
          width={getEditorWidth()}
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
