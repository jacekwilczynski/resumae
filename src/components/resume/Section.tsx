import * as React from 'react';
import TwoColumnLayout from 'components/TwoColumnLayout';
import Subsection, { SubsectionProps } from './Subsection';
import getPlainBody from 'utils/getPlainBody';
import Toggle from '../../containers/Toggle';

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
      <Toggle key={serializeSubsection(subsection)} state={subsection.folded}>
        {({ state: folded, toggle }) => (
          <Subsection {...subsection} folded={folded} onExpandClick={toggle} />
        )}
      </Toggle>
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
