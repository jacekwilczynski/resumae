import getSectionBody from './normalizeYamlData/getSectionBody';
import getSubsectionBody from './normalizeYamlData/getSubsectionBody';

const getResume = ({ resumeId, personId, sections }: any) => ({
  [resumeId]: {
    id: resumeId,
    person: personId,
    sections: Array.isArray(sections) ? sections.map(section => section.id) : []
  }
});

const getPerson = ({ name, contactInfo, personId }: any) => ({
  [personId]: {
    name,
    contactInfo,
    id: personId
  }
});

const getSections = ({ sections }: any) => {
  if (!Array.isArray(sections)) return [];
  return sections.map(section => ({
    id: section.id,
    title: section.title,
    body: getSectionBody(section)
  }));
};

const getSubsections = ({ sections }: any) => {
  if (!Array.isArray(sections)) return [];
  return sections.reduce((allSubsections: any[], section) => {
    if (!Array.isArray(section.subsections)) return allSubsections;
    return [
      ...allSubsections,
      ...section.subsections.map((subsection: any) => ({
        id: subsection.id,
        post: subsection.post,
        company: subsection.company,
        location: subsection.location,
        time: subsection.time,
        body: getSubsectionBody(subsection)
      }))
    ];
  }, []);
};

const makeObject = (arr: any[]) => {
  const obj = {};
  arr.forEach(item => {
    obj[item.id] = item;
  });
  return obj;
};

const normalizeYamlData = (yamlData: any) => {
  const resume = getResume(yamlData);
  const person = getPerson(yamlData);
  const section = makeObject(getSections(yamlData));
  const subsection = makeObject(getSubsections(yamlData));
  return {
    resume,
    person,
    section,
    subsection
  };
};

export default normalizeYamlData;
