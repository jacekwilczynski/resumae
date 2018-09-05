import * as React from 'react';
import MonacoEditor, { EditorDidMount } from 'react-monaco-editor';
import calcEditorWidth from 'utils/calcEditorWidth';

export interface EditorProps {
  visible: boolean;
  value: string;
  onChange: (newValue: string) => void;
  editorDidMount: EditorDidMount;
}

const Editor: React.SFC<EditorProps> = ({
  visible,
  value,
  onChange,
  editorDidMount
}) => (
  <div
    className={'resumae__editor' + (visible ? '' : ' resumae__editor--hidden')}
  >
    <MonacoEditor
      language="yaml"
      theme="vs-dark"
      height={window.innerHeight}
      width={calcEditorWidth()}
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

export default Editor;
