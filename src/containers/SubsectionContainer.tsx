import Subsection from '../components/resume/Subsection';
import * as React from 'react';

export interface SubsectionContainerProps {
  post?: string;
  company?: string;
  time?: string;
  location?: string;
  text?: string;
  list?: string[];
  folded?: boolean;
}

interface SubsectionContainerState {
  folded?: boolean;
}

class SubsectionContainer extends React.Component<
  SubsectionContainerProps,
  SubsectionContainerState
> {
  state = {
    folded: this.props.folded
  };

  toggle = () => {
    this.setState(state => ({ folded: !state.folded }));
  };

  render() {
    return (
      <Subsection
        {...this.props}
        folded={this.state.folded}
        onExpandClick={this.toggle}
      />
    );
  }
}

export default SubsectionContainer;
