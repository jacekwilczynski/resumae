import * as React from 'react';

export interface ToggleChildrenProps {
  state: boolean;
  toggle: VoidFunction;
}

export interface ToggleProps {
  state?: boolean;
  children: React.ComponentType<ToggleChildrenProps>;
}

interface ToggleState {
  state: boolean;
}

class Toggle extends React.Component<ToggleProps, ToggleState> {
  state = { state: Boolean(this.props.state) };

  toggle = () => {
    this.setState(({ state }) => ({ state: !state }));
  };

  render() {
    const Component = this.props.children;
    return <Component state={this.state.state} toggle={this.toggle} />;
  }
}

export default Toggle;
