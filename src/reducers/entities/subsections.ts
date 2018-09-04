import { SubsectionShape } from './subsections/subsection';

export interface SubsectionsShape {
  readonly [id: string]: SubsectionShape;
}
