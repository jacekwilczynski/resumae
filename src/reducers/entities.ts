import people, { PeopleShape } from './entities/people';
import resumes, { ResumesShape } from './entities/resumes';
import sections, { SectionsShape } from './entities/sections';
import subsections, { SubsectionsShape } from './entities/subsections';
import { combineReducers } from 'redux';

export interface EntitiesShape {
  readonly resumes: ResumesShape;
  readonly people: PeopleShape;
  readonly sections: SectionsShape;
  readonly subsections: SubsectionsShape;
}

export default combineReducers({
  resumes,
  people,
  sections,
  subsections
});
