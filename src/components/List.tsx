import * as React from 'react';
import TextWithCustomTags from 'containers/TextWithCustomTags';

export interface ListProps {
  items: string[];
}

const List: React.SFC<ListProps> = ({ items }) => (
  <ul className="list">
    {Array.isArray(items) && items.map(item => (
      <li key={item} className="list__item">
        <TextWithCustomTags>{item}</TextWithCustomTags>
      </li>
    ))}
  </ul>
);

export default List;
