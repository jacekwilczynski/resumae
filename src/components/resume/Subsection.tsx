import * as React from 'react';
import List from '../List';
import Text from '../Text';
import TwoColumnLayout from '../TwoColumnLayout';

const Expand: React.SFC<any> = props => (
  <button className="subsection__expand" {...props}>
    Expand
  </button>
);

const getPlainBody = (
  text?: string,
  list?: string[]
): React.ReactNode | null => {
  if (text) return <Text>{text}</Text>;
  if (list) return <List items={list} />;
  return null;
};

export interface SubsectionProps {
  post?: string;
  company?: string;
  time?: string;
  location?: string;
  text?: string;
  list?: string[];
  folded?: boolean;
}

type SubsectionState = {
  folded: boolean;
};

class Subsection extends React.Component<SubsectionProps, SubsectionState> {
  state: SubsectionState;

  constructor(props: SubsectionProps) {
    super(props);
    this.state = {
      folded: !!props.folded
    };
  }

  toggle = () => {
    this.setState(state => ({ folded: !state.folded }));
  };

  render() {
    const { company, list, location, post, text, time } = this.props;
    const { folded } = this.state;
    return (
      <div className="subsection">
        <TwoColumnLayout
          leftContent={
            <React.Fragment>
              <div className="subsection__time-location">
                {time && (
                  <p className="subsection__time">
                    {time.replace(/-/g, ' – ')}
                  </p>
                )}
                {location && <p className="subsection__location">{location}</p>}
              </div>
            </React.Fragment>
          }
          rightContent={
            <React.Fragment>
              <div className="subsection__header">
                <h3 className="subsection__post">{post}</h3>
                <h4 className="subsection__company">{company}</h4>
              </div>
              {folded ? <Expand onClick={this.toggle} /> : null}
              <div
                className={`subsection__body${
                  folded ? ' subsection__body--folded' : ''
                }`}
              >
                {getPlainBody(text, list)}
              </div>
            </React.Fragment>
          }
        />
      </div>
    );
  }
}

export default Subsection;
