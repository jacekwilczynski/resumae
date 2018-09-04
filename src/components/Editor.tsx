import * as React from 'react';
import MonacoEditor from 'react-monaco-editor';

export interface EditorProps {
  visible: boolean;
  value: string;
  onChange: (newValue: string) => void;
  height: number;
  width: number;
}

class Editor extends React.Component<EditorProps> {
  shouldComponentUpdate(nextProps: EditorProps) {
    return this.props.visible || nextProps.visible;
  }

  render() {
    const { visible, value, onChange, height, width } = this.props;
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
        />
      </div>
    );
  }
}

export default Editor;
