export enum SectionBodyTypes {
  SUBSECTIONS = 'subsections',
  LIST = 'list',
  TEXT = 'text'
}

export interface SectionShape {
  readonly id: string;
  readonly title: string;
  readonly body: {
    readonly type: SectionBodyTypes;
    readonly data: string;
  };
}
