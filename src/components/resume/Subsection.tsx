import * as React from 'react';
import TwoColumnLayout from 'components/TwoColumnLayout';
import LanguageSensitiveExpandButton from 'containers/LanguageSensitiveExpandButton';
import getPlainBody from 'utils/getPlainBody';

export interface SubsectionProps {
  post?: string;
  company?: string;
  time?: string;
  location?: string;
  text?: string;
  list?: string[];
  folded?: boolean;
  onExpandClick: React.MouseEventHandler;
}

const Subsection: React.SFC<SubsectionProps> = ({
  company,
  list,
  location,
  post,
  text,
  time,
  folded,
  onExpandClick
}) => (
  <div className="subsection">
    <TwoColumnLayout
      leftContent={
        <React.Fragment>
          <div className="subsection__time-location">
            {time && (
              <p className="subsection__time">{time.replace(/-/g, ' – ')}</p>
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
          {folded ? (
            <LanguageSensitiveExpandButton onClick={onExpandClick} />
          ) : null}
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

export default Subsection;
