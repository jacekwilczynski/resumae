import * as React from 'react';
import List from 'components/List';
import Text from 'components/Text';
import TwoColumnLayout from 'components/TwoColumnLayout';
import Subsection, { SubsectionProps } from './Subsection';

const getPlainBody = (
  text?: string,
  list?: string[]
): React.ReactNode | null => {
  if (text) return <Text>{text}</Text>;
  if (list) return <List items={list} />;
  return null;
};

const serializeSubsection = ({
  post = '',
  company = '',
  time = '',
  location = ''
}: Partial<SubsectionProps>) => post + company + time + location;

const getBody = (
  subsections?: SubsectionProps[],
  text?: string,
  list?: string[]
) => {
  if (subsections)
    return subsections.map(subsection => (
      <Subsection key={serializeSubsection(subsection)} {...subsection} />
    ));
  return <TwoColumnLayout rightContent={getPlainBody(text, list)} />;
};

export interface SectionProps {
  title: string;
  text?: string;
  list?: string[];
  subsections?: SubsectionProps[];
  folded?: boolean;
}

const Section: React.SFC<SectionProps> = ({
  title,
  text,
  list,
  subsections,
  folded
}) => (
  <section className="section">
    <div className="section__title">{title}</div>
    <div className={`section__body${folded ? ' section__body--folded' : ''}`}>
      {getBody(subsections, text, list)}
    </div>
  </section>
);

Section.defaultProps = {
  folded: false
};

export default Section;
