import { ResumeShape } from './resumes/resume';

export interface ResumesShape {
  readonly [id: string]: ResumeShape;
}
