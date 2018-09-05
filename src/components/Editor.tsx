import * as React from 'react';
import MonacoEditor, { EditorDidMount } from 'react-monaco-editor';

export interface EditorProps {
  visible: boolean;
  value: string;
  onChange: (newValue: string) => void;
  height: number;
  width: number;
  editorDidMount: EditorDidMount;
}

class Editor extends React.Component<EditorProps> {
  render() {
    const {
      visible,
      value,
      onChange,
      height,
      width,
      editorDidMount
    } = this.props;
    return (
      <div
        className={
          'resumae__editor' + (visible ? '' : ' resumae__editor--hidden')
        }
      >
        <MonacoEditor
          language="yaml"
          theme="vs-dark"
          height={height}
          width={width}
          value={value}
          onChange={onChange}
          options={{
            wordWrap: 'bounded',
            wrappingIndent: 'indent',
            scrollBeyondLastLine: false
          }}
          editorDidMount={editorDidMount}
        />
      </div>
    );
  }
}

export default Editor;
