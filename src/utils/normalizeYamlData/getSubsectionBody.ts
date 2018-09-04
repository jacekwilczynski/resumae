import { SubsectionBodyTypes } from 'reducers/entities/subsections/subsection';

export interface SubsectionBody {
  type: SubsectionBodyTypes;
  data: string | string[];
}

const getSubsectionBody = (subsection: any): SubsectionBody => {
  if (subsection.list) {
    return {
      type: SubsectionBodyTypes.LIST,
      data: subsection.list
    };
  }
  return {
    type: SubsectionBodyTypes.TEXT,
    data: subsection.text ? String(subsection.text) : ''
  };
};

export default getSubsectionBody;
