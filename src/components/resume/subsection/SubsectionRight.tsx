import * as React from 'react';
import LanguageSensitiveExpandButton from 'containers/LanguageSensitiveExpandButton';
import PlainResumeContent from 'containers/PlainResumeContent';
import TextWithCustomTags from '../../../containers/TextWithCustomTags';

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
      <h3 className="subsection__post">
        {typeof post === 'string' && (
          <TextWithCustomTags>{post}</TextWithCustomTags>
        )}
      </h3>
      <h4 className="subsection__company">
        {typeof company === 'string' && (
          <TextWithCustomTags>{company}</TextWithCustomTags>
        )}
      </h4>
    </div>
    {folded ? <LanguageSensitiveExpandButton onClick={onExpandClick} /> : null}
    <div
      className={`subsection__body${folded ? ' subsection__body--folded' : ''}`}
    >
      {<PlainResumeContent maybeText={text} maybeList={list} />}
    </div>
  </React.Fragment>
);

export default SubsectionRight;
