import * as React from 'react';
import Container from 'components/Container';
import Header from './resume/Header';
import Section, { SectionProps } from './resume/Section';

export interface ResumeProps {
  name: string;
  contactInfo: string[];
  sections: SectionProps[];
}

const Resume: React.SFC<ResumeProps> = ({ name, contactInfo, sections }) => (
  <Container>
    <Header caption={name} list={contactInfo} />
    {sections.map(section => (
      <Section key={section.title} {...section} />
    ))}
  </Container>
);

export default Resume;
