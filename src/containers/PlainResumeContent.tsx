import * as React from 'react';
import Text from 'components/Text';
import List from 'components/List';

export interface PlainResumeContentProps {
  maybeText?: string;
  maybeList?: string[];
}

const PlainResumeContent = ({ maybeText, maybeList }: PlainResumeContentProps) => {
  if (maybeText) return <Text>{maybeText}</Text>;
  if (maybeList) return <List items={maybeList} />;
  return null;
};

export default PlainResumeContent;
