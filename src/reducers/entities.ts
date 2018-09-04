import { PeopleShape } from './entities/people';
import { ResumesShape } from './entities/resumes';
import { SectionsShape } from './entities/sections';
import { SubsectionsShape } from './entities/subsections';
import { ListsShape } from './entities/lists';

export interface EntitiesShape {
  readonly resumes: ResumesShape;
  readonly people: PeopleShape;
  readonly sections: SectionsShape;
  readonly subsections: SubsectionsShape;
  readonly lists: ListsShape;
}
