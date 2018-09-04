import * as React from 'react';
import TwoColumnLayout from 'components/TwoColumnLayout';
import Subsection, { SubsectionProps } from './Subsection';
import PlainResumeContent from 'containers/PlainResumeContent';
import Toggle from 'containers/Toggle';

const serializeSubsection = ({
  post = '',
  company = '',
  time = '',
  location = ''
}: Partial<SubsectionProps>) => post + company + time + location;

const subsectionStub = {
  onExpandClick: () => {}
};

const getSubsections = (subsections: SubsectionProps[]) =>
  Array.isArray(subsections) &&
  subsections.map(_subsection => {
    const subsection = _subsection || subsectionStub;
    return (
      <Toggle key={serializeSubsection(subsection)} state={subsection.folded}>
        {({ state, toggle }) => (
          <Subsection {...subsection} folded={state} onExpandClick={toggle} />
        )}
      </Toggle>
    );
  });

const getSectionBody = (
  subsections?: SubsectionProps[],
  text?: string,
  list?: string[]
) => {
  if (subsections) return getSubsections(subsections);
  return (
    <TwoColumnLayout
      rightContent={<PlainResumeContent maybeText={text} maybeList={list} />}
    />
  );
};

export interface SectionProps {
  title: string;
  text?: string;
  list?: string[];
  subsections?: SubsectionProps[];
}

const Section: React.SFC<SectionProps> = ({
  title,
  text,
  list,
  subsections
}) => (
  <section className="section">
    <div className="section__title">{title}</div>
    <div className={`section__body$`}>
      {getSectionBody(subsections, text, list)}
    </div>
  </section>
);

export default Section;
