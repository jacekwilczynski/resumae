import * as React from 'react';
import Header, { HeaderProps } from './resume/Header';
import Section, { SectionProps } from './resume/Section';

export interface ResumeProps extends HeaderProps {
  sections: SectionProps[];
  innerRef?: React.Ref<any>;
}

const Resume: React.SFC<ResumeProps> = ({
  sections,
  innerRef,
  ...headerProps
}) => (
  <div className="resumae__preview" ref={innerRef}>
    <div className="resumae__container">
      <Header {...headerProps} />
      {Array.isArray(sections) &&
        sections.map(
          section => section && <Section key={section.title} {...section} />
        )}
    </div>
  </div>
);

export default Resume;
