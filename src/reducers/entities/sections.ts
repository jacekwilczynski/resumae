import { SectionShape } from './sections/section';

export interface SectionsShape {
  readonly [id: string]: SectionShape;
}
