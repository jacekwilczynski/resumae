import * as React from 'react';
import LanguageSensitiveExpandButton from 'containers/LanguageSensitiveExpandButton';
import PlainResumeContent from 'containers/PlainResumeContent';
import TextWithCustomTags from 'containers/TextWithCustomTags';
import Image, { ImageProps } from 'components/Image';

export interface SubsectionRightProps {
  post?: string;
  company?: string;
  text?: string;
  list?: string[];
  image?: ImageProps;
  folded?: boolean;
  onExpandClick: React.MouseEventHandler;
}

const SubsectionRight: React.SFC<SubsectionRightProps> = ({
  post,
  company,
  folded,
  onExpandClick,
  text,
  list,
  image
}) => (
  <React.Fragment>
    <div className="subsection__header">
      {image && <Image {...image} float={true} />}
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
