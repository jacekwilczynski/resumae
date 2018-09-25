import * as React from 'react';
import Header from './resume/Header';
import Section, { SectionProps } from './resume/Section';

export interface ResumeProps {
  name: string;
  contactInfo: string[];
  photo?: string;
  sections: SectionProps[];
  innerRef?: React.Ref<any>;
}

const Resume: React.SFC<ResumeProps> = ({
  name,
  contactInfo,
  photo,
  sections,
  innerRef
}) => (
  <div className="resumae__preview" ref={innerRef}>
    <div className="resumae__container">
      <Header caption={name} list={contactInfo} photo={photo} />
      {Array.isArray(sections) &&
        sections.map(
          section => section && <Section key={section.title} {...section} />
        )}
    </div>
  </div>
);

export default Resume;
