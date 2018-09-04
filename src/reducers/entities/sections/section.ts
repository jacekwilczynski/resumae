enum SectionBodyType {
  SUBSECTIONS = 'subsections',
  LIST = 'list',
  TEXT = 'text'
}

export interface SectionShape {
  readonly id: string;
  readonly title: string;
  readonly body: {
    readonly type: SectionBodyType;
    readonly data: string;
  };
}
