import * as React from 'react';
import LanguageSensitiveExpandButton from 'containers/LanguageSensitiveExpandButton';
import getPlainBody from 'utils/getPlainBody';

export interface SubsectionRightProps {
  post?: string;
  company?: string;
  text?: string;
  list?: string[];
  folded?: boolean;
  onExpandClick: React.MouseEventHandler;
}

const SubsectionRight: React.SFC<SubsectionRightProps> = ({
  post,
  company,
  folded,
  onExpandClick,
  text,
  list
}) => (
  <React.Fragment>
    <div className="subsection__header">
      <h3 className="subsection__post">{post}</h3>
      <h4 className="subsection__company">{company}</h4>
    </div>
    {folded ? <LanguageSensitiveExpandButton onClick={onExpandClick} /> : null}
    <div
      className={`subsection__body${folded ? ' subsection__body--folded' : ''}`}
    >
      {getPlainBody(text, list)}
    </div>
  </React.Fragment>
);

export default SubsectionRight;
