import { SectionBodyTypes } from 'reducers/entities/sections/section';

export interface SectionBody {
  type: SectionBodyTypes;
  data: string | string[];
}

const getSectionBody = (section: any): SectionBody => {
  if (section.subsections) {
    return {
      type: SectionBodyTypes.SUBSECTIONS,
      data: section.subsections.map((subsection: any) => subsection.id)
    };
  }
  if (section.list) {
    return {
      type: SectionBodyTypes.LIST,
      data: section.list
    };
  }
  return {
    type: SectionBodyTypes.TEXT,
    data: section.text ? String(section.text) : ''
  };
};

export default getSectionBody;
