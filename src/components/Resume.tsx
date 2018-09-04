import * as React from 'react';
import Header from './resume/Header';
import Section, { SectionProps } from './resume/Section';

export interface ResumeProps {
  name: string;
  contactInfo: string[];
  sections: SectionProps[];
}

const Resume: React.SFC<ResumeProps> = ({ name, contactInfo, sections }) => (
  <div className="resumae__preview">
    <Header caption={name} list={contactInfo} />
    {Array.isArray(sections) &&
      sections.map(section => <Section key={section.title} {...section} />)}
  </div>
);

export default Resume;
