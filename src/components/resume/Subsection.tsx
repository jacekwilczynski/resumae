import * as React from 'react';
import TwoColumnLayout from 'components/TwoColumnLayout';
import SubsectionLeft, {
  SubsectionLeftProps
} from './subsection/SubsectionLeft';
import SubsectionRight, {
  SubsectionRightProps
} from './subsection/SubsectionRight';

export interface SubsectionProps
  extends SubsectionLeftProps,
    SubsectionRightProps {}

const Subsection: React.SFC<SubsectionProps> = props => (
  <div className="subsection">
    <TwoColumnLayout
      leftContent={<SubsectionLeft {...props} />}
      rightContent={<SubsectionRight {...props} />}
    />
  </div>
);

export default Subsection;
