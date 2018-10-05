import * as React from 'react';

export interface SubsectionLeftProps {
  time?: string;
  location?: string;
}

const SubsectionLeft: React.SFC<SubsectionLeftProps> = ({ time, location }) => (
  <div className="subsection__time-location">
    {typeof time === 'string' && (
      <p className="subsection__time">{time.replace(/-/g, ' – ')}</p>
    )}
    {typeof location === 'string' && (
      <p className="subsection__location">{location}</p>
    )}
  </div>
);

export default SubsectionLeft;
