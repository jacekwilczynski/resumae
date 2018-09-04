import * as React from 'react';
import MonacoEditor from 'react-monaco-editor';

export interface EditorProps {
  showEditor: boolean;
  value: string;
  onChange: (newValue: string) => void;
  height: number;
  width: number;
}

const Editor = ({
  showEditor,
  value,
  onChange,
  height,
  width
}: EditorProps) => (
  <div
    className={
      'resumae__editor' + (showEditor ? '' : ' resumae__editor--hidden')
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
    />
  </div>
);

export default Editor;
