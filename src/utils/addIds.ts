import * as uuid from 'uuid';

const addId = (obj: any) => ({ id: uuid.v4(), ...obj });

const addIds = (payload: any) => {
  const newPayload = { ...payload, resumeId: uuid.v4(), personId: uuid.v4() };
  if (Array.isArray(payload.sections)) {
    newPayload.sections = payload.sections.map((section: any) => {
      const sectionWithId = addId(section);
      if ('subsections' in sectionWithId) {
        sectionWithId.subsections = sectionWithId.subsections.map(addId);
      }
      return sectionWithId;
    });
  }
  return newPayload;
};

export default addIds;
