import * as React from 'react';

export interface SubsectionLeftProps {
  time?: string;
  location?: string;
}

const SubsectionLeft: React.SFC<SubsectionLeftProps> = ({ time, location }) => (
  <div className="subsection__time-location">
    {time && <p className="subsection__time">{time.replace(/-/g, ' – ')}</p>}
    {location && <p className="subsection__location">{location}</p>}
  </div>
);

export default SubsectionLeft;
