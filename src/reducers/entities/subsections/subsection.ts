enum SubsectionBodyTypes {
  TEXT = 'text',
  LIST = 'list'
}

export interface SubsectionShape {
  readonly post?: string;
  readonly company?: string;
  readonly time?: string;
  readonly location?: string;
  readonly body: {
    readonly type: SubsectionBodyTypes;
    readonly data: string;
  };
}
