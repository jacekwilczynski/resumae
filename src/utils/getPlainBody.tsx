import * as React from 'react';
import Text from 'components/Text';
import List from 'components/List';

const getPlainBody = (
  text?: string,
  list?: string[]
): React.ReactNode | null => {
  if (text) return <Text>{text}</Text>;
  if (list) return <List items={list} />;
  return null;
};

export default getPlainBody;
